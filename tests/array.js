const {it,equal} = require('../test')
const array = require('../array')

const test = (func,ios)=>{
  ios.forEach(([i,o])=>it(`${i} should equal ${o}`,()=>equal(func(...i),o))) }

const a = [{a:'1'},{b:2},{c:true}]
const b = [{a:'1'},{b:2},{c:true}]
const c = [{a:'2'},{b:2},{c:true}]
const d = [{a:'2'},{b:2},{c:true},{d:'d'}]

console.log('.equal(a,b)')
it('should be equal',()=>equal(array.equal(a,b),true))
it('should not be equal',()=>equal(array.equal(a,c),false))
it('should not be equal',()=>equal(array.equal(a,d),false))

console.log('.removes(a,f)')
it('should removes',()=>equal(array.removes([1,2,3,4,5,6],e=>e%2==0),[1,3,5]))

console.log('.groupBy(a,f)')
let ios = [
  [[[1,2,2,4,5],a=>a],[[5],[4],[2,2],[1]]],
  [[[1,2,2,4,5],a=>a*2],[[5],[4],[2,2],[1]]],
  [[[{a:1},{a:2},{a:2},{a:4},{a:5}],a=>a.a],[[{a:5}],[{a:4}],[{a:2},{a:2}],[{a:1}]]], ]

test(array.groupBy,ios)
