const times = (a,func)=>(new Array(a)).fill('').map((a,i)=>func(i))

module.exports = {times}
