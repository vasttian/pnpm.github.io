"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9430],{9613:(e,r,o)=>{o.d(r,{Zo:()=>u,kt:()=>l});var t=o(9496);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function s(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=t.createContext({}),p=function(e){var r=t.useContext(c),o=r;return e&&(o="function"==typeof e?e(r):i(i({},r),e)),o},u=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(o),l=n,f=m["".concat(c,".").concat(l)]||m[l]||d[l]||a;return o?t.createElement(f,i(i({ref:r},u),{},{components:o})):t.createElement(f,i({ref:r},u))}));function l(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7749:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var t=o(2962),n=o(2742),a=(o(9496),o(9613)),i=["components"],s={id:"production",title:"Produ\xe7\xe3o"},c=void 0,p={unversionedId:"production",id:"production",title:"Produ\xe7\xe3o",description:"Existem duas maneiras de inicializar seu projeto num ambiente de produ\xe7\xe3o com pnpm. Uma delas \xe9 fazer o commit do lockfile. Em seguida, em seu ambiente de produ\xe7\xe3o, execute pnpm install - Isso ir\xe1 construir a \xe1rvore de depend\xeancias usando o lockfile, o que significa que as vers\xf5es de depend\xeancias ser\xe3o consistentes com como elas eram quando o lockfile foi commitado. Essa \xe9 a maneira mais eficaz (e a que recomendamos) de garantir que sua \xe1rvore de depend\xeancias persista nos ambientes.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/production.md",sourceDirName:".",slug:"/production",permalink:"/pt/next/production",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"production",title:"Produ\xe7\xe3o"}},u={},d=[],m={toc:d};function l(e){var r=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},m,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Existem duas maneiras de inicializar seu projeto num ambiente de produ\xe7\xe3o com pnpm. Uma delas \xe9 fazer o commit do lockfile. Em seguida, em seu ambiente de produ\xe7\xe3o, execute ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," - Isso ir\xe1 construir a \xe1rvore de depend\xeancias usando o lockfile, o que significa que as vers\xf5es de depend\xeancias ser\xe3o consistentes com como elas eram quando o lockfile foi commitado. Essa \xe9 a maneira mais eficaz (e a que recomendamos) de garantir que sua \xe1rvore de depend\xeancias persista nos ambientes."),(0,a.kt)("p",null,"Outro m\xe9todo \xe9 fazer o commit do Lockfile e copiar o reposit\xf3rio de pacotes para o seu ambiente de produ\xe7\xe3o (voc\xea pode alterar onde com a op\xe7\xe3o ",(0,a.kt)("a",{parentName:"p",href:"npmrc#store-dir"},"local de armazenamento"),"). Em seguida, voc\xea pode executar ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install --offline")," e o pnpm usar\xe1 os pacotes do armazenamento global, portanto, n\xe3o far\xe1 nenhuma requisi\xe7\xe3o ao registro. Isso \xe9 recomendado ",(0,a.kt)("strong",{parentName:"p"},"SOMENTE")," para ambientes onde o acesso externo ao registro est\xe1 indispon\xedvel por qualquer motivo."))}l.isMDXComponent=!0}}]);