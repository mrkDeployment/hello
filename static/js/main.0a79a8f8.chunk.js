(this.webpackJsonphello=this.webpackJsonphello||[]).push([[0],{26:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),o=n(17),c=n.n(o),s=(n(26),n.p,n(8),n(2)),i=n.n(s),l=n(5),u=n(4),p=n(18),b=n(19),h=n(21),d=n(20),x=n(3),g=n.n(x),m=function(e){return new Promise((function(t){return setTimeout(t,e)}))},f=function(){var e=Object(l.a)(i.a.mark((function e(t,n,a,r){var o,c,s,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=.01*window.localStorage.getItem("SLPercent"),c=window.localStorage.getItem(t),!(r<c*(1-o))){e.next=8;break}if(s={type:"sell",execution:"market",srcCurrency:t,dstCurrency:"rls",amount:String(n)},l={headers:{Authorization:"token ".concat(a)}},!(n>0)){e.next=8;break}return e.next=8,g.a.post("https://corsproxyy.herokuapp.com/https://api.nobitex.ir/market/orders/add",s,l).then((function(e){console.log("Stophhhhhhhhhhhhhhhhhhh Loss",e)})).catch((function(e){console.error("erotttttttttttttttttt",e)}));case 8:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),k=n(0),j=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(u.a)({},e.target.name,e.target.value)),""===e.target.value&&a.setState(Object(u.a)({},e.target.name,null))},a.handleClickButton=function(e){var t=e.target.name;window.localStorage.setItem([e.target.name],a.state[t])},a.handleTest=function(){clearInterval(a.start_bot),a.handleMax()},a.state={buy_sum:0,sell_sum:0,SL_sum:0},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,c,s,l=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.localStorage.getItem("NobitexToken"),n={},a={headers:{Authorization:"token ".concat(t)}},r={currencies:"rls,btc,ltc,shib,eth,bch,xlm,trx,doge,etc,bnb,eos,xrp,uni,link,dot,aave,ada"},e.next=6,g.a.post("https://corsproxyy.herokuapp.com/https://api.nobitex.ir/users/wallets/list",r,a).then((function(e){e.data.wallets.forEach((function(e){if(e.rialBalance>1e5){var t=e.currency,a=e.balance;n[t]=a}}))})).catch((function(e){console.error("erroppppppp",e)}));case 6:for(o in n)c="balance_"+o,s=Number.parseFloat(n[o],10),this.setState(Object(u.a)({},c,s));this.start_bot=setInterval((function(){l.handleMax()}),2e3),setInterval((function(){l.refresh()}),18e5);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){window.location.reload(!0)}},{key:"handleMax",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,c,s,l,p,b=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new Audio("https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3"),g.a.get("https://corsproxyy.herokuapp.com/https://api.nobitex.ir/v2/orderbook/USDTIRT").then((function(e){b.setState({tether:Number.parseFloat(e.data.bids[0][0],10)})})).catch((function(e){console.log("erroppppppptether request error",e)})),n=["btc","eth","ltc","shib","bch","xlm","trx","doge","etc","bnb","eos","xrp","uni","link","dot","aave","ada"],a=[["BTCIRT",1],["ETHIRT",1],["LTCIRT",1],["SHIBIRT",1e3],["BCHIRT",1],["XLMIRT",1],["TRXIRT",1],["DOGEIRT",1],["ETCIRT",1],["BNBIRT",1],["EOSIRT",1],["XRPIRT",1],["UNIIRT",1],["LINKIRT",1],["DOTIRT",1],["AAVEIRT",1],["ADAIRT",1]],r=["BTCUSDT","ETHUSDT","LTCUSDT","SHIBUSDT","BCHUSDT","XLMUSDT","TRXUSDT","DOGEUSDT","ETCUSDT","BNBUSDT","EOSUSDT","XRPUSDT","UNIUSDT","LINKUSDT","DOTUSDT","AAVEUSDT","ADAUSDT"],o=i.a.mark((function e(o){var c,h,d,x,k,j,S,y,T,_,w,v,O,I,C,N,D,R,U,B;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=o-1,e.next=3,g.a.get("https://corsproxyy.herokuapp.com/https://api.nobitex.ir/v2/orderbook/"+a[o-1][0]).then((function(e){for(var t=0,n=0,r=window.localStorage.getItem("percentage"),o=.01*b.state.balance_rls*r,c=0;c<16;c++){if(3*o<(t+=Number.parseFloat(e.data.bids[c][0],10)*Number.parseFloat(e.data.bids[c][1],10))){var i=Number.parseFloat(e.data.bids[c][0],10)/b.state.tether;b.setState(Object(u.a)({},"nobitex_price_bid".concat(s),i/a[s][1]));break}if(15==c){var l=1.03*Number.parseFloat(e.data.bids[15][0],10)/b.state.tether;b.setState(Object(u.a)({},"nobitex_price_bid".concat(s),l/a[s][1]))}}for(var p=0;p<16;p++){if(3*o<(n+=Number.parseFloat(e.data.asks[p][0],10)*Number.parseFloat(e.data.asks[p][1],10))){var h=Number.parseFloat(e.data.asks[p][0],10)/b.state.tether;b.setState(Object(u.a)({},"nobitex_price_ask".concat(s),h/a[s][1]));break}if(15==p){var d=.97*Number.parseFloat(e.data.asks[15][0],10)/b.state.tether;b.setState(Object(u.a)({},"nobitex_price_ask".concat(s),d/a[s][1]))}}})).catch((function(e){console.error("erroppppppperror occures while getting price of"+a[o-1][0],e)}));case 3:return e.next=5,g.a.get("https://api.binance.com/api/v3/ticker/price?symbol="+r[s],{}).then((function(e){var t=Number.parseFloat(e.data.price,10);console.log("aaaaaaaa"),b.setState(Object(u.a)({},"binance_price".concat(s),t))})).catch((function(e){console.error(e)}));case 5:if(c=window.localStorage.getItem("buyPercent"),!(b.state.buy_sum<20)){e.next=23;break}if(!((b.state["binance_price".concat(s)]-b.state["nobitex_price_bid".concat(s)])/b.state["binance_price".concat(s)]*100>c&&c)){e.next=23;break}return console.log("buyyyyyyyyyyyyyyy"),console.log("maxxxx",b.state["nobitex_price_bid".concat(s)],r[s]),console.log("minnnn",b.state["binance_price".concat(s)],r[s]),l=new Date,console.log("taghir",(b.state["nobitex_price_bid".concat(s)]-b.state["binance_price".concat(s)])/b.state["binance_price".concat(s)]*100,l),t.play(),h=.9875*b.state.tether*b.state["binance_price".concat(s)],d=window.localStorage.getItem("percentage"),x=.01*b.state.balance_rls*d,k=String(x/(h*a[s][1])),j=window.localStorage.getItem("NobitexToken"),S={type:"buy",execution:"market",srcCurrency:n[s],dstCurrency:"rls",amount:k},y={headers:{Authorization:"token ".concat(j)}},e.next=23,g.a.post("https://corsproxyy.herokuapp.com/https://api.nobitex.ir/market/orders/add",S,y).then((function(e){console.log("buyyyyyyyy",e),b.setState({buy_sum:b.state.buy_sum+1}),window.localStorage.setItem(n[s],b.state["nobitex_price_bid".concat(s)]);var t="balance_"+n[s];void 0==b.state[t]?b.setState(Object(u.a)({},t,Number.parseFloat(k,10))):b.setState(Object(u.a)({},t,b.state[t]+Number.parseFloat(k,10))),console.log("state",b.state[t])})).catch((function(e){console.log("erroppppppp",e)}));case 23:if(!(b.state.SL_sum<20)){e.next=33;break}if(!window.localStorage.getItem(n[s])){e.next=33;break}return T=window.localStorage.getItem("NobitexToken"),_=window.localStorage.getItem("percentage"),w="balance_"+n[s],v=0,null!=b.state[w]&&(v=.01*b.state[w]*_),O=b.state["nobitex_price_ask".concat(s)],e.next=33,f(n[s],v,T,O).then((function(){b.setState({SL_sum:b.state.SL_sum+1})})).catch((function(e){console.error("errossssssss",e)}));case 33:if(I=window.localStorage.getItem("sellPercent"),!(b.state.sell_sum<20)){e.next=53;break}if(!window.localStorage.getItem(n[s])){e.next=53;break}if(!((b.state["nobitex_price_ask".concat(s)]-b.state["binance_price".concat(s)])/b.state["binance_price".concat(s)]*100>I&&I)){e.next=53;break}if(console.log("sellllllllllll"),console.log("maxxxx",b.state["nobitex_price_ask".concat(s)],b.state["binance_price".concat(s)]),console.log("minnnn",b.state["binance_price".concat(s)],r[s]),console.log("nobitex",b.state["binance_price".concat(s)]),l=new Date,console.log("taghir",(b.state["nobitex_price_ask".concat(s)]-b.state["binance_price".concat(s)])/b.state["binance_price".concat(s)]*100,l),C=window.localStorage.getItem("percentage"),N="balance_"+n[s],D=0,null!=b.state[N]&&(D=.01*b.state[N]*C),R=window.localStorage.getItem("NobitexToken"),U={type:"sell",execution:"market",srcCurrency:n[s],dstCurrency:"rls",amount:String(D)},B={headers:{Authorization:"token ".concat(R)}},!(D>0)){e.next=53;break}return e.next=53,g.a.post("https://corsproxyy.herokuapp.com/https://api.nobitex.ir/market/orders/add",U,B).then((function(e){console.log("selllllllll",e),b.setState({sell_sum:b.state.sell_sum+1}),t.play()})).catch((function(e){console.log("erroppppppp",e)}));case 53:return p=4e3/(1.3*a.length),e.next=56,m(p);case 56:case"end":return e.stop()}}),e)})),c=1;case 7:if(!(c<a.length+1)){e.next=12;break}return e.delegateYield(o(c),"t0",9);case 9:c++,e.next=7;break;case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(k.jsxs)("div",{className:"Container",children:[Object(k.jsxs)("div",{className:"NobitexToken",children:[Object(k.jsx)("p",{children:"Nobitex Token"}),Object(k.jsx)("input",{className:"NobitexToken",placeholder:"Nobitex Token",name:"NobitexToken",onChange:function(t){return e.handleChange(t)}}),Object(k.jsx)("button",{name:"NobitexToken",onClick:function(t){return e.handleClickButton(t)},children:"send"})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{children:"\u062f\u0631\u0635\u062f \u062f\u0627\u0631\u0627\u06cc\u06cc"}),Object(k.jsx)("input",{name:"percentage",placeholder:"\u062f\u0631\u0635\u062f \u062f\u0627\u0631\u0627\u06cc\u06cc",onChange:function(t){return e.handleChange(t)}}),Object(k.jsx)("button",{name:"percentage",onClick:function(t){return e.handleClickButton(t)},children:"send"})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{children:"\u062f\u0631\u0635\u062f \u0628\u0631\u0627\u06cc \u062e\u0631\u06cc\u062f"}),Object(k.jsx)("input",{name:"buyPercent",onChange:function(t){return e.handleChange(t)}}),Object(k.jsx)("button",{name:"buyPercent",onClick:function(t){return e.handleClickButton(t)},children:"send"})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{children:"\u062f\u0631\u0635\u062f \u0628\u0631\u0627\u06cc \u0641\u0631\u0648\u0634"}),Object(k.jsx)("input",{name:"sellPercent",onChange:function(t){return e.handleChange(t)}}),Object(k.jsx)("button",{name:"sellPercent",onClick:function(t){return e.handleClickButton(t)},children:"send"})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{children:"\u062d\u062f \u0636\u0631\u0631 \u0628\u0647 \u062f\u0631\u0635\u062f"}),Object(k.jsx)("input",{name:"SLPercent",onChange:function(t){return e.handleChange(t)}}),Object(k.jsx)("button",{name:"SLPercent",onClick:function(t){return e.handleClickButton(t)},children:"send"})]}),Object(k.jsx)("button",{onClick:function(){return e.handleTest()},children:"Test"})]})}}]),n}(r.a.Component);var S=function(){return Object(k.jsx)(j,{})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};c.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(S,{})}),document.getElementById("root")),y()},8:function(e,t,n){}},[[47,1,2]]]);
//# sourceMappingURL=main.0a79a8f8.chunk.js.map