import React from 'react';
import '../App.css';
import axios from 'axios'
import {sleep} from '../functions/commonfunctions'
import {SL} from '../functions/strategies'

class List extends React.Component {
  constructor(props){
    super(props)
    this.state={
    }
  }

  componentDidMount () {
    console.log('yyyy')
    this.start_bot = setInterval(() => {
      this.handleMax()
    }, 4000)

    var reload_browser = setInterval(() => {
      this.refresh()
    }, 1800000)

    }

  refresh(){
    window.location.reload();
  };

  async handleMax(){

    var audio = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');

    axios.get('https://corsproxyy.herokuapp.com/https://api.nobitex.ir/v2/orderbook/USDTIRT')
    .then((response) => {
      this.setState({ tether: Number.parseFloat(response.data.bids[0][0], 10) })
    })
    .catch((error) => {
      console.log('erroppppppp'+"tether request error",error)
    })

    let coin_list = [
      "btc",
      "eth",
      "ltc",
      "shib",
      "bch",
      "xlm",
      "trx",
      "doge",
      "etc",
      "bnb",
      "eos",
      "xrp",
      "uni",
      "link",
      "dot",
      "aave",
      "ada"      
    ]

    // [Namad, zarib nobitex/binance]

    let nobitex_coin_list = [
      ["BTCIRT",1],
      ["ETHIRT",1],
      ["LTCIRT",1],
      ["SHIBIRT",1000],
      ["BCHIRT",1],
      ["XLMIRT",1],
      ["TRXIRT",1],
      ["DOGEIRT",1],
      ["ETCIRT",1],
      ["BNBIRT",1],
      ["EOSIRT",1],
      ["XRPIRT",1],
      ["UNIIRT",1],
      ["LINKIRT",1],
      ["DOTIRT",1],
      ["AAVEIRT",1],
      ["ADAIRT",1]
    ]

    let binance_coin_list = [
      "BTCUSDT",
      "ETHUSDT",
      "LTCUSDT",
      "SHIBUSDT",
      "BCHUSDT",
      "XLMUSDT",
      "TRXUSDT",
      "DOGEUSDT",
      "ETCUSDT",
      "BNBUSDT",
      "EOSUSDT",
      "XRPUSDT",
      "UNIUSDT",
      "LINKUSDT",
      "DOTUSDT",
      "AAVEUSDT",
      "ADAUSDT"
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

      await axios.get('https://corsproxyy.herokuapp.com/https://api.nobitex.ir/v2/orderbook/' + nobitex_coin_list[i-1][0])
      .then((response) => {
        // var price= Number.parseFloat(response.data.bids[0][0], 10)/this.state.tether
        let price_sum_bid=0;
        let price_sum_ask=0;
        let quantity= window.localStorage.getItem('quantity');
        for (let k = 0; k < 16; k++) {
          // if (i === 3) { break; }
          price_sum_bid += Number.parseFloat(response.data.bids[k][0], 10)*Number.parseFloat(response.data.bids[k][1], 10)
          
          if (quantity*3 < price_sum_bid){
            let price_bid = Number.parseFloat(response.data.bids[k][0], 10)/this.state.tether
            this.setState({ [`nobitex_price_bid${j}`]: price_bid/nobitex_coin_list[j][1] })
            break;
          }else{
            if (k==15){
              let price_bid = Number.parseFloat(response.data.bids[15][0], 10)*1.03/this.state.tether
              this.setState({ [`nobitex_price_bid${j}`]: price_bid/nobitex_coin_list[j][1] })
            }
          }
        }

        for (let k = 0; k < 16; k++) {

          price_sum_ask += Number.parseFloat(response.data.asks[k][0], 10)*Number.parseFloat(response.data.asks[k][1], 10)
          
          if (quantity*3 < price_sum_ask){
            let price_ask = Number.parseFloat(response.data.asks[k][0], 10)/this.state.tether
            this.setState({ [`nobitex_price_ask${j}`]: price_ask/nobitex_coin_list[j][1] })
            break;
          }else{
            if (k==15){
              let price_ask = Number.parseFloat(response.data.asks[15][0], 10)*0.97/this.state.tether
              this.setState({ [`nobitex_price_ask${j}`]: price_ask/nobitex_coin_list[j][1] })
            }
          }
        }

        // this.setState({nobitex_volume2: response.data.trades[0].volume})
        // this.setState({ [`nobitex_price${j}`]: price })
      })
      .catch((error) => {
        console.log('erroppppppp'+"error occures while getting price of" + nobitex_coin_list[i-1][0],
        error) 
      })
      
      //binance API

      await axios.get("https://api.binance.com/api/v3/ticker/price?symbol="+binance_coin_list[j], {
      })
      .then(response => {
        var price= Number.parseFloat(response.data.price, 10)
        console.log("aaaaaaaa")
        this.setState({ [`binance_price${j}`]: price })
      })
      .catch(error => {
        console.error(error);
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
      //   //   console.log("taghir",(th is.state[`maxx${j}`]-this.state[`minn${j}`])/this.state[`minn${j}`]*100,now) 
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
        let amount=String(quantity/(allowed_price*nobitex_coin_list[j][1]))

        let NobitexToken= window.localStorage.getItem('NobitexToken');

        let buy_data = {
          type: "buy",
          execution: "market",
          srcCurrency: coin_list[j],
          dstCurrency: "rls",
          amount: amount,
        }
    
        let config = {
          headers: { Authorization: `token ${NobitexToken}` }
        };
    
        await axios.post('https://corsproxyy.herokuapp.com/https://api.nobitex.ir/market/orders/add', buy_data,config)
        .then((response) => {
          console.log('buyyyyyyyy',response)
          window.localStorage.setItem(coin_list[j],this.state[`nobitex_price_bid${j}`])
        })
        .catch((error) => {
          console.log('erroppppppp',error)
        })
      }

      if (window.localStorage.getItem(coin_list[j])){
        console.log('had zarar')
        let NobitexToken= window.localStorage.getItem('NobitexToken');
        let allowed_price = (this.state.tether)*window.localStorage.getItem(coin_list[j])
        let quantity= window.localStorage.getItem('quantity')
        let amount=quantity/(allowed_price*nobitex_coin_list[j][1])
        let live_price=this.state[`nobitex_price_ask${j}`]
        await SL(coin_list[j],amount,NobitexToken,live_price)
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
        let amount=(quantity/allowed_price*nobitex_coin_list[j][1])

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
      var sleep_time= 4000/(1.3*nobitex_coin_list.length)
      await sleep(sleep_time)
      
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value })
    { e.target.value === '' && this.setState({ [e.target.name]: null})}
  }

  handleClickButton = (e) => {
    let name= e.target.name
    window.localStorage.setItem([e.target.name],this.state[name])
  }

  handleTest = () => {
    clearInterval(this.start_bot);
    this.handleMax()
  }

  render(){
    return (
      <div className="Container">
        <div className="NobitexToken">
          <p>Nobitex Token</p>
          <input
            className="NobitexToken"
            placeholder="Nobitex Token"
            name="NobitexToken"
            onChange={(e) => this.handleChange(e)}
          />
          <button
            name="NobitexToken"
            onClick={(e) => this.handleClickButton(e)}
          >send</button>
        </div>

        <div>
          <p>مقدار خرید به ریال</p>
          <input
            name="quantity"
            placeholder="مقدار خرید به ریال"
            onChange={(e) => this.handleChange(e)}
          />
          <button
            name="quantity"
            onClick={(e) => this.handleClickButton(e)}
          >send</button>
        </div>

        <div>
          <p>درصد برای خرید</p>
          <input
            name="buyPercent"
            onChange={(e) => this.handleChange(e)}
          />
          <button
            name="buyPercent"
            onClick={(e) => this.handleClickButton(e)}
          >send</button>
        </div>

        <div>
          <p>درصد برای فروش</p>
          <input
            name="sellPercent"
            onChange={(e) => this.handleChange(e)}
          />
          <button
            name="sellPercent"
            onClick={(e) => this.handleClickButton(e)}
          >send</button>
        </div>

        <div>
          <p>حد ضرر به درصد</p>
          <input
            name="SLPercent"
            onChange={(e) => this.handleChange(e)}
          />
          <button
            name="SLPercent"
            onClick={(e) => this.handleClickButton(e)}
          >send</button>
        </div>

        <button
            onClick={() => this.handleTest()}
          >Test</button>
      </div>
    );
  }
}
export default List;
