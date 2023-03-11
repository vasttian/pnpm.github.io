"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4563],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),v=a,m=u["".concat(i,".").concat(v)]||u[v]||d[v]||o;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2048:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>v,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var n=r(2962),a=r(2742),o=(r(9496),r(9613)),l=["components"],p={id:"why",title:"pnpm why"},i=void 0,c={unversionedId:"cli/why",id:"cli/why",title:"pnpm why",description:"Mostra todos os pacotes que dependem do pacote especificado.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/cli/why.md",sourceDirName:"cli",slug:"/cli/why",permalink:"/pt/next/cli/why",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"why",title:"pnpm why"},sidebar:"docs",previous:{title:"pnpm outdated",permalink:"/pt/next/cli/outdated"},next:{title:"pnpm licenses",permalink:"/pt/next/cli/licenses"}},s={},d=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--json",id:"--json",level:3},{value:"--long",id:"--long",level:3},{value:"--parseable",id:"--parseable",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--only-projects",id:"--only-projects",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:d};function v(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Mostra todos os pacotes que dependem do pacote especificado."),(0,o.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"Mostra a \xe1rvore de depend\xeancia para o pacote especificado para cada pacote em subdiret\xf3rios ou para cada pacote do workspace quando executado dentro de um workspace."),(0,o.kt)("h3",{id:"--json"},"--json"),(0,o.kt)("p",null,"Mostra informa\xe7\xf5es no formato JSON."),(0,o.kt)("h3",{id:"--long"},"--long"),(0,o.kt)("p",null,"Mostra sa\xedda detalhada."),(0,o.kt)("h3",{id:"--parseable"},"--parseable"),(0,o.kt)("p",null,"Mostra sa\xedda analis\xe1vel em vez de visualiza\xe7\xe3o em \xe1rvore."),(0,o.kt)("h3",{id:"--global--g"},"--global, -g"),(0,o.kt)("p",null,"Lista os pacotes no diret\xf3rio de instala\xe7\xe3o global em vez de no projeto atual."),(0,o.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,o.kt)("p",null,"Exibe apenas a \xe1rvore de depend\xeancias para pacotes em ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,o.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,o.kt)("p",null,"Exibe apenas a \xe1rvore de depend\xeancias para pacotes em ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,o.kt)("h3",{id:"--only-projects"},"--only-projects"),(0,o.kt)("p",null,"Added in: v7.22.0"),(0,o.kt)("p",null,"Display only dependencies that are also projects within the workspace."),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pt/next/filtering"},"Leia mais sobre filtragem.")))}v.isMDXComponent=!0}}]);