/*! For license information please see 8565.ea0636e3.js.LICENSE.txt */
(self.webpackChunkbee_js_docs=self.webpackChunkbee_js_docs||[]).push([[8565],{8617:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a="iconExternalLink_3J9K",l=function(e){var t=e.width,n=void 0===t?13.5:t,l=e.height,o=void 0===l?13.5:l;return r.createElement("svg",{width:n,height:o,"aria-hidden":"true",viewBox:"0 0 24 24",className:a},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},4478:function(e,t,n){"use strict";var r=n(2122),a=n(9756),l=n(7294);t.Z=function(e){var t=e.width,n=void 0===t?30:t,o=e.height,c=void 0===o?30:o,i=e.className,s=(0,a.Z)(e,["width","height","className"]);return l.createElement("svg",(0,r.Z)({className:i,width:n,height:c,viewBox:"0 0 30 30","aria-hidden":"true"},s),l.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},8258:function(e,t,n){"use strict";n.d(t,{Z:function(){return pe}});var r=n(7294),a=n(6010),l=n(5977),o=n(4973),c=n(9306),i="skipToContent_1oUP";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var u=function(){var e=(0,r.useRef)(null),t=(0,l.k6)().action;return(0,c.SL)((function(n){var r=n.location;e.current&&!r.hash&&"POP"!==t&&s(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#",className:i,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},r.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m="announcementBar_3WsW",d="announcementBarClose_38nx",f="announcementBarContent_3EUC",v="announcementBarCloseable_3myR";var h=function(){var e,t=(0,c.nT)(),n=t.isClosed,l=t.close,i=(0,c.LU)().announcementBar;if(!i)return null;var s=i.content,u=i.backgroundColor,h=i.textColor,g=i.isCloseable;return!s||g&&n?null:r.createElement("div",{className:m,style:{backgroundColor:u,color:h},role:"banner"},r.createElement("div",{className:(0,a.Z)(f,(e={},e[v]=g,e)),dangerouslySetInnerHTML:{__html:s}}),g?r.createElement("button",{type:"button",className:(0,a.Z)(d,"clean-btn"),onClick:l,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},g=n(2122),b=n(6979),E=n(2263),p={toggle:"toggle_71bT"},Z=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(p.toggle,p.dark),style:n},t)},k=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(p.toggle,p.light),style:n},t)},_=(0,r.memo)((function(e){var t=e.className,n=e.icons,l=e.checked,o=e.disabled,c=e.onChange,i=(0,r.useState)(l),s=i[0],u=i[1],m=(0,r.useState)(!1),d=m[0],f=m[1],v=(0,r.useRef)(null);return r.createElement("div",{className:(0,a.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":o})},r.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},r.createElement("div",{className:"react-toggle-track-check"},n.checked),r.createElement("div",{className:"react-toggle-track-x"},n.unchecked),r.createElement("div",{className:"react-toggle-thumb"})),r.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:function(){return u(!s)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}));function N(e){var t=(0,c.LU)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,l=t.lightIcon,o=t.lightIconStyle,i=(0,E.Z)().isClient;return r.createElement(_,(0,g.Z)({disabled:!i,icons:{checked:r.createElement(Z,{icon:n,style:a}),unchecked:r.createElement(k,{icon:l,style:o})}},e))}var y=n(5350),w=n(7898),C=function(e){var t=(0,l.TH)(),n=(0,r.useState)(e),a=n[0],o=n[1],i=(0,r.useRef)(!1),s=(0,r.useState)(0),u=s[0],m=s[1],d=(0,r.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return(0,w.Z)((function(t,n){var r=t.scrollY,a=n.scrollY;if(e)if(r<u)o(!0);else{if(i.current)return i.current=!1,void o(!1);a&&0===r&&o(!0);var l=document.documentElement.scrollHeight-u,c=window.innerHeight;a&&r>=a?o(!1):r+c<l&&o(!0)}}),[u,i]),(0,c.SL)((function(t){e&&!t.location.hash&&o(!0)})),(0,r.useEffect)((function(){e&&t.hash&&(i.current=!0)}),[t.hash]),{navbarRef:d,isNavbarVisible:a}},L=n(1839),I=n(3783),T=n(9756),D=n(5525),x=function(e){var t=e.width,n=void 0===t?20:t,a=e.height,l=void 0===a?20:a,o=(0,T.Z)(e,["width","height"]);return r.createElement("svg",(0,g.Z)({viewBox:"0 0 20 20",width:n,height:l,"aria-hidden":"true"},o),r.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};function B(e){var t=e.mobile,n=e.dropdownItemsBefore,a=e.dropdownItemsAfter,l=(0,T.Z)(e,["mobile","dropdownItemsBefore","dropdownItemsAfter"]),o=(0,E.Z)().i18n,i=o.currentLocale,s=o.locales,u=o.localeConfigs,m=(0,c.l5)();function d(e){return u[e].label}var f=s.map((function(e){var t="pathname://"+m.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:d(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===i?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),v=[].concat(n,f,a),h=t?"Languages":d(i);return r.createElement(D.Z,(0,g.Z)({},l,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(x,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.createElement("span",null,h)),items:v}))}function A(e){return e.mobile?null:r.createElement(b.Z,null)}var S={default:function(){return D.Z},localeDropdown:function(){return B},search:function(){return A},docsVersion:function(){return n(7250).Z},docsVersionDropdown:function(){return n(9308).Z},doc:function(){return n(6400).Z}};function M(e){var t=e.type,n=(0,T.Z)(e,["type"]),a=function(e){void 0===e&&(e="default");var t=S[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(t);return r.createElement(a,n)}var U=n(5537),P=n(4478),H="displayOnlyInLargeViewport_GrZ2",R="navbarHideable_2qcr",V="navbarHidden_3yey",W="right";var z=function(){var e,t=(0,c.LU)(),n=t.navbar,l=n.items,o=n.hideOnScroll,i=n.style,s=t.colorMode.disableSwitch,u=(0,r.useState)(!1),m=u[0],d=u[1],f=(0,y.Z)(),v=f.isDarkTheme,h=f.setLightTheme,E=f.setDarkTheme,p=C(o),Z=p.navbarRef,k=p.isNavbarVisible;(0,L.Z)(m);var _=(0,r.useCallback)((function(){d(!0)}),[d]),w=(0,r.useCallback)((function(){d(!1)}),[d]),T=(0,r.useCallback)((function(e){return e.target.checked?E():h()}),[h,E]),D=(0,I.Z)();(0,r.useEffect)((function(){D===I.D.desktop&&d(!1)}),[D]);var x=l.some((function(e){return"search"===e.type})),B=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:W)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:W)}))}}(l),A=B.leftItems,S=B.rightItems;return r.createElement("nav",{ref:Z,className:(0,a.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===i,"navbar--primary":"primary"===i,"navbar-sidebar--show":m},e[R]=o,e[V]=o&&!k,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},null!=l&&0!==l.length&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:_,onKeyDown:_},r.createElement(P.Z,null)),r.createElement(U.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),A.map((function(e,t){return r.createElement(M,(0,g.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},S.map((function(e,t){return r.createElement(M,(0,g.Z)({},e,{key:t}))})),!s&&r.createElement(N,{className:H,checked:v,onChange:T}),!x&&r.createElement(b.Z,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:w}),r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(U.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:w}),!s&&m&&r.createElement(N,{checked:v,onChange:T})),r.createElement("div",{className:"navbar-sidebar__items"},r.createElement("div",{className:"menu"},r.createElement("ul",{className:"menu__list"},l.map((function(e,t){return r.createElement(M,(0,g.Z)({mobile:!0},e,{onClick:w,key:t}))})))))))},O=n(6742),j=n(4996),G=n(3919),q="footerLogoLink_MyFc",F=n(8465),J=n(8617);function K(e){var t=e.to,n=e.href,a=e.label,l=e.prependBaseUrlToHref,o=(0,T.Z)(e,["to","href","label","prependBaseUrlToHref"]),c=(0,j.Z)(t),i=(0,j.Z)(n,{forcePrependBaseUrl:!0});return r.createElement(O.Z,(0,g.Z)({className:"footer__link-item"},n?{href:l?i:n}:{to:c},o),n&&!(0,G.Z)(n)?r.createElement("span",null,a,r.createElement(J.Z,null)):a)}var Q=function(e){var t=e.sources,n=e.alt;return r.createElement(F.Z,{className:"footer__logo",alt:n,sources:t})};var Y=function(){var e=(0,c.LU)().footer,t=e||{},n=t.copyright,l=t.links,o=void 0===l?[]:l,i=t.logo,s=void 0===i?{}:i,u={light:(0,j.Z)(s.src),dark:(0,j.Z)(s.srcDark||s.src)};return e?r.createElement("footer",{className:(0,a.Z)("footer",{"footer--dark":"dark"===e.style})},r.createElement("div",{className:"container"},o&&o.length>0&&r.createElement("div",{className:"row footer__links"},o.map((function(e,t){return r.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.createElement("li",{key:e.href||e.to,className:"footer__item"},r.createElement(K,e))}))):null)}))),(s||n)&&r.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&r.createElement("div",{className:"margin-bottom--sm"},s.href?r.createElement(O.Z,{href:s.href,className:q},r.createElement(Q,{alt:s.alt,sources:u})):r.createElement(Q,{alt:s.alt,sources:u})),n?r.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},X=n(412),$=(0,c.WA)("theme"),ee="light",te="dark",ne=function(e){return e===te?te:ee},re=function(e){(0,c.WA)("theme").set(ne(e))},ae=function(){var e=(0,c.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,l=(0,r.useState)(function(e){return X.Z.canUseDOM?ne(document.documentElement.getAttribute("data-theme")):ne(e)}(t)),o=l[0],i=l[1],s=(0,r.useCallback)((function(){i(ee),re(ee)}),[]),u=(0,r.useCallback)((function(){i(te),re(te)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",ne(o))}),[o]),(0,r.useEffect)((function(){if(!n)try{var e=$.get();null!==e&&i(ne(e))}catch(t){console.error(t)}}),[i]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;i(t?te:ee)}))}),[]),{isDarkTheme:o===te,setLightTheme:s,setDarkTheme:u}},le=n(2924);var oe=function(e){var t=ae(),n=t.isDarkTheme,a=t.setLightTheme,l=t.setDarkTheme;return r.createElement(le.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:l}},e.children)},ce="docusaurus.tab.",ie=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,c.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,c._f)().forEach((function(t){if(t.startsWith(ce)){var n=t.substring(ce.length);e[n]=(0,c.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},se=n(9443);var ue=function(e){var t=ie(),n=t.tabGroupChoices,a=t.setTabGroupChoices;return r.createElement(se.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a}},e.children)};function me(e){var t=e.children;return r.createElement(oe,null,r.createElement(c.pl,null,r.createElement(ue,null,r.createElement(c.L5,null,t))))}var de=n(9105);function fe(e){var t=e.locale,n=e.version,a=e.tag;return r.createElement(de.Z,null,t&&r.createElement("meta",{name:"docusaurus_locale",content:t}),n&&r.createElement("meta",{name:"docusaurus_version",content:n}),a&&r.createElement("meta",{name:"docusaurus_tag",content:a}))}var ve=n(1217);function he(){var e=(0,E.Z)().i18n,t=e.defaultLocale,n=e.locales,a=(0,c.l5)();return r.createElement(de.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function ge(e){var t=e.permalink,n=(0,E.Z)().siteConfig.url,a=function(){var e=(0,E.Z)().siteConfig.url,t=(0,l.TH)().pathname;return e+(0,j.Z)(t)}(),o=t?""+n+t:a;return r.createElement(de.Z,null,r.createElement("meta",{property:"og:url",content:o}),r.createElement("link",{rel:"canonical",href:o}))}function be(e){var t=(0,E.Z)(),n=t.siteConfig,a=n.favicon,l=n.themeConfig,o=l.metadatas,i=l.image,s=t.i18n,u=s.currentLocale,m=s.localeConfigs,d=e.title,f=e.description,v=e.image,h=e.keywords,b=e.searchMetadatas,p=(0,j.Z)(a),Z=(0,c.pe)(d),k=u,_=m[u].direction;return r.createElement(r.Fragment,null,r.createElement(de.Z,null,r.createElement("html",{lang:k,dir:_}),a&&r.createElement("link",{rel:"shortcut icon",href:p}),r.createElement("title",null,Z),r.createElement("meta",{property:"og:title",content:Z}),v||i&&r.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.createElement(ve.Z,{description:f,keywords:h,image:v}),r.createElement(ge,null),r.createElement(he,null),r.createElement(fe,(0,g.Z)({tag:c.HX,locale:u},b)),r.createElement(de.Z,null,o.map((function(e,t){return r.createElement("meta",(0,g.Z)({key:"metadata_"+t},e))}))))}var Ee=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var pe=function(e){var t=e.children,n=e.noFooter,l=e.wrapperClassName,o=e.pageClassName;return Ee(),r.createElement(me,null,r.createElement(be,e),r.createElement(u,null),r.createElement(h,null),r.createElement(z,null),r.createElement("div",{className:(0,a.Z)(c.kM.wrapper.main,l,o)},t),!n&&r.createElement(Y,null))}},5537:function(e,t,n){"use strict";var r=n(2122),a=n(9756),l=n(7294),o=n(6742),c=n(8465),i=n(4996),s=n(2263);t.Z=function(e){var t=(0,s.Z)(),n=t.siteConfig,u=n.title,m=n.themeConfig.navbar,d=m.title,f=m.logo,v=void 0===f?{src:""}:f,h=t.isClient,g=e.imageClassName,b=e.titleClassName,E=(0,a.Z)(e,["imageClassName","titleClassName"]),p=(0,i.Z)(v.href||"/"),Z={light:(0,i.Z)(v.src),dark:(0,i.Z)(v.srcDark||v.src)};return l.createElement(o.Z,(0,r.Z)({to:p},E,v.target&&{target:v.target}),v.src&&l.createElement(c.Z,{key:h,className:g,sources:Z,alt:v.alt||d||u}),null!=d&&l.createElement("b",{className:b},d))}},5525:function(e,t,n){"use strict";var r=n(2122),a=n(9756),l=n(7294),o=n(6010),c=n(6742),i=n(4996),s=n(5977),u=n(9306),m=n(8617),d=n(3919),f="dropdown__link--active";function v(e){var t=e.activeBasePath,n=e.activeBaseRegex,o=e.to,s=e.href,u=e.label,v=e.activeClassName,h=void 0===v?"navbar__link--active":v,g=e.prependBaseUrlToHref,b=(0,a.Z)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),E=(0,i.Z)(o),p=(0,i.Z)(t),Z=(0,i.Z)(s,{forcePrependBaseUrl:!0}),k=u&&s&&!(0,d.Z)(s),_=h===f;return l.createElement(c.Z,(0,r.Z)({},s?{href:g?Z:s}:Object.assign({isNavLink:!0,activeClassName:h,to:E},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(p)}}:null),b),k?l.createElement("span",null,u,l.createElement(m.Z,_&&{width:12,height:12})):u)}function h(e){var t,n=e.items,c=e.position,i=e.className,s=(0,a.Z)(e,["items","position","className"]),u=(0,l.useRef)(null),m=(0,l.useRef)(null),d=(0,l.useState)(!1),h=d[0],g=d[1];(0,l.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var b=function(e,t){return void 0===t&&(t=!1),(0,o.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?l.createElement("div",{ref:u,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===c,"dropdown--right":"right"===c,"dropdown--show":h})},l.createElement(v,(0,r.Z)({className:b(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g(!h))}}),null!=(t=s.children)?t:s.label),l.createElement("ul",{ref:m,className:"dropdown__menu"},n.map((function(e,t){var o=e.className,c=(0,a.Z)(e,["className"]);return l.createElement("li",{key:t},l.createElement(v,(0,r.Z)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);var r=u.current.nextElementSibling;r&&r.focus()}},activeClassName:f,className:b(o,!0)},c)))})))):l.createElement(v,(0,r.Z)({className:b(i)},s))}function g(e){var t,n,c,i=e.items,m=e.className,d=(e.position,(0,a.Z)(e,["items","className","position"])),f=(0,l.useRef)(null),h=(0,s.TH)().pathname,g=(0,l.useState)((function(){var e;return null==(e=!(null!=i&&i.some((function(e){return(0,u.Mg)(e.to,h)}))))||e})),b=g[0],E=g[1],p=function(e,t){return void 0===t&&(t=!1),(0,o.Z)("menu__link",{"menu__link--sublist":t},e)};if(!i)return l.createElement("li",{className:"menu__list-item"},l.createElement(v,(0,r.Z)({className:p(m)},d)));var Z=null!=(t=f.current)&&t.scrollHeight?(null==(n=f.current)?void 0:n.scrollHeight)+"px":void 0;return l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":b})},l.createElement(v,(0,r.Z)({role:"button",className:p(m,!0)},d,{onClick:function(e){e.preventDefault(),E((function(e){return!e}))}}),null!=(c=d.children)?c:d.label),l.createElement("ul",{className:"menu__list",ref:f,style:{height:b?void 0:Z}},i.map((function(e,t){var n=e.className,o=(0,a.Z)(e,["className"]);return l.createElement("li",{className:"menu__list-item",key:t},l.createElement(v,(0,r.Z)({activeClassName:"menu__link--active",className:p(n)},o,{onClick:d.onClick})))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,["mobile"]),o=n?g:h;return l.createElement(o,r)}},6400:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(2122),a=n(9756),l=n(7294),o=n(5525),c=n(907),i=n(6010),s=n(9306),u=n(8780);function m(e){var t,n=e.docId,m=e.activeSidebarClassName,d=e.label,f=e.docsPluginId,v=(0,a.Z)(e,["docId","activeSidebarClassName","label","docsPluginId"]),h=(0,c.Iw)(f),g=h.activeVersion,b=h.activeDoc,E=(0,s.J)(f).preferredVersion,p=(0,c.yW)(f),Z=function(e,t){var n,r=(n=[]).concat.apply(n,e.map((function(e){return e.docs}))),a=r.find((function(e){return e.id===t}));if(!a){var l=r.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+l)}return a}((0,u.uniq)([g,E,p].filter(Boolean)),n);return l.createElement(o.Z,(0,r.Z)({exact:!0},v,{className:(0,i.Z)(v.className,(t={},t[m]=b&&b.sidebar===Z.sidebar,t)),label:null!=d?d:Z.id,to:Z.path}))}},9308:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(2122),a=n(9756),l=n(7294),o=n(5525),c=n(907),i=n(9306),s=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function u(e){var t,n,u=e.mobile,m=e.docsPluginId,d=e.dropdownActiveClassDisabled,f=e.dropdownItemsBefore,v=e.dropdownItemsAfter,h=(0,a.Z)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),g=(0,c.Iw)(m),b=(0,c.gB)(m),E=(0,c.yW)(m),p=(0,i.J)(m),Z=p.preferredVersion,k=p.savePreferredVersionName;var _=function(){var e=b.map((function(e){var t=(null==g?void 0:g.alternateDocVersions[e.name])||s(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==g?void 0:g.activeVersion)},onClick:function(){k(e.name)}}})),t=[].concat(f,e,v);if(!(t.length<=1))return t}(),N=null!=(t=null!=(n=g.activeVersion)?n:Z)?t:E,y=u&&_?"Versions":N.label,w=u&&_?void 0:s(N).path;return l.createElement(o.Z,(0,r.Z)({},h,{mobile:u,label:y,to:w,items:_,isActive:d?function(){return!1}:void 0}))}},7250:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(2122),a=n(9756),l=n(7294),o=n(5525),c=n(907),i=n(9306);function s(e){var t,n=e.label,s=e.to,u=e.docsPluginId,m=(0,a.Z)(e,["label","to","docsPluginId"]),d=(0,c.zu)(u),f=(0,i.J)(u).preferredVersion,v=(0,c.yW)(u),h=null!=(t=null!=d?d:f)?t:v,g=null!=n?n:h.label,b=null!=s?s:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(h).path;return l.createElement(o.Z,(0,r.Z)({},m,{label:g,to:b}))}},2924:function(e,t,n){"use strict";var r=n(7294).createContext(void 0);t.Z=r},8465:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(2122),a=n(9756),l=n(7294),o=n(6010),c=n(2263),i=n(5350),s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},u=function(e){var t=(0,c.Z)().isClient,n=(0,i.Z)().isDarkTheme,u=e.sources,m=e.className,d=e.alt,f=void 0===d?"":d,v=(0,a.Z)(e,["sources","className","alt"]),h=t?n?["dark"]:["light"]:["light","dark"];return l.createElement(l.Fragment,null,h.map((function(e){return l.createElement("img",(0,r.Z)({key:e,src:u[e],alt:f,className:(0,o.Z)(s.themedImage,s["themedImage--"+e],m)},v))})))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},1839:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},7898:function(e,t,n){"use strict";var r=n(7294),a=n(412),l=function(){return{scrollX:a.Z.canUseDOM?window.pageXOffset:0,scrollY:a.Z.canUseDOM?window.pageYOffset:0}};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,r.useRef)(l()),a=function(){var t=l();e&&e(t,n.current),n.current=t};(0,r.useEffect)((function(){var e={passive:!0};return a(),window.addEventListener("scroll",a,e),function(){return window.removeEventListener("scroll",a,e)}}),t)}},5350:function(e,t,n){"use strict";var r=n(7294),a=n(2924);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},3783:function(e,t,n){"use strict";n.d(t,{D:function(){return l}});var r=n(7294),a=n(412),l={desktop:"desktop",mobile:"mobile"};t.Z=function(){var e=a.Z.canUseDOM;function t(){if(e)return window.innerWidth>996?l.desktop:l.mobile}var n=(0,r.useState)(t),o=n[0],c=n[1];return(0,r.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){c(t())}}),[]),o}},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var o=a.apply(null,n);o&&e.push(o)}else if("object"===l)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}}]);