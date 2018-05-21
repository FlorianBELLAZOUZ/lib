const {alphabet:Alphabet,int,fixed} = require('./alphabet')
const {times} = require('./funcs')

const fromCharCode = a=>String.fromCharCode(a)
const AZ=times(26,i=>65+i).map(fromCharCode)
const az=times(26,i=>97+i).map(fromCharCode)
const ten=times(10,i=>i).map(String)

const alphabet = AZ.concat(az,ten)
const rand = ()=>{
  const val = Alphabet(Math.floor(Math.random()*15018570),alphabet)
  return fixed(4,val,alphabet)}
const ms = ()=>{
  const val = Alphabet(Date.now(),alphabet)
  return fixed(8,val,alphabet)}

const uid = ()=>rand()+ms()
const ms = id=>int(id.slice(4),alphabet)

module.exports = uid
module.exports.ms = ms
