(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),p=(n(0),n(204)),i={id:"uploadoptions",title:"Interface: UploadOptions",sidebar_label:"UploadOptions",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/interfaces/uploadoptions",id:"api/interfaces/uploadoptions",isDocsHomePage:!1,title:"Interface: UploadOptions",description:"Interface: UploadOptions",source:"@site/docs/api/interfaces/uploadoptions.md",slug:"/api/interfaces/uploadoptions",permalink:"/docs/api/interfaces/uploadoptions",editUrl:null,version:"current",sidebar_label:"UploadOptions",sidebar:"Balls",previous:{title:"Interface: UploadHeaders",permalink:"/docs/api/interfaces/uploadheaders"},next:{title:"Interface: WithdrawTokensResponse",permalink:"/docs/api/interfaces/withdrawtokensresponse"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"axiosOptions",id:"axiosoptions",children:[]},{value:"encrypt",id:"encrypt",children:[]},{value:"pin",id:"pin",children:[]},{value:"tag",id:"tag",children:[]}]}],b={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("h1",{id:"interface-uploadoptions"},"Interface: UploadOptions"),Object(p.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"UploadOptions")),Object(p.b)("p",{parentName:"li"},"\u21b3 ",Object(p.b)("a",{parentName:"p",href:"/docs/api/interfaces/fileuploadoptions"},Object(p.b)("em",{parentName:"a"},"FileUploadOptions"))),Object(p.b)("p",{parentName:"li"},"\u21b3 ",Object(p.b)("a",{parentName:"p",href:"/docs/api/interfaces/collectionuploadoptions"},Object(p.b)("em",{parentName:"a"},"CollectionUploadOptions"))))),Object(p.b)("h2",{id:"properties"},"Properties"),Object(p.b)("h3",{id:"axiosoptions"},"axiosOptions"),Object(p.b)("p",null,"\u2022 ",Object(p.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(p.b)("strong",{parentName:"p"},"axiosOptions"),": ",Object(p.b)("em",{parentName:"p"},"undefined")," ","|"," AxiosRequestConfig"),Object(p.b)("p",null,"alter default options of axios HTTP client"),Object(p.b)("p",null,"Defined in: ",Object(p.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/8087a81/src/types/index.ts#L36"},"bee-js/src/types/index.ts:36")),Object(p.b)("hr",null),Object(p.b)("h3",{id:"encrypt"},"encrypt"),Object(p.b)("p",null,"\u2022 ",Object(p.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(p.b)("strong",{parentName:"p"},"encrypt"),": ",Object(p.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(p.b)("em",{parentName:"p"},"boolean")),Object(p.b)("p",null,"Defined in: ",Object(p.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/8087a81/src/types/index.ts#L33"},"bee-js/src/types/index.ts:33")),Object(p.b)("hr",null),Object(p.b)("h3",{id:"pin"},"pin"),Object(p.b)("p",null,"\u2022 ",Object(p.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(p.b)("strong",{parentName:"p"},"pin"),": ",Object(p.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(p.b)("em",{parentName:"p"},"boolean")),Object(p.b)("p",null,"Defined in: ",Object(p.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/8087a81/src/types/index.ts#L32"},"bee-js/src/types/index.ts:32")),Object(p.b)("hr",null),Object(p.b)("h3",{id:"tag"},"tag"),Object(p.b)("p",null,"\u2022 ",Object(p.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(p.b)("strong",{parentName:"p"},"tag"),": ",Object(p.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(p.b)("em",{parentName:"p"},"number")),Object(p.b)("p",null,"Defined in: ",Object(p.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/8087a81/src/types/index.ts#L34"},"bee-js/src/types/index.ts:34")))}l.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=l(n),u=r,O=s["".concat(i,".").concat(u)]||s[u]||d[u]||p;return n?a.a.createElement(O,o(o({ref:t},b),{},{components:n})):a.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<p;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);