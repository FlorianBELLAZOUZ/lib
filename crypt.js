const {parse,stringify} = require('./object')
const crypto = require('crypto')

const utf = 'utf8'
const base = 'base64'
const algo = 'aes192'
const iv = Buffer.alloc(16, 0)
const encrypt = (key,a)=>{
  const k = crypto.scryptSync(key,'salt',24)
  const c = crypto.createCipheriv(algo,k,iv)
  return c.update(a,utf,base)+c.final(base) }
const decrypt = (key,a)=>{
  try{
    const k = crypto.scryptSync(key,'salt',24)
    const dc = crypto.createDecipheriv(algo,k,iv)
    return dc.update(a,base,utf)+dc.final(utf) }
  catch(e){
    return undefined }}

const object = {
  encrypt:(key,obj)=>encrypt(key,stringify(obj)),
  decrypt:(key,string)=>parse(decrypt(key,string)), }

module.exports = {encrypt,decrypt,object}
