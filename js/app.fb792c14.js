(function(){var e={9163:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=9163,e.exports=n},1546:function(e,n,o){"use strict";var r=o(6369),t=function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"app"}},[n("el-button",{on:{click:e.requestForToken}},[e._v("Enable Notification")])],1)},i=[],s=o(4275),u=o(9169);const a={apiKey:"AIzaSyB-xqr23XUxi-p9bqYgjtRWBPTsXdV6s-g",authDomain:"pwa-push-message.firebaseapp.com",projectId:"pwa-push-message",storageBucket:"pwa-push-message.appspot.com",messagingSenderId:"409350048234",appId:"1:409350048234:web:ea3c3f3ab11b8915a20a93",measurementId:"G-HJ9KHB28X6"};(0,s.ZF)(a);const c=(0,u.KL)(),l=()=>(0,u.LP)(c,{vapidKey:"BHpYdTv2Zwfh47humXCwJGTwCEJSc9z6fu_oyQgFIj6BqF6BaH__K8YAIQsrrVV1ay1cM_Dxh1_7hMZzfmxaKZY"}).then((e=>{e?console.log("current token for client: ",e):console.log("No registration token available. Request permission to generate one.")})).catch((e=>{console.log("An error occurred while retrieving token. ",e)}));var f={name:"App",methods:{requestForToken:l}},p=f,d=o(1001),g=(0,d.Z)(p,t,i,!1,null,null,null),h=g.exports,v=o(8499),b=o.n(v),m=o(5431);console.log("/push-msg/"),(0,m.z)("/push-msg/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),r["default"].config.productionTip=!1,r["default"].use(b()),new r["default"]({render:e=>e(h)}).$mount("#app")}},n={};function o(r){var t=n[r];if(void 0!==t)return t.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(n,r,t,i){if(!r){var s=1/0;for(l=0;l<e.length;l++){r=e[l][0],t=e[l][1],i=e[l][2];for(var u=!0,a=0;a<r.length;a++)(!1&i||s>=i)&&Object.keys(o.O).every((function(e){return o.O[e](r[a])}))?r.splice(a--,1):(u=!1,i<s&&(s=i));if(u){e.splice(l--,1);var c=t();void 0!==c&&(n=c)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,t,i]}}(),function(){o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,{a:n}),n}}(),function(){o.d=function(e,n){for(var r in n)o.o(n,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(n){return 0===e[n]};var n=function(n,r){var t,i,s=r[0],u=r[1],a=r[2],c=0;if(s.some((function(n){return 0!==e[n]}))){for(t in u)o.o(u,t)&&(o.m[t]=u[t]);if(a)var l=a(o)}for(n&&n(r);c<s.length;c++)i=s[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(l)},r=self["webpackChunkpush_msg"]=self["webpackChunkpush_msg"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(1546)}));r=o.O(r)})();
//# sourceMappingURL=app.fb792c14.js.map