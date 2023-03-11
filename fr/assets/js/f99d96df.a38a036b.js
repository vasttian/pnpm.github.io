"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5127],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,p(p({ref:t},s),{},{components:n})):r.createElement(d,p({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,p=new Array(i);p[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var c=2;c<i;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(2962),o=n(2742),i=(n(9496),n(9613)),p=["components"],a={id:"setup",title:"pnpm setup"},l=void 0,c={unversionedId:"cli/setup",id:"cli/setup",title:"pnpm setup",description:"This command is used by the standalone installation scripts of pnpm. For instance, in .",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/cli/setup.md",sourceDirName:"cli",slug:"/cli/setup",permalink:"/fr/next/cli/setup",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/fr",tags:[],version:"current",frontMatter:{id:"setup",title:"pnpm setup"},sidebar:"docs",previous:{title:"pnpm bin",permalink:"/fr/next/cli/bin"},next:{title:"pnpm init",permalink:"/fr/next/cli/init"}},s={},u=[],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This command is used by the standalone installation scripts of pnpm. For instance, in ",(0,i.kt)("a",{parentName:"p",href:"https://get.pnpm.io/install.sh"},"https://get.pnpm.io/install.sh"),"."),(0,i.kt)("p",null,"Setup does the following actions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"creates a home directory for the pnpm CLI"),(0,i.kt)("li",{parentName:"ul"},"adds the pnpm home directory to the ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")," by updating the shell configuration file"),(0,i.kt)("li",{parentName:"ul"},"copies the pnpm executable to the pnpm home directory")))}f.isMDXComponent=!0}}]);