const today = ()=>{
  const d = new Date()
  return d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate() }

const weeks = date=>{
  const t = (date||today())+''
  const d = new Date(`${t.slice(0,4)}-${t.slice(4,6)}-${t.slice(6,8)}`)
  d.setDate(d.getDate()+3-(d.getDay()+6)%7) // Thursday in current week decides the year
  const w1 = new Date(d.getFullYear(),0,4) // January 4 is always in week1
  // Adjust to Thursday in week1 and count number of weeks from d to w1
  return 1+Math.round(((d-w1)/86400000-3+(w1.getDay()+6)%7)/7) }

module.exports={today,weeks}
