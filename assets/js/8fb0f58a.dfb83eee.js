"use strict";(self.webpackChunkcomio_expo=self.webpackChunkcomio_expo||[]).push([[7888],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),m=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(n),s=a,f=c["".concat(d,".").concat(s)]||c[s]||u[s]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3545:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},default:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:4},d="Media-only",m={unversionedId:"automod/mediaonly",id:"automod/mediaonly",isDocsHomePage:!1,title:"Media-only",description:"Comio allows you to configure media-only channels, where messages devoid of specified attachments will get purged.",source:"@site/docs/automod/mediaonly.md",sourceDirName:"automod",slug:"/automod/mediaonly",permalink:"/docs/automod/mediaonly",editUrl:"https://github.com/ProjectComio/expo/edit/main/docs/automod/mediaonly.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Anti-nuke",permalink:"/docs/automod/antinuke"},next:{title:"Slowmode",permalink:"/docs/automod/slowmode"}},p=[{value:"Formats",id:"formats",children:[]}],u={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"media-only"},"Media-only"),(0,o.kt)("p",null,"Comio allows you to configure media-only channels, where messages devoid of specified attachments will get purged."),(0,o.kt)("h2",{id:"formats"},"Formats"),(0,o.kt)("p",null,"You can choose the type of attachemnt(s) to allow:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Group"),(0,o.kt)("th",{parentName:"tr",align:null},"Formats"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PNG")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"png"),"/",(0,o.kt)("inlineCode",{parentName:"td"},"apng")," image")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"JPEG/JPG")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"jpeg"),"/",(0,o.kt)("inlineCode",{parentName:"td"},"jpg")," image")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"GIF")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"gif")," image")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Video")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"mp4"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"webm"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"ms-video"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"mpeg"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"ogg"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Audio")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"mp3"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"aac"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"midi"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"mpeg"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"ogg"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"opus"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"wav"))))))}c.isMDXComponent=!0}}]);