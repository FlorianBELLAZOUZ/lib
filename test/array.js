const {it,equal} = require('../test')
const array = require('../array')

const a = [{a:'1'},{b:2},{c:true}]
const b = [{a:'1'},{b:2},{c:true}]
const c = [{a:'2'},{b:2},{c:true}]
const d = [{a:'2'},{b:2},{c:true},{d:'d'}]

console.log('.equal(a,b)')
it('should be equal',()=>equal(array.equal(a,b),true))
it('should not be equal',()=>equal(array.equal(a,c),false))
it('should not be equal',()=>equal(array.equal(a,d),false))

console.log('.remove(a,f)')
it('should remove',()=>equal(array.remove([1,2,3,4,5,6],e=>e%2==0),[1,3,5]))
