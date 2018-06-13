const crypto = require('crypto')

const utf = 'utf8'
const ltn = 'latin1'
const encrypt = (key,a)=>{
  const cc = crypto.createCipher('aes192',key)
  return cc.update(a,utf,ltn)+cc.final(ltn) }
const decrypt = (key,a)=>{
  const dc = crypto.createDecipher('aes192',key)
  return dc.update(a,ltn,utf)+dc.final(utf) }

module.exports = {encrypt,decrypt}
