"use strict";(self.webpackChunkbee_js_docs=self.webpackChunkbee_js_docs||[]).push([[730],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(s,".").concat(b)]||u[b]||c[b]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3950:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"Utils.readableWebToNode",title:"Function: readableWebToNode",sidebar_label:"readableWebToNode",custom_edit_url:null},s=void 0,p={unversionedId:"api/functions/Utils.readableWebToNode",id:"api/functions/Utils.readableWebToNode",title:"Function: readableWebToNode",description:"Utils.readableWebToNode",source:"@site/docs/api/functions/Utils.readableWebToNode.md",sourceDirName:"api/functions",slug:"/api/functions/Utils.readableWebToNode",permalink:"/docs/api/functions/Utils.readableWebToNode",editUrl:null,tags:[],version:"current",frontMatter:{id:"Utils.readableWebToNode",title:"Function: readableWebToNode",sidebar_label:"readableWebToNode",custom_edit_url:null},sidebar:"Balls",previous:{title:"readableNodeToWeb",permalink:"/docs/api/functions/Utils.readableNodeToWeb"},next:{title:"toLittleEndian",permalink:"/docs/api/functions/Utils.toLittleEndian"}},d=[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],c={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/namespaces/Utils"},"Utils"),".readableWebToNode"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"readableWebToNode"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"webStream"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeReadableNative")),(0,o.kt)("p",null,"Function that converts WHATWG ReadableStream into Node's Readable"),(0,o.kt)("p",null,"Taken over from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gwicke/node-web-streams/blob/master/lib/conversions.js"},"https://github.com/gwicke/node-web-streams/blob/master/lib/conversions.js"),"\nBecause it uses forked web-streams-polyfill that is outdated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Warning!"),"\nIf you want to use this function in browser you have to polyfill ",(0,o.kt)("inlineCode",{parentName:"p"},"stream")," package with your bundler."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"author"))," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gwicke"},"https://github.com/gwicke")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"licence"))," Apache License 2.0 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gwicke/node-web-streams/blob/master/LICENSE"},"https://github.com/gwicke/node-web-streams/blob/master/LICENSE")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"webStream")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ReadableStream"),"<",(0,o.kt)("inlineCode",{parentName:"td"},"unknown"),">")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"options?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ReadableOptions"))))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"NodeReadableNative")),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/c559535/src/utils/stream.ts#L143"},"bee-js/src/utils/stream.ts:143")))}u.isMDXComponent=!0}}]);