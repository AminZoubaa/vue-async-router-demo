(function(n){function e(e){for(var r,i,c=e[0],s=e[1],u=e[2],p=0,f=[];p<c.length;p++)i=c[p],o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],r=!0,c=1;c<t.length;c++){var s=t[c];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),n=i(i.s=t[0]))}return n}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;a.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"034f":function(n,e,t){"use strict";var r=t("64a9"),o=t.n(r);o.a},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("097d");var r=t("2b0e"),o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/object"}},[n._v("static object data")]),n._v(" |\n    "),t("router-link",{attrs:{to:"/category/435678"}},[n._v("function")]),n._v(" |\n    "),t("router-link",{attrs:{to:"/home/username/post/4567876"}},[n._v("params from url")]),n._v(" |\n    "),t("router-link",{attrs:{to:"/userlist"}},[n._v("async from api")]),n._v(" |\n    "),t("router-link",{attrs:{to:"/userlist-cache"}},[n._v("async onetime cache")])],1),t("router-view"),n.$routerLoading?t("div",{attrs:{id:"loading-overlay"}},[n._v("Loading...")]):n._e()],1)},a=[],i={name:"app"},c=i,s=(t("034f"),t("2877")),u=Object(s["a"])(c,o,a,!1,null,null,null);u.options.__file="App.vue";var l=u.exports,p=(t("96cf"),t("3b8d")),f=t("11c1"),m=t.n(f),d=t("795b"),h=t.n(d),v=t("a4bb"),_=t.n(v),b=(t("ac6a"),t("a745")),y=t.n(b),g=t("8c4f"),j=new r["a"]({data:{asyncCount:0},computed:{loading:function(){return this.asyncCount>0}},methods:{addCount:function(){this.asyncCount+=1},removeCount:function(){this.asyncCount-1<0?this.asyncCount=0:this.asyncCount-=1}}});Object.defineProperty(r["a"].prototype,"$asyncStatus",{get:function(){return j}}),Object.defineProperty(r["a"].prototype,"$routerLoading",{get:function(){return j.loading}}),g["a"].prototype.originalBeforeAsyncInit=g["a"].prototype.init,g["a"].prototype.init=function(n){var e=this;void 0!==e.beforeHooks&&y()(e.beforeHooks)&&e.beforeHooks.push(function(n,e,t){n.matched.forEach(function(e){var r=_()(e.props);0===r.length?t():r.forEach(function(r){var o=e.props[r];if("function"===typeof o||void 0!==e.originCallback){e.originCallback||(e.originCallback=o);var a=e.originCallback(n);h.a.resolve(a)===a?(j.addCount(),a.then(function(n){e.props[r]=n,j.removeCount(),t()}).catch(function(n){console.error(n),j.removeCount(),t(!1)})):(e.props[r]=a,t())}else t()})})});for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];this.originalBeforeAsyncInit.apply(this,[n].concat(r))};var C=g["a"],w="https://jsonplaceholder.typicode.com/users",k="https://jsonplaceholder.typicode.com/comments?_limit=10",O={cache:"no-cache"},x={cachedUserlist:fetch(w,O).then(function(n){return n.json()}).then(function(n){return n}),cachedCommentlist:fetch("".concat(k,0),O).then(function(n){return n.json()}).then(function(n){return n}),get userlist(){return fetch(w,O).then(function(n){return n.json()}).then(function(n){return n})},get commentlist(){return fetch(k,O).then(function(n){return n.json()}).then(function(n){return n})}},$=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"object"},[n._v(n._s(n.$props))])},H=[],P={name:"object",props:{a:null,b:null,c:null,d:null}},E=P,I=Object(s["a"])(E,$,H,!1,null,null,null);I.options.__file="Object.vue";var S=I.exports,A=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"async"},[t("h2",[n._v(n._s(n.userHeadline))]),t("ul",n._l(n.userlist,function(e){return t("li",{key:e.id},[n._v("\n      name: "+n._s(e.name)+" -> e-mail: "+n._s(e.email)+"\n    ")])}),0),t("hr"),t("h2",[n._v(n._s(n.commentHeadline))]),t("ul",n._l(n.commentlist,function(e){return t("li",{key:e.id},[n._v("\n      name: "+n._s(e.name)+" -> e-mail: "+n._s(e.email)+"\n    ")])}),0)])},M=[],R={name:"async",props:{userHeadline:null,userlist:{},commentHeadline:null,commentlist:{}}},U=R,L=(t("fb3b"),Object(s["a"])(U,A,M,!1,null,"66351399",null));L.options.__file="Async.vue";var T=L.exports,B=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"function"},[n._v("\n  "+n._s(n.$props)+"\n")])},J=[],F={name:"function",props:{id:null,view:null,randomId:null}},q=F,z=Object(s["a"])(q,B,J,!1,null,null,null);z.options.__file="Function.vue";var D=z.exports,G=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"home"},[n._v("\n  "+n._s(n.$props)+"\n")])},K=[],N={name:"home",props:{username:null,postId:null}},Q=N,V=Object(s["a"])(Q,G,K,!1,null,null,null);V.options.__file="Params.vue";var W=V.exports,X=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"home"},[n._v("\n  Click one link in the navigation to check the result\n")])},Y=[],Z={name:"home"},nn=Z,en=Object(s["a"])(nn,X,Y,!1,null,null,null);en.options.__file="Home.vue";var tn=en.exports;r["a"].use(C);var rn=new C({routes:[{path:"/",name:"home",component:tn},{path:"/object",name:"object",component:S,props:{a:1,b:2,c:3,d:4}},{path:"/category/:id",name:"function",component:D,props:function(n){return{id:n.params.id,view:"category",randomId:m.a.v4()}}},{path:"/home/:username/post/:postId",name:"params",component:W,props:!0},{path:"/userlist",name:"async",component:T,props:function(){var n=Object(p["a"])(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,x.userlist;case 2:return n.t0=n.sent,n.next=5,x.commentlist;case 5:return n.t1=n.sent,n.abrupt("return",{userHeadline:"Userlist",commentHeadline:"Comments",userlist:n.t0,commentlist:n.t1});case 7:case"end":return n.stop()}},n,this)}));function e(){return n.apply(this,arguments)}return e}()},{path:"/userlist-cache",name:"async-cached",component:T,props:function(){var n=Object(p["a"])(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,x.cachedUserlist;case 2:return n.t0=n.sent,n.next=5,x.cachedCommentlist;case 5:return n.t1=n.sent,n.abrupt("return",{userHeadline:"Userlist",commentHeadline:"Comments",userlist:n.t0,commentlist:n.t1});case 7:case"end":return n.stop()}},n,this)}));function e(){return n.apply(this,arguments)}return e}()}]});r["a"].config.productionTip=!1,window.gg=new r["a"]({router:rn,render:function(n){return n(l)}}).$mount("#app")},"64a9":function(n,e,t){},"8cf7":function(n,e,t){},fb3b:function(n,e,t){"use strict";var r=t("8cf7"),o=t.n(r);o.a}});
//# sourceMappingURL=app.65567a00.js.map