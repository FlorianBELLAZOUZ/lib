const crypto = require('crypto')

const utf = 'utf8'
const ltn = 'latin1'
const encrypt = (key,a)=>{
  const cc = crypto.createCipher('chacha20',key)
  return cc.update(a,utf,ltn)+cc.final(ltn) }
const decrypt = (key,a)=>{
  const dc = crypto.createDecipher('chacha20',key)
  return dc.update(a,ltn,utf)+dc.final(utf) }

module.exports = {encrypt,decrypt}
