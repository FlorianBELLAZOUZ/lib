const u = undefined

const hours = timeZone=>{
  const d = new Date()
  const opts = {timeZone,hour12:false}
  const [_,hours] = d.toLocaleString(u,opts).split(' ').split(':')
  return hours }

const today = timeZone=>{
  const d = new Date()
  const [m,d,y]=d.toLocaleDateString(u,{timeZone}).split('/')
  return y*10000+m*100+d*1 }

const weeks = date=>{
  const d = (date||new Date())
  d.setHours(0, 0, 0, 0)
  d.setDate(d.getDate()+3-(d.getDay()+6)%7) // Thursday in current week decides the year
  const w1 = new Date(d.getFullYear(),0,4) // January 4 is always in week1
  // Adjust to Thursday in week1 and count number of weeks from d to w1
  return 1+Math.round(((d-w1)/86400000-3+(w1.getDay()+6)%7)/7) }

module.exports={today,weeks,hours}
