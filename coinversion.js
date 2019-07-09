const convert = (value,tiers,price) => {
  if (!value||value<price)return
  const prices = tiers.map((t,i)=>price*(2**i))
  if (value>=prices[tiers.length-1])return Math.round(tiers[tiers.length-1]*(value/prices[tiers.length-1]))
  let tier
  for(tier=prices.length-2;tier>=0;tier--){
    let price=prices[tier]
    if(value>=price)return Math.round(tiers[tier]*2*(value/prices[tier+1]))}}

module.exports = convert