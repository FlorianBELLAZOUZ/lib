const mem = func=>{
  const cache = {}
  return arg=>{
  if(cache[arg]) return cache[arg]
  const r=func(arg)
  cache[arg]=r
  return r } }

module.exports = {mem}
