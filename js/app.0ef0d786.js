(function(t){function e(e){for(var r,a,c=e[0],u=e[1],l=e[2],s=0,d=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2d0ab6a6":"25c794fc","chunk-2d0ba1a4":"52ad78ba","chunk-2d0e4c60":"ea82a92e","chunk-2d21b2be":"31524392","chunk-7ce44536":"6eb2a3f2"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-7ce44536":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0ab6a6":"31d6cfe0","chunk-2d0ba1a4":"31d6cfe0","chunk-2d0e4c60":"31d6cfe0","chunk-2d21b2be":"31d6cfe0","chunk-7ce44536":"1a66fc53"}[t]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],s=l.getAttribute("data-href");if(s===r||s===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(t);var d=new Error;l=function(e){s.onerror=s.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},1045:function(t,e,n){"use strict";var r=n("7e37"),a=n.n(r);a.a},"4ee2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header-bar"),n("div",{attrs:{id:"container"}},[n("router-view")],1),n("footer-bar")],1)},o=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"footer"}},[n("div",{staticClass:"footerInner"},[n("div",{staticClass:"footerContent clearfix"},[n("div",{staticClass:"footerLeft"},[n("div",{staticClass:"pro"},[n("p",{staticStyle:{color:"white"}},[t._v("公司产品")]),n("div",{staticClass:"label clearfix"},[n("div",{staticClass:"labelLeft"}),n("div",{staticClass:"labelRight"})]),n("ul",[n("li",[t._v("开放智慧大健康平台")]),n("li",[t._v("智慧医疗云HIS")]),n("li",[t._v("电子病历系统")]),n("li",[t._v("智慧护理信息系统")]),n("li",[t._v("医疗资源管理系统")])]),n("p",{staticStyle:{color:"white","margin-top":"50px"}},[t._v("关于睿颐")]),n("div",{staticClass:"label yirui clearfix"},[n("div",{staticClass:"labelLeft"}),n("div",{staticClass:"labelRight"})]),n("ul",{staticClass:"aboutyirui"},[n("li",[t._v("关于我们 "),n("span",[t._v("|")])]),n("li",[t._v("联系我们 "),n("span",[t._v("|")])]),n("li",[t._v("客户案例 "),n("span",[t._v("|")])]),n("li",[t._v("新闻资讯 "),n("span",[t._v("|")])]),n("li",[t._v("备案号 ：粤ICP备19098080号-1 "),n("span")]),n("li",[t._v("版权所有 © 睿颐软件")])])])]),n("div",{staticClass:"QR-code"},[n("div",{staticClass:"top"}),n("div",{staticClass:"bottom"}),n("span",[t._v("关注我们")])])])]),n("div",{staticClass:"name-img"})])}],u={},l=u,s=(n("1045"),n("2877")),d=Object(s["a"])(l,i,c,!1,null,"201e84d5",null),f=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("div",{staticClass:"headerInner"},[n("img",{attrs:{src:t.logoImg,alt:""}}),t._l(t.menuData,(function(e){return n("router-link",{key:e.id,attrs:{to:e.routePath}},[t._v(t._s(e.title))])}))],2)])},h=[],v={data:function(){return{logoImg:n("cf05"),menuData:[{title:"首页",routePath:"/home",id:1},{title:"公司产品",routePath:"/companypro",id:2},{title:"应用场景",routePath:"/appliscenarios",id:3},{title:"核心优势",routePath:"/core",id:4},{title:"关于睿颐",routePath:"/about",id:5}]}}},b=v,m=(n("5f5f"),Object(s["a"])(b,p,h,!1,null,"a3479d9a",null)),g=m.exports,y={name:"App",components:{footerBar:f,headerBar:g}},_=y,k=(n("034f"),Object(s["a"])(_,a,o,!1,null,null,null)),C=k.exports,w=(n("4ee2"),n("8c4f"));r["a"].use(w["a"]);var P=new w["a"]({routes:[{path:"/",redirect:"/home",component:function(t){return n.e("chunk-7ce44536").then(function(){var e=[n("4570")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/home",component:function(t){return n.e("chunk-7ce44536").then(function(){var e=[n("4570")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/companypro",component:function(t){return n.e("chunk-2d0ba1a4").then(function(){var e=[n("367b")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/appliscenarios",component:function(t){return n.e("chunk-2d21b2be").then(function(){var e=[n("bf48")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/core",component:function(t){return n.e("chunk-2d0ab6a6").then(function(){var e=[n("14d1")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/about",component:function(t){return n.e("chunk-2d0e4c60").then(function(){var e=[n("923d")];t.apply(null,e)}.bind(this)).catch(n.oe)}}],linkActiveClass:"actives"}),x=P;r["a"].config.productionTip=!1,new r["a"]({router:x,render:function(t){return t(C)}}).$mount("#app")},"5f5f":function(t,e,n){"use strict";var r=n("dd8a"),a=n.n(r);a.a},"7e37":function(t,e,n){},"85ec":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.6dd54f92.png"},dd8a:function(t,e,n){}});