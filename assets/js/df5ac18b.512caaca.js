"use strict";(self.webpackChunkcomio_expo=self.webpackChunkcomio_expo||[]).push([[565],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return u}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),m=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=m(e.components);return o.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=m(r),u=n,v=p["".concat(d,".").concat(u)]||p[u]||c[u]||a;return r?o.createElement(v,i(i({ref:t},l),{},{components:r})):o.createElement(v,i({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var m=2;m<a;m++)i[m]=r[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},491:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return l},default:function(){return p}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:3},d="Moderator roles",m={unversionedId:"setup/modroles",id:"setup/modroles",isDocsHomePage:!1,title:"Moderator roles",description:"Moderator roles have access to every moderation command, regardless of the member's permissions. A server can have upto 100 moderator roles.",source:"@site/docs/setup/modroles.md",sourceDirName:"setup",slug:"/setup/modroles",permalink:"/docs/setup/modroles",editUrl:"https://github.com/ProjectComio/expo/edit/main/docs/setup/modroles.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Permissions",permalink:"/docs/setup/permissions"},next:{title:"Setup",permalink:"/docs/listings/setup"}},l=[{value:"Manipulating moderator roles",id:"manipulating-moderator-roles",children:[{value:"Via dashboard",id:"via-dashboard",children:[]},{value:"Via commands",id:"via-commands",children:[]}]}],c={toc:l};function p(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"moderator-roles"},"Moderator roles"),(0,a.kt)("p",null,"Moderator roles have access to every moderation command, regardless of the member's permissions. A server can have upto 100 moderator roles."),(0,a.kt)("blockquote",null,(0,a.kt)("i",{className:"fas fa-star star"})," Premium servers can have upto 200 moderator roles."),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Make sure you add only trusted members to the moderator roles, as they'll have access to every moderation command."))),(0,a.kt)("h2",{id:"manipulating-moderator-roles"},"Manipulating moderator roles"),(0,a.kt)("h3",{id:"via-dashboard"},"Via dashboard"),(0,a.kt)("p",null,"Moderator roles can be set-up via the ",(0,a.kt)("a",{parentName:"p",href:"https://comio.cf/manage/"},"main page")," of your server's settings."),(0,a.kt)("h3",{id:"via-commands"},"Via commands"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"MANAGE SERVER")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ADMINISTRATOR")," permission is required to add or remove moderator roles."))),(0,a.kt)("p",null,"Moderator roles can be added using ",(0,a.kt)("inlineCode",{parentName:"p"},"/mod add")," and removed using ",(0,a.kt)("inlineCode",{parentName:"p"},"/mod remove")," command."))}p.isMDXComponent=!0}}]);