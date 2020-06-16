const {parse,stringify} = require('./object')
const crypto = require('crypto')

const utf = 'utf8'
const base = 'base64'
const encrypt = (key,a)=>{
  const cc = crypto.createCipher('aes192',key)
  return cc.update(a,utf,base)+cc.final(base) }
const decrypt = (key,a)=>{
  try{
    const dc = crypto.createDecipher('aes192',key)
    return dc.update(a,base,utf)+dc.final(utf) }
  catch(e){
    return undefined }}

const object = {
  encrypt:(key,obj)=>Strg.encrypt(key,stringify(obj)),
  decrypt:(key,string)=>parse(Strg.decrypt(key,string)), }

module.exports = {encrypt,decrypt,object}
