"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5356],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=s(t),d=l,v=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(v,p(p({ref:n},c),{},{components:t})):r.createElement(v,p({ref:n},c))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,p=new Array(o);p[0]=m;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:l,p[1]=a;for(var s=2;s<o;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9335:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(2962),l=t(2742),o=(t(9496),t(9613)),p=["components"],a={id:"env",title:"pnpm env <cmd>"},i=void 0,s={unversionedId:"cli/env",id:"cli/env",title:"pnpm env <cmd>",description:"G\xe8re l'environnement Node.js.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/cli/env.md",sourceDirName:"cli",slug:"/cli/env",permalink:"/fr/next/cli/env",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/fr",tags:[],version:"current",frontMatter:{id:"env",title:"pnpm env <cmd>"},sidebar:"docs",previous:{title:"pnpm start",permalink:"/fr/next/cli/start"},next:{title:"pnpm publish",permalink:"/fr/next/cli/publish"}},c={},u=[{value:"Commandes",id:"commandes",level:2},{value:"use",id:"use",level:3},{value:"remove, rm",id:"remove-rm",level:3},{value:"list, ls",id:"list-ls",level:3},{value:"Options",id:"options",level:2},{value:"--global, -g",id:"--global--g",level:3}],m={toc:u};function d(e){var n=e.components,t=(0,l.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"G\xe8re l'environnement Node.js."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/84-MzN_0Cng",title:"The pnpm patch command demo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"commandes"},"Commandes"),(0,o.kt)("h3",{id:"use"},"use"),(0,o.kt)("p",null,"Installer et utiliser la version sp\xe9cifi\xe9e de Node.js"),(0,o.kt)("p",null,"Installez la version LTS de Node.js\xa0:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global lts\n")),(0,o.kt)("p",null,"Installez Node.js v16:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global 16\n")),(0,o.kt)("p",null,"Installez une version pr\xe9liminaire de Node.js\xa0:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global nightly\npnpm env use --global rc\npnpm env use --global 16.0.0-rc.0\npnpm env use --global rc/14\n")),(0,o.kt)("p",null,"Installez la derni\xe8re version de Node.js :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global latest\n")),(0,o.kt)("p",null,"Install an LTS version of Node.js using its ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nodejs/Release/blob/main/CODENAMES.md"},"codename"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global argon\n")),(0,o.kt)("h3",{id:"remove-rm"},"remove, rm"),(0,o.kt)("p",null,"Added in: v7.10.0"),(0,o.kt)("p",null,"Removes the specified version of Node.JS."),(0,o.kt)("p",null,"Usage example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env remove --global 14.0.0\n")),(0,o.kt)("h3",{id:"list-ls"},"list, ls"),(0,o.kt)("p",null,"Added in: v7.16.0"),(0,o.kt)("p",null,"List Node.js versions available locally or remotely."),(0,o.kt)("p",null,"Print locally installed versions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env list\n")),(0,o.kt)("p",null,"Print remotely available Node.js versions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env list --remote\n")),(0,o.kt)("p",null,"Print remotely available Node.js v16 versions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env list --remote 16\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--global--g"},"--global, -g"),(0,o.kt)("p",null,"Les modifications sont apport\xe9es \xe0 l'ensemble du syst\xe8me."))}d.isMDXComponent=!0}}]);