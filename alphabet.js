// alphabet::int:Uint53=>alphabet=>number:String
const alphabet = (int,alphabet)=>{
  if(int===0) return alphabet[0]
  let rest = int
  let out = ''
  let i = 0
  const length = alphabet.length
  while(rest>0){
    const pow = Math.pow(length,i)
    const brut = rest%(length*pow)
    const symbole = alphabet[brut/pow]
    rest=rest-brut
    out=symbole+out
    i++ }
  return out}
// int::string:Unit53Alphabet=>alphabet=>int:Uint53
const int = (string,alphabet)=>
  string.split('').reverse().reduce((total,el,i)=>
    alphabet.indexOf(el)*Math.pow(alphabet.length,i)+total,0)
const fixed = (size,val,alphabet)=>{
  const add = size-val.length
  return add>0?alphabet[0].repeat(add)+val:val.slice(0,size)}

module.exports = {alphabet,int,fixed}
