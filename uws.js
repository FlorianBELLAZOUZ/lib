const {encrypt,decrypt} = require('./crypt').object
const {parse} = require('./object')
const Fs = require('fs')

const err = (res,msg)=>res.writeStatus('400 Bad Request').end(msg)
const form = {
  encode:obj=>Object.keys(obj).map(k=>k+'='+(encodeURIComponent(obj[k])||'""')).join('&'),
  decode:obj=>obj.split('&').reduce((acc,el)=>{
    const [key,val]=el.split('=');acc[key]=decodeURIComponent(val);return acc },{}) }
const queries = req=>form.decode(req.getQuery())
const jwt = s=>parse(Buffer.from(s.split('.')[1],'base64').toString('utf8'))
const redirect = (url,res)=>{
  res.writeStatus('302 Found')
  res.writeHeader('Location',url)
  res.end() }
const cookie = (res,key,data)=>
  res.writeHeader('Set-Cookie',`${key}=${data}; Secure; Expires=Tue, 19 Jan 2038 04:14:07 GMT; HttpOnly; Domain=kaaarot.com; Path=/`)
const cookiepub = (res,key,data)=>
  res.writeHeader('Set-Cookie',`${key}=${data}; Secure; Expires=Tue, 19 Jan 2038 04:14:07 GMT; Domain=kaaarot.com`)
const cookies = req=>req.getHeader('cookie').split(';').reduce((acc,c)=>{
  const i = c.indexOf('=')
  acc[c.slice(0,i).trim()]=c.slice(i+1)
  return acc },{})

const crypt = (pass,res,obj)=>cookie(res,'profile',encrypt(pass,obj))
const auth = (pass,req)=>decrypt(pass,cookies(req).profile)

const raw = res=>{
  return new Promise((d,e)=>{
    res.onAborted(e)
    let body = Buffer.of()
    res.onData((raw,isLast)=>{
      body = Buffer.concat([body,Buffer.from(raw)])
      if(isLast) d(body) }) }) }
const text = res=>raw(res).then(b=>b.toString())
const json = res=>text(res).then(parse)

const cors = res=>{
  res.writeHeader('Access-Control-Allow-Origin',`https://${process.env.DOMAIN}`)
  res.writeHeader('Access-Control-Allow-Credentials','true')
  res.writeHeader('Access-Control-Allow-Headers','*')
  res.writeHeader('Access-Control-Request-Method','*') }

const walk=dir=>{
  let files=[]
  const list=Fs.readdirSync(dir)
  list.forEach(file=>{
    file=dir+'/'+file
    const stat=Fs.statSync(file)
    if(stat&&stat.isDirectory()) files=files.concat(walk(file))
    else files.push(file) })
  return files }

const static = (url,path)=>{
  const files = walk(path).reduce((o,e)=>{
    o[e.replace(path,'')]=Fs.readFileSync(e)
    return o },{})
  return (res,req)=>res.end(files[req.getUrl().replace(url,'')]) }

const end = (alive,res,string)=>{
  if(alive) res.end(string) }

module.exports = {jwt,redirect,cookie,cookiepub,crypt,auth,cors,
  raw,json,text,cookies,auth,static,form,queries,err,end}
