"use strict";(self.webpackChunkbee_js_docs=self.webpackChunkbee_js_docs||[]).push([[1779],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(o,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5153:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],s={id:"Utils.isFlexBytes",title:"Function: isFlexBytes",sidebar_label:"isFlexBytes",custom_edit_url:null},o=void 0,p={unversionedId:"api/functions/Utils.isFlexBytes",id:"api/functions/Utils.isFlexBytes",title:"Function: isFlexBytes",description:"Utils.isFlexBytes",source:"@site/docs/api/functions/Utils.isFlexBytes.md",sourceDirName:"api/functions",slug:"/api/functions/Utils.isFlexBytes",permalink:"/docs/api/functions/Utils.isFlexBytes",editUrl:null,tags:[],version:"current",frontMatter:{id:"Utils.isFlexBytes",title:"Function: isFlexBytes",sidebar_label:"isFlexBytes",custom_edit_url:null},sidebar:"Balls",previous:{title:"isBytes",permalink:"/docs/api/functions/Utils.isBytes"},next:{title:"isHexEthAddress",permalink:"/docs/api/functions/Utils.isHexEthAddress"}},d=[{value:"Type parameters",id:"type-parameters",children:[],level:4},{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/namespaces/Utils"},"Utils"),".isFlexBytes"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isFlexBytes"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Min"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Max"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"b"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"min"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"max"),"): b is FlexBytes<Min, Max",">"),(0,i.kt)("p",null,"Type guard for FlexBytes<Min,Max> type"),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Min")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Max")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = ",(0,i.kt)("inlineCode",{parentName:"td"},"Min"))))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"b")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"unknown")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The byte array")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"min")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Min")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Minimum size of the array")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"max")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Max")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Maximum size of the array")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,"b is FlexBytes<Min, Max",">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/273f14c/src/utils/bytes.ts#L57"},"bee-js/src/utils/bytes.ts:57")))}c.isMDXComponent=!0}}]);