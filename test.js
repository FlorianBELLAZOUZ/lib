const {deepEqual:equal} = require('assert')
const {stdout} = process

const end = '\n\x1b[39m'
const write = m=>stdout.write(m)
const test = (func,ok,fail)=>{try{func();ok()}catch(e){fail(e)}}
const stack = e=>e.stack.split('\n')[1].trim()
const fail = e=>write(' \x1b[31mfail : ' + e.message+' '+stack(e)+end)
const done = ()=>write(' \x1b[32mdone'+end)
const it = (name,func)=>(write('\x1b[30m\x1b[1m'+name),test(func,done,fail))
const ios = (func,ios)=>{
  ios.forEach(([i,o,name])=>it(name||`${i} should equal ${o}`,()=>equal(func(...i),o))) }

module.exports = {it,equal,ios}
