(this.webpackJsonphello=this.webpackJsonphello||[]).push([[0],{26:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),o=n(16),r=n.n(o),i=(n(26),n.p,n(7),n(5)),s=n.n(i),l=n(3),u=n(17),p=n(18),b=n(19),h=n(21),d=n(20),x=n(4),g=n.n(x),k=n(0),f=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(p.a)(this,n),(a=e.call(this,t)).handleChange=function(t){a.setState({NobitexToken:t.target.value}),""===t.target.value&&a.setState({NobitexToken:null})},a.handleClickButton=function(){window.localStorage.setItem("NobitexToken",a.state.NobitexToken)},a.handleChange1=function(t){a.setState({quantity:t.target.value}),""===t.target.value&&a.setState({quantity:null})},a.handleChange2=function(t){a.setState({buyPercent:t.target.value}),""===t.target.value&&a.setState({buyPercent:null})},a.handleChange3=function(t){a.setState({sellPercent:t.target.value}),""===t.target.value&&a.setState({sellPercent:null})},a.handleClickButton1=function(){window.localStorage.setItem("quantity",a.state.quantity)},a.handleClickButton2=function(){window.localStorage.setItem("buyPercent",a.state.buyPercent)},a.handleClickButton3=function(){window.localStorage.setItem("sellPercent",a.state.sellPercent)},a.state={},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval((function(){t.handleMax()}),5e3),this.interval=setInterval((function(){t.refresh()}),18e5)}},{key:"refresh",value:function(){window.location.reload(!1)}},{key:"handleMax",value:function(){var t=Object(u.a)(s.a.mark((function t(){var e,n,a,c,o,r,i,u,p=this;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=new Audio("https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3"),g.a.get("https://corsproxyy.herokuapp.com/https://api.nobitex.ir/v2/orderbook/USDTIRT").then((function(t){p.setState({tether:Number.parseFloat(t.data.bids[0][0],10)})})).catch((function(t){console.log("erroppppppp")})),n=["btc","eth","ltc","bch","xlm","trx","doge","etc","bnb","eos","xrp","uni","link"],a=["BTCIRT","ETHIRT","LTCIRT","BCHIRT","XLMIRT","TRXIRT","DOGEIRT","ETCIRT","BNBIRT","EOSIRT","XRPIRT","UNIIRT","LINKIRT"],c=["BTCUSDT","ETHUSDT","LTCUSDT","BCHUSDT","XLMUSDT","TRXUSDT","DOGEUSDT","ETCUSDT","BNBUSDT","EOSUSDT","XRPUSDT","UNIUSDT","LINKUSDT"],["btc-irt","eth-irt","ltc-irt","bch-irt","xlm-irt","trx-irt","doge-irt"],o=s.a.mark((function t(o){var r,b,h,d,x,k,f,y,j,m,T,S,v,_;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=o-1,t.next=3,g.a.get("https://corsproxyy.herokuapp.com/https://api.nobitex.ir/v2/orderbook/"+a[o-1]).then((function(t){for(var e=0,n=0,a=window.localStorage.getItem("quantity"),c=0;c<16;c++){if(3*a<(e+=Number.parseFloat(t.data.bids[o][0],10)*Number.parseFloat(t.data.bids[o][1],10))){var r=Number.parseFloat(t.data.bids[o][0],10)/p.state.tether;p.setState(Object(l.a)({},"nobitex_price_bid".concat(i),r));break}if(15==c){var s=1.03*Number.parseFloat(t.data.bids[15][0],10)/p.state.tether;p.setState(Object(l.a)({},"nobitex_price_bid".concat(i),s))}}for(var u=0;u<16;u++){if(3*a<(n+=Number.parseFloat(t.data.asks[o][0],10)*Number.parseFloat(t.data.asks[o][1],10))){var b=Number.parseFloat(t.data.asks[o][0],10)/p.state.tether;p.setState(Object(l.a)({},"nobitex_price_ask".concat(i),b));break}if(15==u){var h=.97*Number.parseFloat(t.data.asks[15][0],10)/p.state.tether;p.setState(Object(l.a)({},"nobitex_price_ask".concat(i),h))}}})).catch((function(t){console.log("erroppppppp")}));case 3:return t.next=5,g.a.get("https://api.binance.com/api/v3/ticker/price?symbol="+c[i],{}).then((function(t){var e=Number.parseFloat(t.data.price,10);console.log("aaaaaaaa"),p.setState(Object(l.a)({},"binance_price".concat(i),e))})).catch((function(t){console.log(t)}));case 5:if(r=window.localStorage.getItem("buyPercent"),!(Math.abs((p.state["nobitex_price_bid".concat(i)]-p.state["binance_price".concat(i)])/p.state["binance_price".concat(i)]*100)>r&&p.state["binance_price".concat(i)]>p.state["nobitex_price_bid".concat(i)]&&r)){t.next=22;break}return console.log("buyyyyyyyyyyyyyyy"),console.log("nobitex",.9875*p.state.tether*p.state["binance_price".concat(i)]),console.log("maxxxx",p.state["nobitex_price_bid".concat(i)],c[i]),console.log("minnnn",p.state["binance_price".concat(i)],c[i]),u=new Date,console.log("taghir",(p.state["nobitex_price_bid".concat(i)]-p.state["binance_price".concat(i)])/p.state["binance_price".concat(i)]*100,u),e.play(),b=.9875*p.state.tether*p.state["binance_price".concat(i)],h=window.localStorage.getItem("quantity"),d=h/b,x=window.localStorage.getItem("NobitexToken"),k={type:"buy",execution:"market",srcCurrency:n[i],dstCurrency:"rls",amount:String(d)},f={headers:{Authorization:"token ".concat(x)}},t.next=22,g.a.post("https://corsproxyy.herokuapp.com/https://api.nobitex.ir/market/orders/add",k,f).then((function(t){console.log("buyyyyyyyy",t)})).catch((function(t){console.log("erroppppppp",t)}));case 22:if(y=window.localStorage.getItem("sellPercent"),!(Math.abs((p.state["nobitex_price_ask".concat(i)]-p.state["binance_price".concat(i)])/p.state["binance_price".concat(i)]*100)>y&&p.state["binance_price".concat(i)]<p.state["nobitex_price_ask".concat(i)]&&y)){t.next=38;break}return console.log("sellllllllllll"),console.log("maxxxx",p.state["nobitex_price_ask".concat(i)],p.state["binance_price".concat(i)]),console.log("minnnn",p.state["binance_price".concat(i)],c[i]),console.log("nobitex",p.state["binance_price".concat(i)]),u=new Date,console.log("taghir",(p.state["nobitex_price_ask".concat(i)]-p.state["binance_price".concat(i)])/p.state["binance_price".concat(i)]*100,u),j=1.0125*p.state.tether*p.state["binance_price".concat(i)],m=window.localStorage.getItem("quantity"),T=m/j,S=window.localStorage.getItem("NobitexToken"),v={type:"sell",execution:"market",srcCurrency:n[i],dstCurrency:"rls",amount:String(T)},_={headers:{Authorization:"token ".concat(S)}},t.next=38,g.a.post("https://corsproxyy.herokuapp.com/https://api.nobitex.ir/market/orders/add",v,_).then((function(t){console.log("selllllllll",t),e.play()})).catch((function(t){console.log("erroppppppp",t)}));case 38:case"end":return t.stop()}}),t)})),r=1;case 8:if(!(r<a.length+1)){t.next=13;break}return t.delegateYield(o(r),"t0",10);case 10:r++,t.next=8;break;case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(k.jsxs)("div",{className:"Container",children:[Object(k.jsxs)("div",{className:"NobitexToken",children:[Object(k.jsx)("p",{children:"Nobitex Token"}),Object(k.jsx)("input",{className:"NobitexToken",placeholder:"Nobitex Token",onChange:function(e){return t.handleChange(e)}}),Object(k.jsx)("button",{onClick:function(e){return t.handleClickButton(e)},children:"send"})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{children:"\u0645\u0642\u062f\u0627\u0631 \u062e\u0631\u06cc\u062f \u0628\u0647 \u0631\u06cc\u0627\u0644"}),Object(k.jsx)("input",{placeholder:"\u0645\u0642\u062f\u0627\u0631 \u062e\u0631\u06cc\u062f \u0628\u0647 \u0631\u06cc\u0627\u0644",onChange:function(e){return t.handleChange1(e)}}),Object(k.jsx)("button",{onClick:function(e){return t.handleClickButton1(e)},children:"send"})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{children:"\u062f\u0631\u0635\u062f \u0628\u0631\u0627\u06cc \u062e\u0631\u06cc\u062f"}),Object(k.jsx)("input",{onChange:function(e){return t.handleChange2(e)}}),Object(k.jsx)("button",{onClick:function(e){return t.handleClickButton2(e)},children:"send"})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{children:"\u062f\u0631\u0635\u062f \u0628\u0631\u0627\u06cc \u0641\u0631\u0648\u0634"}),Object(k.jsx)("input",{onChange:function(e){return t.handleChange3(e)}}),Object(k.jsx)("button",{onClick:function(e){return t.handleClickButton3(e)},children:"send"})]})]})}}]),n}(c.a.Component);var y=function(){return Object(k.jsx)(f,{})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),o(t),r(t)}))};r.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(y,{})}),document.getElementById("root")),j()},7:function(t,e,n){}},[[47,1,2]]]);
//# sourceMappingURL=main.c7b0d15a.chunk.js.map