"use strict";(self.webpackChunkbee_js_docs=self.webpackChunkbee_js_docs||[]).push([[833],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=i,m=u["".concat(o,".").concat(f)]||u[f]||c[f]||a;return n?r.createElement(m,d(d({ref:t},s),{},{components:n})):r.createElement(m,d({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,d=new Array(a);d[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,d[1]=l;for(var p=2;p<a;p++)d[p]=n[p];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4560:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),d=["components"],l={id:"FeedReader",title:"Interface: FeedReader",sidebar_label:"FeedReader",sidebar_position:0,custom_edit_url:null},o=void 0,p={unversionedId:"api/interfaces/FeedReader",id:"api/interfaces/FeedReader",title:"Interface: FeedReader",description:"FeedReader is an interface for downloading feed updates",source:"@site/docs/api/interfaces/FeedReader.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/FeedReader",permalink:"/docs/api/interfaces/FeedReader",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"FeedReader",title:"Interface: FeedReader",sidebar_label:"FeedReader",sidebar_position:0,custom_edit_url:null},sidebar:"Balls",previous:{title:"ExtendedTag",permalink:"/docs/api/interfaces/ExtendedTag"},next:{title:"FeedWriter",permalink:"/docs/api/interfaces/FeedWriter"}},s=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"owner",id:"owner",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"topic",id:"topic",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"type",id:"type",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"download",id:"download",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2}],c={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,d);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"FeedReader is an interface for downloading feed updates"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"FeedReader"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/FeedWriter"},(0,a.kt)("inlineCode",{parentName:"a"},"FeedWriter"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"owner"},"owner"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"owner"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"HexEthAddress")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/c727185/src/types/index.ts#L385"},"bee-js/src/types/index.ts:385")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"topic"},"topic"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"topic"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/types/Topic"},(0,a.kt)("inlineCode",{parentName:"a"},"Topic"))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/c727185/src/types/index.ts#L386"},"bee-js/src/types/index.ts:386")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"type"},"type"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"sequence"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"epoch"')),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/c727185/src/types/index.ts#L384"},"bee-js/src/types/index.ts:384")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"download"},"download"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"download"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"FetchFeedUpdateResponse"),">"),(0,a.kt)("p",null,"Download the latest feed update"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"options?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"FeedUpdateOptions"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"FetchFeedUpdateResponse"),">"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/c727185/src/types/index.ts#L390"},"bee-js/src/types/index.ts:390")))}u.isMDXComponent=!0}}]);