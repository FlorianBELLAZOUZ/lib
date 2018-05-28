const {keys} = Object

const reduce = (func,init,obj)=>
  keys(obj).reduce((acc,k,i)=>func(acc,k,obj[k],i),init)

const clone = (obj,cln={})=>{
  for(var i in obj)
    cln[i]=(typeof obj[i]=='object')?clone(obj[i],obj[i].constructor()):obj[i]
  return cln }

module.exports = {reduce,clone}
