(function(n){function t(t){for(var r,i,u=t[0],s=t[1],c=t[2],p=0,f=[];p<u.length;p++)i=u[p],o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),e()}function e(){for(var n,t=0;t<a.length;t++){for(var e=a[t],r=!0,u=1;u<e.length;u++){var s=e[u];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),n=i(i.s=e[0]))}return n}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=r,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)i.d(e,r,function(t){return n[t]}.bind(null,r));return e},i.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;a.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},"034f":function(n,t,e){"use strict";var r=e("64a9"),o=e.n(r);o.a},"56d7":function(n,t,e){"use strict";e.r(t);e("cadf"),e("551c"),e("097d");var r=e("2b0e"),o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/object"}},[n._v("static object data")]),n._v(" |\n    "),e("router-link",{attrs:{to:"/category/435678"}},[n._v("function")]),n._v(" |\n    "),e("router-link",{attrs:{to:"/home/username/post/4567876"}},[n._v("params from url")]),n._v(" |\n    "),e("router-link",{attrs:{to:"/userlist"}},[n._v("async from api")])],1),e("router-view"),n.$routerLoading?e("div",{attrs:{id:"loading-overlay"}},[n._v("Loading...")]):n._e()],1)},a=[],i={name:"app"},u=i,s=(e("034f"),e("2877")),c=Object(s["a"])(u,o,a,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,p=(e("96cf"),e("3b8d")),f=e("11c1"),d=e.n(f),m=e("795b"),v=e.n(m),h=e("a4bb"),_=e.n(h),y=(e("ac6a"),e("a745")),b=e.n(y),g=e("8c4f"),j=new r["a"]({data:{asyncCount:0},computed:{loading:function(){return this.asyncCount>0}},methods:{addCount:function(){this.asyncCount+=1},removeCount:function(){this.asyncCount-1<0?this.asyncCount=0:this.asyncCount-=1}}});Object.defineProperty(r["a"].prototype,"$asyncStatus",{get:function(){return j}}),Object.defineProperty(r["a"].prototype,"$routerLoading",{get:function(){return j.loading}}),g["a"].prototype.originalBeforeAsyncInit=g["a"].prototype.init,g["a"].prototype.init=function(n){var t=this;void 0!==t.beforeHooks&&b()(t.beforeHooks)&&t.beforeHooks.push(function(n,t,e){n.matched.forEach(function(t){var r=_()(t.props);0===r.length?e():r.forEach(function(r){var o=t.props[r];if("function"===typeof o){t.cache_props||(t.cache_props=o);var a=t.cache_props(n);v.a.resolve(a)===a?(j.addCount(),a.then(function(n){t.props[r]=function(){return n},j.removeCount(),e()}).catch(function(n){console.error(n),j.removeCount(),e(!1)})):(t.props[r]=a,e())}else e()})})});for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];this.originalBeforeAsyncInit.apply(this,[n].concat(r))};var w=g["a"],O=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"object"},[n._v(n._s(n.$props))])},C=[],x={name:"object",props:{a:null,b:null,c:null,d:null}},k=x,$=Object(s["a"])(k,O,C,!1,null,null,null);$.options.__file="Object.vue";var H=$.exports,P=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"async"},[e("h2",[n._v(n._s(n.userHeadline))]),e("ul",n._l(n.userlist,function(t){return e("li",{key:t.id},[n._v("\n      name: "+n._s(t.name)+" -> e-mail: "+n._s(t.email)+"\n    ")])}),0),e("hr"),e("h2",[n._v(n._s(n.commentHeadline))]),e("ul",n._l(n.commentlist,function(t){return e("li",{key:t.id},[n._v("\n      name: "+n._s(t.name)+" -> e-mail: "+n._s(t.email)+"\n    ")])}),0)])},E=[],I={name:"async",props:{userHeadline:null,userlist:{},commentHeadline:null,commentlist:{}}},S=I,A=(e("fb3b"),Object(s["a"])(S,P,E,!1,null,"66351399",null));A.options.__file="Async.vue";var M=A.exports,L=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"function"},[n._v("\n  "+n._s(n.$props)+"\n")])},T=[],B={name:"function",props:{id:null,view:null,randomId:null}},J=B,R=Object(s["a"])(J,L,T,!1,null,null,null);R.options.__file="Function.vue";var F=R.exports,U=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"home"},[n._v("\n  "+n._s(n.$props)+"\n")])},q=[],z={name:"home",props:{username:"",postId:null}},D=z,G=Object(s["a"])(D,U,q,!1,null,null,null);G.options.__file="Params.vue";var K=G.exports;r["a"].use(w);var N=new w({routes:[{path:"/object",name:"object",component:H,props:{a:1,b:2,c:3,d:4}},{path:"/category/:id",name:"function",component:F,props:function(n){return{id:n.params.id,view:"category",randomId:d.a.v4()}}},{path:"/home/:username/post/:postId",name:"params",component:K,props:!0},{path:"/userlist",name:"async",component:M,props:function(){var n=Object(p["a"])(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://jsonplaceholder.typicode.com/users").then(function(n){return n.json()}).then(function(n){return n});case 2:return n.t0=n.sent,n.next=5,fetch("https://jsonplaceholder.typicode.com/comments?_limit=10").then(function(n){return n.json()}).then(function(n){return n});case 5:return n.t1=n.sent,n.abrupt("return",{userHeadline:"Userlist",commentHeadline:"Comments",userlist:n.t0,commentlist:n.t1});case 7:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}()}]});r["a"].config.productionTip=!1,window.gg=new r["a"]({router:N,render:function(n){return n(l)}}).$mount("#app")},"64a9":function(n,t,e){},"8cf7":function(n,t,e){},fb3b:function(n,t,e){"use strict";var r=e("8cf7"),o=e.n(r);o.a}});
//# sourceMappingURL=app.4f5fc681.js.map