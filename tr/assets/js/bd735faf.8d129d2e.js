"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9326],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,p=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,m=d["".concat(a,".").concat(f)]||d[f]||u[f]||p;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=r.length,o=new Array(p);o[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<p;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8944:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(2962),i=r(2742),p=(r(9496),r(9613)),o=["components"],l={id:"scripts",title:"Scripts"},a=void 0,c={unversionedId:"scripts",id:"version-7.x/scripts",title:"Scripts",description:"How pnpm handles the scripts field of package.json.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-7.x/scripts.md",sourceDirName:".",slug:"/scripts",permalink:"/tr/scripts",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/tr",tags:[],version:"7.x",frontMatter:{id:"scripts",title:"Scripts"},sidebar:"version-7.x/docs",previous:{title:"Filtreleme",permalink:"/tr/filtering"},next:{title:"pnpm add <paket-ad\u0131>",permalink:"/tr/cli/add"}},s={},u=[{value:"Lifecycle Scripts",id:"lifecycle-scripts",level:2},{value:"<code>pnpm:devPreinstall</code>",id:"pnpmdevpreinstall",level:3}],d={toc:u};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"How pnpm handles the ",(0,p.kt)("inlineCode",{parentName:"p"},"scripts")," field of ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,p.kt)("h2",{id:"lifecycle-scripts"},"Lifecycle Scripts"),(0,p.kt)("h3",{id:"pnpmdevpreinstall"},(0,p.kt)("inlineCode",{parentName:"h3"},"pnpm:devPreinstall")),(0,p.kt)("p",null,"Runs only on local ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,p.kt)("p",null,"Runs before any dependency is installed."),(0,p.kt)("p",null,"This script is executed only when set in the root project's ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),"."))}f.isMDXComponent=!0}}]);