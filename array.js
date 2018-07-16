const flat = a=>a.reduce((a,el)=>a.concat(Array.isArray(el)?flat(el):el),[])
const times = (a,func)=>(new Array(a)).fill('').map((a,i)=>func(i))
const uniq = a=>a.filter((el,i)=>a.indexOf(el)===i)

module.exports = {uniq,flat,times}
