const today = ()=>{
  const d = new Date()
  return d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate() }

module.exports = {today}
