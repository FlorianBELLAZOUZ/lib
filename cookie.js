const {keys}=Object

const set = (key,value,options={})=>
  `${key}=${value}${keys(options).reduce((acc,k)=>{
    acc+=`; ${k}=${options[k]}`
    return acc },'')}`

const get = (cookies,key)=>
  cookies.split(';').reduce((acc,c)=>{
    const i = c.indexOf('=')
    acc[c.slice(0,i).trim()]=c.slice(i+1)
    return acc },{})[key]

const remove = (key)=>`${key}=; Max-Age=0`

const browser = {
  set:(key,value,opts)=>window.document.cookie=set(key,value,opts),
  get:(key)=>get(window.document.cookie,key),
  remove:(key)=>window.document.cookie=remove(key) }

module.exports = {set,get,remove,browser}
