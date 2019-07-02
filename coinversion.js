const convert = (value,tiers,price) => {
  const prices = tiers.map((t,i)=>price*(2**i))
  let tier
  for(tier=0;tier<prices.length;tier++){
    let price=prices[tier]
    if(price>=value)return Math.round(tiers[tier]*2*(value/prices[tier+1]))}
  return Math.round(tiers[tiers.length-1]*(value/prices[tiers.length-1]))}

module.exports = convert