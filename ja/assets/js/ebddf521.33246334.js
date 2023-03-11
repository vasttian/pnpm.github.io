"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5101],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(9496);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=p,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:p,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(2962),p=n(2742),i=(n(9496),n(9613)),a=["components"],o={id:"scripts",title:"\u30b9\u30af\u30ea\u30d7\u30c8"},l=void 0,c={unversionedId:"scripts",id:"version-6.x/scripts",title:"\u30b9\u30af\u30ea\u30d7\u30c8",description:"pnpm\u306fpackage.json\u306escripts\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u3069\u306e\u3088\u3046\u306b\u51e6\u7406\u3059\u308b\u306e\u3067\u3057\u3087\u3046\u304b\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-6.x/scripts.md",sourceDirName:".",slug:"/scripts",permalink:"/ja/6.x/scripts",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ja",tags:[],version:"6.x",frontMatter:{id:"scripts",title:"\u30b9\u30af\u30ea\u30d7\u30c8"},sidebar:"version-6.x/docs",previous:{title:"\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0",permalink:"/ja/6.x/filtering"},next:{title:"pnpm add <pkg>",permalink:"/ja/6.x/cli/add"}},s={},u=[{value:"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u30b9\u30af\u30ea\u30d7\u30c8",id:"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u30b9\u30af\u30ea\u30d7\u30c8",level:2},{value:"<code>pnpm:devPreinstall</code>",id:"pnpmdevpreinstall",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,p.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"pnpm\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"scripts"),"\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u3069\u306e\u3088\u3046\u306b\u51e6\u7406\u3059\u308b\u306e\u3067\u3057\u3087\u3046\u304b\u3002"),(0,i.kt)("h2",{id:"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u30b9\u30af\u30ea\u30d7\u30c8"},"\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u30b9\u30af\u30ea\u30d7\u30c8"),(0,i.kt)("h3",{id:"pnpmdevpreinstall"},(0,i.kt)("inlineCode",{parentName:"h3"},"pnpm:devPreinstall")),(0,i.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3: v6.21.0"),(0,i.kt)("p",null,"\u30ed\u30fc\u30ab\u30eb\u30de\u30b7\u30f3\u3067",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install"),"\u3092\u5b9f\u884c\u3059\u308b\u3068\u304d\u306b\u3060\u3051\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u3042\u3089\u3086\u308b\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u524d\u306b\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u3053\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u3001\u30eb\u30fc\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u306e\u307f\u5b9f\u884c\u3057\u307e\u3059\u3002"))}m.isMDXComponent=!0}}]);