const zeroDecimals = ['bif','clp','djf','gnf','jpy','kmf','krw','mga','pyg','rwf','vnd','vuv','xaf','xof','xpf']
const toCurrency = (amount,curr) => zeroDecimals.includes(curr)?amount:amount/100
const toStripe = (value,curr) => zeroDecimals.includes(curr)?value:value*100

module.exports={toCurrency,toStripe}