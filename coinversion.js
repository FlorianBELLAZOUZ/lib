const tierPrices = (curr,daily) => {
  const currency = daily.cointributors.currencies[curr]
  if (!currency) return
  return daily.cointributors.tiers.map((t,i)=>currency.price*(2**i))}

const convert = (value,curr,daily) => {
  const prices = tierPrices(curr, daily)
  const tiers = daily.cointributors.tiers
  if (!prices) return
  let tier
  for(tier=0;tier<prices.length;tier++){
    let price=prices[tier]
    if(price>=value){
      if(tier<prices.length-1) return tiers[tier]*2*(value/prices[tier+1])
      return tiers[tier]*(value/prices[tier])}}}

module.exports = convert