const {is:o,equal:oe} = require('./object')

const flat = a=>a.reduce((a,el)=>a.concat(Array.isArray(el)?flat(el):el),[])
const times = (a,func)=>{let i=0;let o=[];while(i<a){o.push(func(i++))};return o}
const uniq = a=>a.filter((el,i)=>a.indexOf(el)===i)
const equal = (a,b)=>a.every((el,i)=>o(el)?oe(el,b[i]):el==b[i])
const remove = (a,func)=>{
  for(var i=a.length-1;i>=0;i--)
    if(func(a[i])) a.splice(a.indexOf(a[i]),1)
  return a }

module.exports = {uniq,flat,times,equal,remove}
