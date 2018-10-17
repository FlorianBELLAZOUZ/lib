const {keys:ks} = Object
const inf = Infinity

const mem = (func,max=inf)=>{
  const cache = {}
  return arg=>{
    const k = arg+''
    if(cache[k]) return cache[k]
    cache[k]=func(arg)
    if(max!=inf&&ks(cache).length>=max) delete cache[ks(cache)[0]]
    return cache[k] } }

const speed = func=>{
  const start = process.hrtime.bigint()
  func()
  const end = process.hrtime.bigint()
  return end-start }

module.exports = {mem,speed}
