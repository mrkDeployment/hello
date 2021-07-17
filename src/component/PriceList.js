import React from 'react';
import '../App.css';
import axios from 'axios'

class List extends React.Component {
  constructor(props){
    super(props)
    this.state={
    }
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      this.handleMax()
    }, 3000)
    }

  async handleMax(){

    var audio = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');

    axios.get('https://corsproxyy.herokuapp.com/https://api.nobitex.ir/v2/orderbook/USDTIRT')
    .then((response) => {
      this.setState({ tether: Number.parseFloat(response.data.bids[0][0], 10) })
    })
    .catch((error) => {
      console.log('erroppppppp')
    })

    let coin_list = [
      "btc",
      "eth",
      "ltc",
      "bch",
      "xlm",
      "trx",
      "doge",
      "etc",
      "bnb",
      "eos",
      "xrp",
      "uni",
    ]

    let nobitex_coin_list = [
      "BTCIRT",
      "ETHIRT",
      "LTCIRT",
      "BCHIRT",
      "XLMIRT",
      "TRXIRT",
      "DOGEIRT",
      "ETCIRT",
      "BNBIRT",
      "EOSIRT",
      "XRPIRT",
      "UNIIRT",
    ]

    let binance_coin_list = [
      "BTCUSDT",
      "ETHUSDT",
      "LTCUSDT",
      "BCHUSDT",
      "XLMUSDT",
      "TRXUSDT",
      "DOGEUSDT",
      "ETCUSDT",
      "BNBUSDT",
      "EOSUSDT",
      "XRPUSDT",
      "UNIUSDT",
    ]

    let exir_coin_list = [
      "btc-irt",
      "eth-irt",
      "ltc-irt",
      "bch-irt",
      "xlm-irt",
      "trx-irt",
      "doge-irt",
      // "etc-irt",
      // "bnb-irt",
      // "eos-irt",
      // "xrp-irt",
    ]

    
    for (let i = 1; i < nobitex_coin_list.length+1; i++) {

      var j = i-1;
      // window["data"+j] = {
      //   symbol: nobitex_coin_list[i-1]
      // }


      // nobitex API

      await axios.get('https://corsproxyy.herokuapp.com/https://api.nobitex.ir/v2/orderbook/' + nobitex_coin_list[i-1])
      .then((response) => {
        // var price= Number.parseFloat(response.data.bids[0][0], 10)/this.state.tether
        let price_sum_bid=0;
        let price_sum_ask=0;
        let quantity= window.localStorage.getItem('quantity');
        for (let k = 0; k < 16; k++) {
          // if (i === 3) { break; }
          price_sum_bid += Number.parseFloat(response.data.bids[i][0], 10)*Number.parseFloat(response.data.bids[i][1], 10)
          
          if (quantity*3 < price_sum_bid){
            let price_bid = Number.parseFloat(response.data.bids[i][0], 10)/this.state.tether
            this.setState({ [`nobitex_price_bid${j}`]: price_bid })
            break;
          }else{
            if (k==15){
              let price_bid = Number.parseFloat(response.data.bids[15][0], 10)*1.03/this.state.tether
              this.setState({ [`nobitex_price_bid${j}`]: price_bid })
            }
          }
        }

        for (let k = 0; k < 16; k++) {

          price_sum_ask += Number.parseFloat(response.data.asks[i][0], 10)*Number.parseFloat(response.data.asks[i][1], 10)
          
          if (quantity*3 < price_sum_bid){
            let price_ask = Number.parseFloat(response.data.asks[i][0], 10)/this.state.tether
            this.setState({ [`nobitex_price_ask${j}`]: price_ask })
            break;
          }else{
            if (k==15){
              let price_ask = Number.parseFloat(response.data.asks[15][0], 10)*1.03/this.state.tether
              this.setState({ [`nobitex_price_ask${j}`]: price_ask })
            }
          }
        }

        // this.setState({nobitex_volume2: response.data.trades[0].volume})
        // this.setState({ [`nobitex_price${j}`]: price })
      })
      .catch((error) => {
        console.log('erroppppppp')
      })
      
      //binance API

      await axios.get("https://api.binance.com/api/v3/ticker/price?symbol="+binance_coin_list[j], {
      })
      .then(response => {
        var price= Number.parseFloat(response.data.price, 10)
        console.log('aaaaaaaa')
        this.setState({ [`binance_price${j}`]: price })
      })
      .catch(error => {
        console.log(error);
      });

      // if(this.state[`binance_price${j}`]>=this.state[`nobitex_price${j}`]){
      //   this.setState({ [`min${j}`]: this.state[`binance_price${j}`] })
      //   this.setState({ [`name_min${j}`]: binance_coin_list[j] })
      //   this.setState({ [`max${j}`]: this.state[`nobitex_price${j}`] })
      //   this.setState({ [`name_max${j}`]: nobitex_coin_list[j] })
      // }else{
      //   this.setState({ [`max${j}`]: this.state[`binance_price${j}`] })
      //   this.setState({ [`name_max${j}`]: binance_coin_list[j] })
      //   this.setState({ [`min${j}`]: this.state[`nobitex_price${j}`] })
      //   this.setState({ [`name_min${j}`]: nobitex_coin_list[j] })
      // }

      //exir API
      // if(j<7){
      //   await axios.get('https://api.exir.io/v1/trades', {
      //   })
      //   .then(response => {
      //     var price= Number.parseFloat(response.data[exir_coin_list[j]][0].price, 10)/Number.parseFloat(response.data["usdt-irt"][0].price, 10)
      //     this.setState({ [`exir_price${j}`]: price })
      //   })
      //   .catch(error => {
      //     console.log('error:')
      //   })

      //   if(this.state[`binance_price${j}`]>=this.state[`exir_price${j}`]){
      //     this.setState({ [`minn${j}`]: this.state[`binance_price${j}`] })
      //     this.setState({ [`name_minn${j}`]: binance_coin_list[j] })
      //     this.setState({ [`maxx${j}`]: this.state[`exir_price${j}`] })
      //     this.setState({ [`name_maxx${j}`]: exir_coin_list[j] })
      //   }else{
      //     this.setState({ [`maxx${j}`]: this.state[`binance_price${j}`] })
      //     this.setState({ [`name_maxx${j}`]: binance_coin_list[j] })
      //     this.setState({ [`minn${j}`]: this.state[`exir_price${j}`] })
      //     this.setState({ [`name_minn${j}`]: exir_coin_list[j] })
      //   }

      //   // if(Math.abs((this.state[`maxx${j}`]-this.state[`minn${j}`])/this.state[`minn${j}`]*100)>4 && this.state[`binance_price${j}`] > this.state[`exir_price${j}`]){
      //   //   console.log("maxxxx",this.state[`maxx${j}`],this.state[`name_maxx${j}`])
      //   //   console.log("minnnn",this.state[`minn${j}`],this.state[`name_minn${j}`])
      //   //   console.log("exir",this.state[`binance_price${j}`])
      //   //   // console.log("nobitex",  this.state.binance_price,this.state.nobitex_volume)
      //   //   var now = new Date();
      //   //   console.log("taghir",(this.state[`maxx${j}`]-this.state[`minn${j}`])/this.state[`minn${j}`]*100,now) 
      //   //   audio.play(); 
      //   // }
        
      // }


      let buyPercent=window.localStorage.getItem('buyPercent')

      if(Math.abs((this.state[`nobitex_price_bid${j}`]-this.state[`binance_price${j}`])/this.state[`binance_price${j}`]*100)>buyPercent 
      && this.state[`binance_price${j}`] > this.state[`nobitex_price_bid${j}`] && buyPercent){

        console.log('buyyyyyyyyyyyyyyy')
        console.log("nobitex",(this.state.tether)*0.9875*this.state[`binance_price${j}`])
        console.log("maxxxx",this.state[`nobitex_price_bid${j}`],binance_coin_list[j])
        console.log("minnnn",this.state[`binance_price${j}`],binance_coin_list[j])
        // console.log("nobitex",  this.state.binance_price,this.state.nobitex_volume)
        var now = new Date();
        console.log("taghir",(this.state[`nobitex_price_bid${j}`]-this.state[`binance_price${j}`])/this.state[`binance_price${j}`]*100,now) 
        audio.play(); 

        let allowed_price = (this.state.tether)*0.9875*this.state[`binance_price${j}`]
        let quantity= window.localStorage.getItem('quantity')
        let amount=quantity/allowed_price

        let NobitexToken= window.localStorage.getItem('NobitexToken');

        let buy_data = {
          type: "buy",
          execution: "market",
          srcCurrency: coin_list[j],
          dstCurrency: "rls",
          amount: String(amount),
        }
    
        let config = {
          headers: { Authorization: `token ${NobitexToken}` }
        };
    
        await axios.post('https://corsproxyy.herokuapp.com/https://api.nobitex.ir/market/orders/add', buy_data,config)
        .then((response) => {
          console.log('buyyyyyyyy',response)
        })
        .catch((error) => {
          console.log('erroppppppp',error)
        })
      }
      
      let sellPercent=window.localStorage.getItem('sellPercent')

      if(Math.abs((this.state[`nobitex_price_ask${j}`]-this.state[`binance_price${j}`])/this.state[`binance_price${j}`]*100)>sellPercent && this.state[`binance_price${j}`] < this.state[`nobitex_price_ask${j}`]
        && sellPercent){
          
        console.log('sellllllllllll')
        console.log("maxxxx",this.state[`nobitex_price_ask${j}`],this.state[`binance_price${j}`])
        console.log("minnnn",this.state[`binance_price${j}`],binance_coin_list[j])
        console.log("nobitex",this.state[`binance_price${j}`])
        // console.log("nobitex",  this.state.binance_price,this.state.nobitex_volume)
        var now = new Date();
        console.log("taghir",(this.state[`nobitex_price_ask${j}`]-this.state[`binance_price${j}`])/this.state[`binance_price${j}`]*100,now) 
      
        let allowed_price = (this.state.tether)*1.0125*this.state[`binance_price${j}`]
        let quantity= window.localStorage.getItem('quantity')
        let amount=quantity/allowed_price

        let NobitexToken= window.localStorage.getItem('NobitexToken');

        let sell_data = {
          type: "sell",
          execution: "market",
          srcCurrency: coin_list[j],
          dstCurrency: "rls",
          amount: String(amount),
        }
    
        let config = {
          headers: { Authorization: `token ${NobitexToken}` }
        };
    
        await axios.post('https://corsproxyy.herokuapp.com/https://api.nobitex.ir/market/orders/add', sell_data,config)
        .then((response) => {
          console.log('selllllllll',response)
          audio.play(); 
        })
        .catch((error) => {
          console.log('erroppppppp',error)
        })

      }

      // if(this.state[`nobitex_price${0}`]*(this.state.tether)<91650){
      //   console.log(this.state[`nobitex_price${0}`]*(this.state.tether))
      //   console.log("maxxxx",this.state[`max${j}`],this.state[`name_max${j}`])
      //   console.log("minnnn",this.state[`min${j}`],this.state[`name_min${j}`])
      //   console.log("nobitex",(this.state.tether)*this.state[`binance_price${j}`])
      //   // console.log("nobitex",  this.state.binance_price,this.state.nobitex_volume)
      //   var now = new Date();
      //   console.log("taghir",(this.state[`max${j}`]-this.state[`min${j}`])/this.state[`min${j}`]*100,now) 
      //   audio.play(); 
      // }

    }
  }

  handleChange = (e) => {
    this.setState({ 'NobitexToken': e.target.value })
    { e.target.value === '' && this.setState({ 'NobitexToken': null})}
  }

  handleClickButton = () => {
    window.localStorage.setItem('NobitexToken',this.state.NobitexToken)
  }

  handleChange1 = (e) => {
    this.setState({ 'quantity': e.target.value })
    { e.target.value === '' && this.setState({ 'quantity': null})}
  }

  handleChange2 = (e) => {
    this.setState({ 'buyPercent': e.target.value })
    { e.target.value === '' && this.setState({ 'buyPercent': null})}
  }

  handleChange3 = (e) => {
    this.setState({ 'sellPercent': e.target.value })
    { e.target.value === '' && this.setState({ 'sellPercent': null})}
  }

  handleClickButton1 = () => {
    window.localStorage.setItem('quantity',this.state.quantity)
  }

  handleClickButton2 = () => {
    window.localStorage.setItem('buyPercent',this.state.buyPercent)
  }

  handleClickButton3 = () => {
    window.localStorage.setItem('sellPercent',this.state.sellPercent)
  }

  render(){
    return (
      <div className="Container">
        <div className="NobitexToken">
          <p>Nobitex Token</p>
          <input
            className="NobitexToken"
            placeholder="Nobitex Token"
            onChange={(e) => this.handleChange(e)}
          />
          <button
            onClick={(e) => this.handleClickButton(e)}
          >send</button>
        </div>

        <div>
          <p>مقدار خرید به ریال</p>
          <input
            placeholder="مقدار خرید به ریال"
            onChange={(e) => this.handleChange1(e)}
          />
          <button
            onClick={(e) => this.handleClickButton1(e)}
          >send</button>
        </div>

        <div>
          <p>درصد برای خرید</p>
          <input
            onChange={(e) => this.handleChange2(e)}
          />
          <button
            onClick={(e) => this.handleClickButton2(e)}
          >send</button>
        </div>

        <div>
          <p>درصد برای فروش</p>
          <input
            onChange={(e) => this.handleChange3(e)}
          />
          <button
            onClick={(e) => this.handleClickButton3(e)}
          >send</button>
        </div>

      </div>
    );
  }
}
export default List;
