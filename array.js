const {is:o,equal:oe} = require('./object')

const flat = a=>a.reduce((a,el)=>a.concat(Array.isArray(el)?flat(el):el),[])
const times = (a,func)=>(new Array(a)).fill('').map((a,i)=>func(i))
const uniq = a=>a.filter((el,i)=>a.indexOf(el)===i)
const equal = (a,b)=>a.every((el,i)=>o(el)?oe(el,b[i]):el==b[i])

module.exports = {uniq,flat,times,equal}
