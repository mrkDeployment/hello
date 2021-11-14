import axios from 'axios'


export const SL = async (symbol,amount,token,live_price) => {

	let SLPercent=window.localStorage.getItem('SLPercent')*0.01
	let Buying_Price=window.localStorage.getItem(symbol)

	if (live_price< Buying_Price*(1-SLPercent)){
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
		if (amount>1000000){
			await axios.post('https://corsproxyy.herokuapp.com/https://api.nobitex.ir/market/orders/add', sell_data,config)
			.then((response) => {
			  console.log('Stophhhhhhhhhhhhhhhhhhh Loss',response)
			})
			.catch((error) => {
			  console.error('erotttttttttttttttttt',error)
			})
		}
	}	
}