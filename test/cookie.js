const {it,equal} = require('../test')
const cookie = require('../cookie')
const str = JSON.stringify

const test = (func,ios)=>{
  ios.forEach(([i,o])=>it(`${str(i)} should return ${o}`,()=>equal(func(...i),o))) }

let ios
console.log('.get')
let c = 'news=1537660800000; version=1548019000; test=1; c=test;'
ios = [
  [[c,'test'],'1'],
  [[c,'news'],'1537660800000'],
  [[c,'c'],'test'],
  [[c,'version'],'1548019000'],
  [[c,'whatthe'],undefined],
  [[c,'false'],undefined] ]
test(cookie.get,ios)

console.log('.set')
ios = [
  [['time',100],'time=100'],
  [['news','okok',{httponly:'true'}],'news=okok; httponly=true'],
  [['t','true',{HttpOnly:'true'}],'t=true; HttpOnly=true'],
  [['vvvv','vvvv',{Path:'/ok/test'}],'vvvv=vvvv; Path=/ok/test'],
  [['4444',4444,{Path:'/ok/test',HttpOnly:'true',Secure:'true'}],'4444=4444; Path=/ok/test; HttpOnly=true; Secure=true'], ]
test(cookie.set,ios)
