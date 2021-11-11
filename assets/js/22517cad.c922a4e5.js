"use strict";(self.webpackChunkcomio_expo=self.webpackChunkcomio_expo||[]).push([[3015],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),p=l(n),u=o,f=p["".concat(s,".").concat(u)]||p[u]||d[u]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:o,a[1]=m;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9953:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],m={sidebar_position:3},s="/modlogs",l={unversionedId:"commands/moderation/modlogs",id:"commands/moderation/modlogs",isDocsHomePage:!1,title:"/modlogs",description:"Description",source:"@site/docs/commands/moderation/modlogs.md",sourceDirName:"commands/moderation",slug:"/commands/moderation/modlogs",permalink:"/docs/commands/moderation/modlogs",editUrl:"https://github.com/ProjectComio/expo/edit/main/docs/commands/moderation/modlogs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"/kick",permalink:"/docs/commands/moderation/kick"},next:{title:"/move",permalink:"/docs/commands/moderation/move"}},c=[{value:"Description",id:"description",children:[]},{value:"Sub-commands",id:"sub-commands",children:[]},{value:"Permissions",id:"permissions",children:[{value:"Bot",id:"bot",children:[]},{value:"Member",id:"member",children:[]}]}],d={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"modlogs"},"/modlogs"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Displays a member's entire moderation history for the server"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Supports ephemeral response"),(0,i.kt)("li",{parentName:"ul"},"3 seconds cooldown"),(0,i.kt)("li",{parentName:"ul"},"Can be used by members having the ",(0,i.kt)("a",{parentName:"li",href:"/docs/setup/modroles"},"moderator role"))),(0,i.kt)("h2",{id:"sub-commands"},"Sub-commands"),(0,i.kt)("p",null,"None"),(0,i.kt)("h2",{id:"permissions"},"Permissions"),(0,i.kt)("h3",{id:"bot"},"Bot"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SEND MESSAGES")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EMBED LINKS"))),(0,i.kt)("h3",{id:"member"},"Member"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If the command caller has a moderator role, they do not need the permission(s) listed below."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MANAGE MESSAGES"))))}p.isMDXComponent=!0}}]);