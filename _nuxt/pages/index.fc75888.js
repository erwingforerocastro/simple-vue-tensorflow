(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{173:function(t,e,n){var content=n(184);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("5db11919",content,!0,{sourceMap:!1})},177:function(t,e,n){var content=n(222);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("900dcaf2",content,!0,{sourceMap:!1})},178:function(t,e,n){var content=n(224);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("6759f5ab",content,!0,{sourceMap:!1})},183:function(t,e,n){"use strict";var o=n(173);n.n(o).a},184:function(t,e,n){(e=n(59)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{transform:rotateX(0deg)}}@keyframes turn{to{transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""]),t.exports=e},187:function(t,e){},188:function(t,e){},199:function(t,e){},219:function(t,e){},220:function(t,e){},221:function(t,e,n){"use strict";var o=n(177);n.n(o).a},222:function(t,e,n){(e=n(59)(!1)).push([t.i,'.field,.field-label{height:30px;padding:0 15px;float:left;width:50%}.field{border-radius:0 5px 5px 0;border:1px solid #eee;margin-bottom:15px;height:40px}.col-sm-1:after{content:"";display:table;clear:both}.field-label,.section{text-align:left;font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-weight:100}.field-label{font-weight:700}.button-add-example{width:100%;margin-bottom:10px}.button-train{width:100%}.predict-controls{padding-top:30px;padding-bottom:30px}.predict-controls .element{width:50%;display:block}button{margin-top:10px;font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-weight:700}',""]),t.exports=e},223:function(t,e,n){"use strict";var o=n(178);n.n(o).a},224:function(t,e,n){(e=n(59)(!1)).push([t.i,".container{min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""]),t.exports=e},226:function(t,e,n){"use strict";n.r(e);n(183);var o=n(24),r=Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null).exports,l=n(225),d={name:"tensorflow-example",data:function(){return{trianed:!1,xValues:[1,2,3,4],yValues:[1,3,5,7],predictedValue:"Click en entrenar!",valueToPredict:""}},methods:{addItem:function(){this.xValues.push(0),this.yValues.push(0)},train:function(){var t=this,e=this.model=l.b();e.add(l.a.dense({units:1,inputShape:[1]})),e.compile({loss:"meanSquaredError",optimizer:"sgd"});var n=l.c(this.xValues,[this.xValues.length,1]),o=l.c(this.yValues,[this.yValues.length,1]);e.fit(n,o).then((function(){t.trianed=!0,t.predictedValue="Listo para realizar Predicciones!"}))},predict:function(){this.predictedValue=this.model.predict(l.c([this.valueToPredict],[1,1])).get(0,0)}}},c=(n(221),{components:{AppLogo:r,TensorFlowExample:Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"train-controls"},[n("h2",{staticClass:"section col-sm-1"},[t._v("Entrenar datos (x,y) pares")]),t._v(" "),n("div",{staticClass:"field-label"},[t._v("X")]),n("div",{staticClass:"field-label"},[t._v("Y")]),t._v(" "),t._l(t.xValues,(function(t,e){return n("div",{key:e})})),t._v(" "),n("div",{staticClass:"col-sm-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.xValues[t.index],expression:"xValues[index]"}],staticClass:"field field-x",attrs:{type:"number"},domProps:{value:t.xValues[t.index]},on:{input:function(e){e.target.composing||t.$set(t.xValues,t.index,e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.yValues[t.index],expression:"yValues[index]"}],staticClass:"field field-y",attrs:{type:"number"},domProps:{value:t.yValues[t.index]},on:{input:function(e){e.target.composing||t.$set(t.yValues,t.index,e.target.value)}}})])],2),t._v(" "),n("button",{staticClass:"button-add-example button--green",on:{click:t.addItem}},[t._v("+")]),t._v(" "),n("button",{staticClass:"button-train button--green",on:{click:t.train}},[t._v("Entrenar")]),t._v(" "),n("div",{staticClass:"predict-controls"},[n("h2",{staticClass:"section col-sm-1"},[t._v("Predecir")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.valueToPredict,expression:"valueToPredict"}],staticClass:"field-element",attrs:{type:"number",placeholder:"Ingrese un valor entero"},domProps:{value:t.valueToPredict},on:{input:function(e){e.target.composing||(t.valueToPredict=e.target.value)}}}),t._v(" "),n("div",{staticClass:"element"},[t._v(t._s(t.predictedValue))]),t._v(" "),n("button",{staticClass:"element button--green",attrs:{disabled:!t.trained},on:{click:t.predict}},[t._v("Predecir")])])])}),[],!1,null,null,null).exports}}),f=(n(223),Object(o.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("div",[e("app-logo"),this._v(" "),e("h1",{staticClass:"title"},[this._v("\n      vuetf\n    ")]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v("\n      Projecto simple de vue, con la instegración de tensorflow.js\n    ")]),this._v(" "),e("tensorflow-example"),this._v(" "),this._m(0)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"links"},[e("a",{staticClass:"button--green",attrs:{href:"https://nuxtjs.org/",target:"_blank"}},[this._v("Documentation")]),this._v(" "),e("a",{staticClass:"button--grey",attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank"}},[this._v("GitHub")])])}],!1,null,null,null));e.default=f.exports}}]);