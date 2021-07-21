(self.webpackChunkbee_js_docs=self.webpackChunkbee_js_docs||[]).push([[888],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,k=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return n?r.createElement(k,p(p({ref:t},d),{},{components:n})):r.createElement(k,p({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9347:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),p={id:"fileuploadoptions",title:"Interface: FileUploadOptions",sidebar_label:"FileUploadOptions",sidebar_position:0,custom_edit_url:null},o=void 0,s={unversionedId:"api/interfaces/fileuploadoptions",id:"api/interfaces/fileuploadoptions",isDocsHomePage:!1,title:"Interface: FileUploadOptions",description:"Hierarchy",source:"@site/docs/api/interfaces/fileuploadoptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/fileuploadoptions",permalink:"/docs/api/interfaces/fileuploadoptions",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"fileuploadoptions",title:"Interface: FileUploadOptions",sidebar_label:"FileUploadOptions",sidebar_position:0,custom_edit_url:null},sidebar:"Balls",previous:{title:"FileHeaders",permalink:"/docs/api/interfaces/fileheaders"},next:{title:"Health",permalink:"/docs/api/interfaces/health"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"axiosOptions",id:"axiosoptions",children:[]},{value:"contentType",id:"contenttype",children:[]},{value:"encrypt",id:"encrypt",children:[]},{value:"pin",id:"pin",children:[]},{value:"size",id:"size",children:[]},{value:"tag",id:"tag",children:[]}]}],d={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/uploadoptions"},(0,i.kt)("inlineCode",{parentName:"a"},"UploadOptions"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"FileUploadOptions"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"axiosoptions"},"axiosOptions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"axiosOptions"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"AxiosRequestConfig")),(0,i.kt)("p",null,"Alter default options of axios HTTP client"),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/uploadoptions"},"UploadOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/uploadoptions#axiosoptions"},"axiosOptions")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/6f227e1/src/types/index.ts#L102"},"bee-js/src/types/index.ts:102")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"contenttype"},"contentType"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"contentType"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Specifies given Content-Type so when loaded in browser the file is correctly represented."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ethswarm.org/api/#tag/File"},"Bee API reference - ",(0,i.kt)("inlineCode",{parentName:"a"},"POST /bzz"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/6f227e1/src/types/index.ts#L118"},"bee-js/src/types/index.ts:118")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"encrypt"},"encrypt"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"encrypt"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Will encrypt the uploaded data and return longer hash which also includes the decryption key."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Warning! Not allowed when node is in Gateway mode!")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ethswarm.org/docs/access-the-swarm/store-with-encryption"},"Bee docs - Store with Encryption")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ethswarm.org/api/#tag/Collection/paths/~1bzz/post"},"Bee API reference - ",(0,i.kt)("inlineCode",{parentName:"a"},"POST /bzz"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"see"))," Reference"),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/uploadoptions"},"UploadOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/uploadoptions#encrypt"},"encrypt")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/6f227e1/src/types/index.ts#L90"},"bee-js/src/types/index.ts:90")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pin"},"pin"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"pin"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Will pin the data locally in the Bee node as well."),(0,i.kt)("p",null,"Locally pinned data is possible to reupload to network if it disappear."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Warning! Not allowed when node is in Gateway mode!")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ethswarm.org/docs/access-the-swarm/pinning"},"Bee docs - Pinning")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ethswarm.org/api/#tag/Collection/paths/~1bzz/post"},"Bee API reference - ",(0,i.kt)("inlineCode",{parentName:"a"},"POST /bzz"))),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/uploadoptions"},"UploadOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/uploadoptions#pin"},"pin")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/6f227e1/src/types/index.ts#L79"},"bee-js/src/types/index.ts:79")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"size"},"size"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"size"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Specifies Content-Length for the given data. It is required when uploading with Readable."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ethswarm.org/api/#tag/File"},"Bee API reference - ",(0,i.kt)("inlineCode",{parentName:"a"},"POST /bzz"))),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/6f227e1/src/types/index.ts#L111"},"bee-js/src/types/index.ts:111")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tag"},"tag"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"tag"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Tags keep track of syncing the data with network. This option allows attach existing Tag UUID to the uploaded data."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ethswarm.org/api/#tag/Collection/paths/~1bzz/post"},"Bee API reference - ",(0,i.kt)("inlineCode",{parentName:"a"},"POST /bzz"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ethswarm.org/docs/access-the-swarm/syncing"},"Bee docs - Syncing / Tags")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"link"))," Tag"),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/uploadoptions"},"UploadOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/uploadoptions#tag"},"tag")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/6f227e1/src/types/index.ts#L99"},"bee-js/src/types/index.ts:99")))}c.isMDXComponent=!0}}]);