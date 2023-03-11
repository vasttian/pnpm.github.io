"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4551],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),d=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,f=u["".concat(i,".").concat(m)]||u[m]||s[m]||p;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,a=new Array(p);a[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<p;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8435:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var r=t(2962),o=t(2742),p=(t(9496),t(9613)),a=["components"],l={id:"deploy",title:"pnpm deploy"},i=void 0,d={unversionedId:"cli/deploy",id:"cli/deploy",title:"pnpm deploy",description:"Agregado en: v7.4.0",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/cli/deploy.md",sourceDirName:"cli",slug:"/cli/deploy",permalink:"/es/next/cli/deploy",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/es-ES",tags:[],version:"current",frontMatter:{id:"deploy",title:"pnpm deploy"},sidebar:"docs",previous:{title:"pnpm init",permalink:"/es/next/cli/init"},next:{title:"pnpm doctor",permalink:"/es/next/cli/doctor"}},c={},s=[{value:"Options",id:"options",level:2},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3},{value:"Archivos incluidos en el proyecto desplegado",id:"archivos-incluidos-en-el-proyecto-desplegado",level:2}],u={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Agregado en: v7.4.0"),(0,p.kt)("p",null,"Desplegar un paquete desde un ",(0,p.kt)("inlineCode",{parentName:"p"},"workspace"),"."),(0,p.kt)("p",null,"Uso:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --filter=<nombre del proyecto a desplegar> deploy <directorio destino>\n")),(0,p.kt)("p",null,"En caso de que genere el proyecto antes de desplegarlo, utilice tambi\xe9n la opci\xf3n ",(0,p.kt)("inlineCode",{parentName:"p"},"--prod")," para omitir la instalaci\xf3n de ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --filter=<nombre del proyecto a desplegar> deploy <directorio destino>\n")),(0,p.kt)("p",null,"Uso en una imagen docker. Despu\xe9s de generar todo en su monorepo, haga esto en una segunda imagen que use su imagen base monorepo como contexto de construcci\xf3n o en una etapa de generaci\xf3n adicional:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# syntax=docker/dockerfile:1.4\n\nFROM workspace as pruned\nRUN pnpm --filter <nombre del proyecto a desplegar> --prod deploy pruned\n\nFROM node:18-alpine\nWORKDIR /app\n\nENV NODE_ENV=production\n\nCOPY --from=pruned /app/pruned .\n\nENTRYPOINT ["node", "index.js"]\n')),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,p.kt)("p",null,"Solo ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies")," son instaladas independientemente de ",(0,p.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"."),(0,p.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," no son instaladas."),(0,p.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,p.kt)("p",null,"Packages in ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies")," won't be installed."),(0,p.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/es/next/filtering"},"Read more about filtering.")),(0,p.kt)("h2",{id:"archivos-incluidos-en-el-proyecto-desplegado"},"Archivos incluidos en el proyecto desplegado"),(0,p.kt)("p",null,"De forma predeterminada, todos los archivos del proyecto se copian durante el depliege. El archivo ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),' del proyecto puede contener un campo "files" para listar los archivos y directorios que deben copiarse.'))}m.isMDXComponent=!0}}]);