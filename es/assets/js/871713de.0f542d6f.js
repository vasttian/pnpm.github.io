"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7298],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),d=l,v=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(v,a(a({ref:n},c),{},{components:t})):r.createElement(v,a({ref:n},c))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,a[1]=p;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5401:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var r=t(2962),l=t(2742),o=(t(9496),t(9613)),a=["components"],p={id:"env",title:"pnpm env <cmd>"},i=void 0,s={unversionedId:"cli/env",id:"cli/env",title:"pnpm env <cmd>",description:"Administra el entorno de Node.js.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/cli/env.md",sourceDirName:"cli",slug:"/cli/env",permalink:"/es/next/cli/env",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/es-ES",tags:[],version:"current",frontMatter:{id:"env",title:"pnpm env <cmd>"},sidebar:"docs",previous:{title:"pnpm start",permalink:"/es/next/cli/start"},next:{title:"pnpm publish",permalink:"/es/next/cli/publish"}},c={},u=[{value:"Comandos",id:"comandos",level:2},{value:"uso",id:"uso",level:3},{value:"remove, rm",id:"remove-rm",level:3},{value:"list, ls",id:"list-ls",level:3},{value:"Opciones",id:"opciones",level:2},{value:"--global, -g",id:"--global--g",level:3}],m={toc:u};function d(e){var n=e.components,t=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Administra el entorno de Node.js."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/84-MzN_0Cng",title:"The pnpm patch command demo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"comandos"},"Comandos"),(0,o.kt)("h3",{id:"uso"},"uso"),(0,o.kt)("p",null,"Instalar y utilizar la versi\xf3n especificada de Node.js"),(0,o.kt)("p",null,"Instalar la versi\xf3n LTS de Node.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global lts\n")),(0,o.kt)("p",null,"Instalar Node.js v16:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global 16\n")),(0,o.kt)("p",null,"Instalar una versi\xf3n preliminar de Node.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global nightly\npnpm env use --global rc\npnpm env use --global 16.0.0-rc.0\npnpm env use --global rc/14\n")),(0,o.kt)("p",null,"Instalar la \xfaltima versi\xf3n de Node.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global latest\n")),(0,o.kt)("p",null,"Install an LTS version of Node.js using its ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nodejs/Release/blob/main/CODENAMES.md"},"codename"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global argon\n")),(0,o.kt)("h3",{id:"remove-rm"},"remove, rm"),(0,o.kt)("p",null,"Added in: v7.10.0"),(0,o.kt)("p",null,"Removes the specified version of Node.JS."),(0,o.kt)("p",null,"Usage example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env remove --global 14.0.0\n")),(0,o.kt)("h3",{id:"list-ls"},"list, ls"),(0,o.kt)("p",null,"Added in: v7.16.0"),(0,o.kt)("p",null,"List Node.js versions available locally or remotely."),(0,o.kt)("p",null,"Print locally installed versions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env list\n")),(0,o.kt)("p",null,"Print remotely available Node.js versions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env list --remote\n")),(0,o.kt)("p",null,"Print remotely available Node.js v16 versions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env list --remote 16\n")),(0,o.kt)("h2",{id:"opciones"},"Opciones"),(0,o.kt)("h3",{id:"--global--g"},"--global, -g"),(0,o.kt)("p",null,"Los cambios se realizan en todo el sistema."))}d.isMDXComponent=!0}}]);