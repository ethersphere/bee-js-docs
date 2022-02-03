"use strict";(self.webpackChunkbee_js_docs=self.webpackChunkbee_js_docs||[]).push([[8231],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},o=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),c=p(n),f=i,h=c["".concat(s,".").concat(f)]||c[f]||u[f]||l;return n?r.createElement(h,a(a({ref:t},o),{},{components:n})):r.createElement(h,a({ref:t},o))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=c;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,a[1]=d;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2201:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return o},default:function(){return c}});var r=n(7462),i=n(3366),l=(n(7294),n(3905)),a=["components"],d={id:"ExtendedTag",title:"Interface: ExtendedTag",sidebar_label:"ExtendedTag",sidebar_position:0,custom_edit_url:null},s=void 0,p={unversionedId:"api/interfaces/ExtendedTag",id:"api/interfaces/ExtendedTag",title:"Interface: ExtendedTag",description:"Object that contains information about progress of upload of data to network.",source:"@site/docs/api/interfaces/ExtendedTag.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ExtendedTag",permalink:"/docs/api/interfaces/ExtendedTag",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ExtendedTag",title:"Interface: ExtendedTag",sidebar_label:"ExtendedTag",sidebar_position:0,custom_edit_url:null},sidebar:"Balls",previous:{title:"Dictionary",permalink:"/docs/api/interfaces/Dictionary"},next:{title:"FeedReader",permalink:"/docs/api/interfaces/FeedReader"}},o=[{value:"Properties",id:"properties",children:[{value:"address",id:"address",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"seen",id:"seen",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"sent",id:"sent",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"split",id:"split",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"startedAt",id:"startedat",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"stored",id:"stored",children:[{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"synced",id:"synced",children:[{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3},{value:"total",id:"total",children:[{value:"Defined in",id:"defined-in-7",children:[],level:4}],level:3},{value:"uid",id:"uid",children:[{value:"Defined in",id:"defined-in-8",children:[],level:4}],level:3}],level:2}],u={toc:o};function c(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Object that contains information about progress of upload of data to network."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,l.kt)("a",{parentName:"p",href:"https://docs.ethswarm.org/docs/access-the-swarm/syncing"},"Bee docs - Syncing / Tags")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"address"},"address"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"address"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/types/Reference"},(0,l.kt)("inlineCode",{parentName:"a"},"Reference"))),(0,l.kt)("p",null,"The associated swarm hash for this tag"),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/273f14c/src/types/debug.ts#L48"},"bee-js/src/types/debug.ts:48")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"seen"},"seen"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"seen"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Number of chunks already seen"),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/273f14c/src/types/debug.ts#L23"},"bee-js/src/types/debug.ts:23")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sent"},"sent"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"sent"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Number of chunks sent for push syncing"),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/273f14c/src/types/debug.ts#L33"},"bee-js/src/types/debug.ts:33")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"split"},"split"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"split"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Number of chunks already processed by splitter for hashing"),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/273f14c/src/types/debug.ts#L18"},"bee-js/src/types/debug.ts:18")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"startedat"},"startedAt"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"startedAt"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"When the upload process started"),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/273f14c/src/types/debug.ts#L53"},"bee-js/src/types/debug.ts:53")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"stored"},"stored"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"stored"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Number of chunks already stored locally"),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/273f14c/src/types/debug.ts#L28"},"bee-js/src/types/debug.ts:28")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"synced"},"synced"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"synced"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Number of chunks synced with proof"),(0,l.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/273f14c/src/types/debug.ts#L38"},"bee-js/src/types/debug.ts:38")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"total"},"total"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"total"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Number of all chunks that the data will be split into."),(0,l.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/273f14c/src/types/debug.ts#L13"},"bee-js/src/types/debug.ts:13")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"uid"},"uid"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"uid"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Unique identifier"),(0,l.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/273f14c/src/types/debug.ts#L43"},"bee-js/src/types/debug.ts:43")))}c.isMDXComponent=!0}}]);