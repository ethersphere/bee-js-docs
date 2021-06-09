(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{190:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),c=(r(0),r(212)),i={id:"feedreader",title:"Interface: FeedReader",sidebar_label:"FeedReader",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/interfaces/feedreader",id:"api/interfaces/feedreader",isDocsHomePage:!1,title:"Interface: FeedReader",description:"Interface: FeedReader",source:"@site/docs/api/interfaces/feedreader.md",slug:"/api/interfaces/feedreader",permalink:"/docs/api/interfaces/feedreader",editUrl:null,version:"current",sidebar_label:"FeedReader",sidebar:"Balls",previous:{title:"Interface: Dictionary<T>",permalink:"/docs/api/interfaces/dictionary"},next:{title:"Interface: FeedWriter",permalink:"/docs/api/interfaces/feedwriter"}},b=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"owner",id:"owner",children:[]},{value:"topic",id:"topic",children:[]},{value:"type",id:"type",children:[]}]},{value:"Methods",id:"methods",children:[{value:"download",id:"download",children:[]}]}],o={toc:b};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-feedreader"},"Interface: FeedReader"),Object(c.b)("p",null,"FeedReader is an interface for downloading feed updates"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"FeedReader")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",{parentName:"p",href:"/docs/api/interfaces/feedwriter"},Object(c.b)("em",{parentName:"a"},"FeedWriter"))))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"owner"},"owner"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"owner"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/api/types/utils.eth.hexethaddress"},Object(c.b)("em",{parentName:"a"},"HexEthAddress"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/430becc/src/types/index.ts#L167"},"bee-js/src/types/index.ts:167")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"topic"},"topic"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"topic"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/api/types/topic"},Object(c.b)("em",{parentName:"a"},"Topic"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/430becc/src/types/index.ts#L168"},"bee-js/src/types/index.ts:168")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"type"},"type"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"type"),": ",Object(c.b)("em",{parentName:"p"},"sequence")," ","|"," ",Object(c.b)("em",{parentName:"p"},"epoch")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/430becc/src/types/index.ts#L166"},"bee-js/src/types/index.ts:166")),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"download"},"download"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"download"),"(",Object(c.b)("inlineCode",{parentName:"p"},"options?"),": FeedUpdateOptions): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<FetchFeedUpdateResponse",">"),Object(c.b)("p",null,"Download the latest feed update"),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"options?")),Object(c.b)("td",{parentName:"tr",align:"left"},"FeedUpdateOptions")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<FetchFeedUpdateResponse",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/430becc/src/types/index.ts#L172"},"bee-js/src/types/index.ts:172")))}d.isMDXComponent=!0},212:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),d=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=d(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),l=d(r),u=n,f=l["".concat(i,".").concat(u)]||l[u]||s[u]||c;return r?a.a.createElement(f,p(p({ref:t},o),{},{components:r})):a.a.createElement(f,p({ref:t},o))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=u;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var o=2;o<c;o++)i[o]=r[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);