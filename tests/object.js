const obj = require('../object')
const {it,equal,ios} = require('../test')

it('should deep assign',()=>{
  const a = {a:{a:1,b:2,d:2},b:1,d:3}
  const b = {a:{a:1,b:3,c:2},b:2,c:1}
  const c = {a:{a:1,b:3,c:2,d:2},b:2,c:1,d:3}
  equal(obj.assign(a,b),c) })

it('should deep assign',()=>{
  const a = {a:{a:1,b:2,d:2},b:5,d:3}
  const b = {a:{a:1,c:2,e:{a:1}},b:2,c:1}
  const c = {a:{a:1,b:2,c:2,d:2,e:{a:1}},b:2,c:1,d:3}
  equal(obj.assign(a,b),c) })

it('should deep assign',()=>{
  const a = {a:{a:1,b:2,d:2,e:{b:2}},b:5,d:3}
  const b = {a:{a:1,c:2,e:{a:1}},b:2,c:1}
  const c = {a:{a:1,b:2,c:2,d:2,e:{a:1,b:2}},b:2,c:1,d:3}
  equal(obj.assign(a,b),c) })

it('should deep assign',()=>{
  const a = {a:{a:1,b:2,d:2,e:{a:3,b:2}},b:5,d:3}
  const b = {a:{a:1,c:2,e:{a:8}},b:2,c:1}
  const c = {a:{a:1,b:2,c:2,d:2,e:{a:8,b:2}},b:2,c:1,d:3}
  equal(obj.assign(a,b),c) })
