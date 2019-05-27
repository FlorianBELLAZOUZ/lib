const u = undefined

const diff = {
  days:(a,b)=>{
    a=a+'';b=b+'';
    const [ay,am,ad] = [a.slice(0,4),a.slice(4,6),a.slice(6,8)]
    const [by,bm,bd] = [b.slice(0,4),b.slice(4,6),b.slice(6,8)]
    const autc = Date.UTC(ay*1,am-1,ad*1)
    const butc = Date.UTC(by*1,bm-1,bd*1)
    return Math.floor((butc-autc)/(1000*60*60*24)) } }

const hours = timeZone=>{
  const d = new Date()
  const opts = {timeZone,hour12:false}
  const [_,hours] = d.toLocaleString(u,opts).split(' ').split(':')
  return hours }

const today = timeZone=>{
  const dt = new Date()
  const [m,d,y]=dt.toLocaleDateString(u,{timeZone}).split('/')
  return y*10000+m*100+d*1 }

const weeks = date=>{
  const d = (date||new Date())
  d.setHours(0, 0, 0, 0)
  d.setDate(d.getDate()+3-(d.getDay()+6)%7) // Thursday in current week decides the year
  const w1 = new Date(d.getFullYear(),0,4) // January 4 is always in week1
  // Adjust to Thursday in week1 and count number of weeks from d to w1
  return 1+Math.round(((d-w1)/86400000-3+(w1.getDay()+6)%7)/7) }

module.exports={today,weeks,hours,diff}
