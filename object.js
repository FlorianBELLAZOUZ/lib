const {keys} = Object

const reduce = (func,init,obj)=>
  keys(obj).reduce((acc,k,i)=>func(acc,k,obj[k],i),init)

const clone = (obj,cln={})=>{
  for(var i in obj)
    cln[i]=(typeof obj[i]=='object')?clone(obj[i],obj[i].constructor()):obj[i]
  return cln }

const stringify = JSON.stringify
const parse = string=>{try{return JSON.parse(string)}catch(e){return}}
const forEach = (obj,func)=>keys(obj).forEach(k=>func(obj[k],k))
const is = a=>typeof a==='object'
const kEqual = (a,b)=>keys(a).every(ka=>is(a[ka])?kEqual(a[ka],b[ka]):a[ka]==b[ka])
const equal = (a,b)=>kEqual(a,b)&&kEqual(b,a)
const has = (o,k)=>o===undefined?false:k in o
const filter = (o,f)=>keys(o).filter(f).reduce((acc,k)=>(acc[k]=o[k],acc),{})
const picks = (o,ks)=>ks.reduce((acc,k)=>(acc[k]=o[k],acc),{})
const assign = (a={},b={})=>{
  for(var k in b)
    a[k]=(typeof b[k]=='object')?assign(a[k],b[k]):b[k]
  return a }
const invert = a=>keys(a).reduce((acc,k)=>(acc[a[k]]=k,acc),{})

module.exports = {forEach,reduce,clone,equal,is,has,filter,picks,
  stringify,parse,assign,invert}
