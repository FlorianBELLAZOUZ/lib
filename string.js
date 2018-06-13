const crypto = require('crypto')

const utf = 'utf8'
const base = 'base64'
const encrypt = (key,a)=>{
  const cc = crypto.createCipher('aes192',key)
  return cc.update(a,utf,base)+cc.final(base) }
const decrypt = (key,a)=>{
  const dc = crypto.createDecipher('aes192',key)
  return dc.update(a,base,utf)+dc.final(utf) }

module.exports = {encrypt,decrypt}
