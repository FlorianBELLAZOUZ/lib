const convert = (value,tiers,price) => {
  const prices = tiers.map((t,i)=>price*(2**i))
  let tier
  for(tier=0;tier<prices.length;tier++){
    let price=prices[tier]
    if(price>=value){
      if(tier<prices.length-1) return tiers[tier]*2*(value/prices[tier+1])
      return tiers[tier]*(value/prices[tier])}}}

module.exports = convert