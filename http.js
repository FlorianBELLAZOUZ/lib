const {request:https} = require('https')
const {request:http} = require('http')
const Url = require('url')
const {assign} = Object

const fetch = method=>(url,data,headers,opts)=>
  new Promise((suc,rej)=>{
    let body = ''
    const response = res=>{
      res.on('data',c=>body+=c)
      res.on('end',()=>suc(body)) }
    const options = assign(Url.parse(url),{method,headers},opts)
    const request = options.protocol==='http:'?http:https
    const req = request(options,response)
    req.on('error',rej)
    data&&req.write(data)
    req.end() })
const get = fetch('get')
const post = fetch('post')

const json = method=>(url,data,headers,opts)=>{
  const d = JSON.stringify(data)
  const h = {'Content-Length':d.length}
  return fetch(method)(url,d,assign(h,headers),opts).then(b=>b&&JSON.parse(b))}

module.exports = {fetch,get,post,json:{get:json('get'),post:json('post')}}
