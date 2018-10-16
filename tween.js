const {assign,keys} = Object
const {min} = Math

const tween = (s,e,d,ea)=>{
  let o = assign({},s)
  return t=>(keys(e).map(k=>o[k]=(e[k]-s[k])*ea(min(t/d,1))+s[k]),o) }

module.exports = tween
