const {is:o,equal:oe} = require('./object')

const concat = (...a)=>([]).concat(a)
const flat = a=>a.reduce((a,el)=>a.concat(Array.isArray(el)?flat(el):el),[])
const times = (a,func)=>{let i=0;let o=[];while(i<a){o.push(func(i++))};return o}
const uniq = a=>a.filter((el,i)=>a.indexOf(el)===i)
const equal = (a,b)=>a.every((el,i)=>o(el)?oe(el,b[i]):el==b[i])
const diff = (a,b)=>a.filter(aa=>b.every(bb=>aa!=bb))
const removes = (a,func)=>{
  for(var i=a.length-1;i>=0;i--)
    if(func(a[i])) a.splice(a.indexOf(a[i]),1)
  return a }
const remove = (a,el)=>{
  const i = a.indexOf(el)
  if(i!=-1) a.splice(i,1) }
const each = (a,func)=>{
  for(var i=a.length-1;i>=0;i--){
    func(a[i])} }
const groupBy = (a,func)=>{
  let temp = a.slice()
  let groups = []
  let i = temp.length-1
  while(i>=0){
    let y = groups.length-1
    while(y>=0){
      const el = groups[y]&&groups[y][0]
      if(func(temp[i])==func(el)){
        groups[y].push(temp[i])
        temp.splice(i,1)
        break }
      y-- }
    if(temp[i]&&y==-1) {
      groups.push([temp[i]])
      temp.splice(i,1) }
      i-- }
  return groups }

module.exports = {uniq,flat,times,equal,removes,remove,each,groupBy,diff,concat}
