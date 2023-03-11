"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3794],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=c(t),m=o,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||p;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,i=new Array(p);i[0]=s;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<p;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1060:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=t(2962),o=t(2742),p=(t(9496),t(9613)),i=["components"],a={id:"prune",title:"pnpm prune"},l=void 0,c={unversionedId:"cli/prune",id:"version-6.x/cli/prune",title:"pnpm prune",description:"\ubd88\ud544\uc694\ud55c \ud328\ud0a4\uc9c0\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-6.x/cli/prune.md",sourceDirName:"cli",slug:"/cli/prune",permalink:"/ko/6.x/cli/prune",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ko",tags:[],version:"6.x",frontMatter:{id:"prune",title:"pnpm prune"},sidebar:"version-6.x/docs",previous:{title:"pnpm rebuild",permalink:"/ko/6.x/cli/rebuild"},next:{title:"pnpm fetch",permalink:"/ko/6.x/cli/fetch"}},u={},d=[{value:"\uc635\uc158",id:"\uc635\uc158",level:2},{value:"--prod",id:"--prod",level:3},{value:"--no-optional",id:"--no-optional",level:3}],s={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\ubd88\ud544\uc694\ud55c \ud328\ud0a4\uc9c0\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4."),(0,p.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,p.kt)("h3",{id:"--prod"},"--prod"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies"),"\uc5d0 \uc9c0\uc815\ub41c \ud328\ud0a4\uc9c0\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4."),(0,p.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"\uc5d0 \uc9c0\uc815\ub41c \ud328\ud0a4\uc9c0\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4."),(0,p.kt)("admonition",{type:"warning"},(0,p.kt)("p",{parentName:"admonition"},"prune \uba85\ub839\uc740 \ud604\uc7ac monorepo\uc5d0\uc11c \uc7ac\uadc0 \uc2e4\ud589\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. monorepo\uc5d0\uc11c \ud504\ub85c\ub355\uc158 \uc758\uc874\uc131\ub9cc \uc124\uce58\ud558\ub824\uba74, ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," \ud3f4\ub354\ub97c \uc0ad\uc81c\ud55c \ub2e4\uc74c ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install --prod"),"\uc73c\ub85c \ub2e4\uc2dc \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))}m.isMDXComponent=!0}}]);