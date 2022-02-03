"use strict";(self.webpackChunkbee_js_docs=self.webpackChunkbee_js_docs||[]).push([[2432],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=i,m=f["".concat(o,".").concat(d)]||f[d]||c[d]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8396:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),s=["components"],l={id:"Utils.assertPrefixedHexString",title:"Function: assertPrefixedHexString",sidebar_label:"assertPrefixedHexString",custom_edit_url:null},o=void 0,p={unversionedId:"api/functions/Utils.assertPrefixedHexString",id:"api/functions/Utils.assertPrefixedHexString",title:"Function: assertPrefixedHexString",description:"Utils.assertPrefixedHexString",source:"@site/docs/api/functions/Utils.assertPrefixedHexString.md",sourceDirName:"api/functions",slug:"/api/functions/Utils.assertPrefixedHexString",permalink:"/docs/api/functions/Utils.assertPrefixedHexString",editUrl:null,tags:[],version:"current",frontMatter:{id:"Utils.assertPrefixedHexString",title:"Function: assertPrefixedHexString",sidebar_label:"assertPrefixedHexString",custom_edit_url:null},sidebar:"Balls",previous:{title:"assertHexString",permalink:"/docs/api/functions/Utils.assertHexString"},next:{title:"bytesAtOffset",permalink:"/docs/api/functions/Utils.bytesAtOffset"}},u=[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],c={toc:u};function f(e){var t=e.components,r=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/namespaces/Utils"},"Utils"),".assertPrefixedHexString"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"assertPrefixedHexString"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"s"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"name?"),"): asserts s is PrefixedHexString"),(0,a.kt)("p",null,"Verifies if the provided input is a PrefixedHexString."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"s")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string input")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"name")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"'value'")),(0,a.kt)("td",{parentName:"tr",align:"left"},"optional name for the asserted value")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,"asserts s is PrefixedHexString"),(0,a.kt)("p",null,"HexString or throws error"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/273f14c/src/utils/hex.ts#L182"},"bee-js/src/utils/hex.ts:182")))}f.isMDXComponent=!0}}]);