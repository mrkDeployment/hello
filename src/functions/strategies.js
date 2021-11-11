import axios from 'axios'


export const SL = async (symbol,amount,token,live_price) => {

	let SLPercent=window.localStorage.getItem('SLPercent')*0.01
	let Buying_Price=window.localStorage.getItem(symbol)
	console.log('symbol',symbol,'live_price',live_price,'Buying_price',Buying_Price*(1-SLPercent))
	if (live_price< Buying_Price*(1-SLPercent)){
		console.log('fffff')
		let sell_data = {
			type: "sell",
			execution: "market",
			srcCurrency: symbol,
			dstCurrency: "rls",
			amount: String(amount),
		}
	  
		let config = {
			headers: { Authorization: `token ${token}` }
		};
	  
		await axios.post('https://corsproxyy.herokuapp.com/https://api.nobitex.ir/market/orders/add', sell_data,config)
		.then((response) => {
		  console.log('Stop Loss',response)
		})
		.catch((error) => {
		  console.error('erroppppppp',error)
		})
	}	
}