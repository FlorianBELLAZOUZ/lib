const Crypto = require('./Crypto')
const {keys} = Object

const reduce = (func,init,obj)=>
  keys(obj).reduce((acc,k,i)=>func(acc,k,obj[k],i),init)

const clone = (obj,cln={})=>{
  for(var i in obj)
    cln[i]=(typeof obj[i]=='object')?clone(obj[i],obj[i].constructor()):obj[i]
  return cln }

const stringify = JSON.stringify
const parse = string=>{try{return JSON.parse(string)}catch(e){return}}
const encrypt = (key,obj)=>Crypto.encrypt(key,stringify(obj))
const decrypt = (key,string)=>parse(Crypto.decrypt(key,string))

module.exports = {reduce,clone,encrypt,decrypt}
