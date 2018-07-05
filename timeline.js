// timeline::{12:[a,b],25:[c],100:[d,e,f]}

const add = (line,frame,el)=>line[frame]=(line[frame]||[]).concat(el)

module.exports = {add}
