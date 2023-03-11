"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7051],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),u=l,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6602:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=t(2962),l=t(2742),r=(t(9496),t(9613)),o=["components"],i={id:"uninstall",title:"Desinstalando pnpm"},p=void 0,s={unversionedId:"uninstall",id:"version-7.x/uninstall",title:"Desinstalando pnpm",description:"Eliminando los paquetes instalados globalmente",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-7.x/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/es/uninstall",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/es-ES",tags:[],version:"7.x",frontMatter:{id:"uninstall",title:"Desinstalando pnpm"},sidebar:"version-7.x/docs",previous:{title:"C\xf3mo se resuelven los peers",permalink:"/es/how-peers-are-resolved"},next:{title:"pnpm vs npm",permalink:"/es/pnpm-vs-npm"}},c={},d=[{value:"Eliminando los paquetes instalados globalmente",id:"eliminando-los-paquetes-instalados-globalmente",level:2},{value:"Eliminando la CLI de pnpm",id:"eliminando-la-cli-de-pnpm",level:2},{value:"Eliminando el almac\xe9n direccionable de contenido global",id:"eliminando-el-almac\xe9n-direccionable-de-contenido-global",level:2}],m={toc:d};function u(e){var n=e.components,t=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"eliminando-los-paquetes-instalados-globalmente"},"Eliminando los paquetes instalados globalmente"),(0,r.kt)("p",null,"Antes de eliminar la CLI de pnpm, es recomendado eliminar todos los paquetes globales que instal\xf3 mediante pnpm."),(0,r.kt)("p",null,"Para listar todos los paquetes globales, ejecute ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),". Hay dos formas de eliminar los paquetes globales:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Ejecute ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm rm -g <pkg>...")," con cada paquete global listado."),(0,r.kt)("li",{parentName:"ol"},"Ejecute ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm root -g")," para encontrar la ubicaci\xf3n del directorio global y elim\xednelo manualmente.")),(0,r.kt)("h2",{id:"eliminando-la-cli-de-pnpm"},"Eliminando la CLI de pnpm"),(0,r.kt)("p",null,"Si utiliz\xf3 el script para instalar pnpm (o npx), entonces deber\xeda poder desinstalar la CLI de pnpm usando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rm -rf $PNPM_HOME\n")),(0,r.kt)("p",null,"Tambi\xe9n puede que quieras quitar la variable ",(0,r.kt)("inlineCode",{parentName:"p"},"PNPM_HOME")," de tu configuraci\xf3n de shell (",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.bashrc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.zshrc")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.config/fish/config.fish"),")."),(0,r.kt)("p",null,"Si us\xf3 npm para instalar pnpm, entonces debe usar npm para desinstalar pnpm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,r.kt)("h2",{id:"eliminando-el-almac\xe9n-direccionable-de-contenido-global"},"Eliminando el almac\xe9n direccionable de contenido global"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rm -rf $(pnpm store path)\n")),(0,r.kt)("p",null,"Si us\xf3 pnpm en discos no primarios, debe ejecutar el comando anterior en cada disco, donde se us\xf3 pnpm. pnpm crea una almac\xe9n por disco."))}u.isMDXComponent=!0}}]);