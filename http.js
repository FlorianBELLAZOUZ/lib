const {request:https} = require('https')
const {request:http} = require('http')
const {assign} = Object
const Url = require('url')

const opts = (method,url,data)=>{
  const headers = data&&{
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(JSON.stringify(data)) }
  return assign(Url.parse(url),{method}) }

const fetch = method=>(url,data)=>
  new Promise((suc,rej)=>{
    let body = ''
    const response = res=>{
      res.on('data',c=>body+=c)
      res.on('end',()=>suc(JSON.parse(body))) }
    const options = opts(method,url,data)
    const request = options.protocol==='http:'?http:https
    const req = request(options,response)
    req.on('error',rej)
    data&&req.write(JSON.stringify(data))
    req.end() })
const get = fetch('GET')
const post = fetch('POST')

module.exports = {fetch,get,post}
