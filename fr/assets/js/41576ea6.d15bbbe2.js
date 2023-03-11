"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[332],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,k=u["".concat(o,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(k,p(p({ref:t},s),{},{components:n})):a.createElement(k,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var d=2;d<l;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=n(2962),r=n(2742),l=(n(9496),n(9613)),p=["components"],i={id:"update",title:"pnpm update"},o=void 0,d={unversionedId:"cli/update",id:"cli/update",title:"pnpm update",description:"Aliases: up, upgrade",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/cli/update.md",sourceDirName:"cli",slug:"/cli/update",permalink:"/fr/next/cli/update",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/fr",tags:[],version:"current",frontMatter:{id:"update",title:"pnpm update"},sidebar:"docs",previous:{title:"pnpm install",permalink:"/fr/next/cli/install"},next:{title:"pnpm remove",permalink:"/fr/next/cli/remove"}},s={},c=[{value:"TL;DR",id:"tldr",level:2},{value:"Selecting dependencies with patterns",id:"selecting-dependencies-with-patterns",level:2},{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--latest, -L",id:"--latest--l",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--interactive, -i",id:"--interactive--i",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Aliases: ",(0,l.kt)("inlineCode",{parentName:"p"},"up"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"upgrade")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm update")," updates packages to their latest version based on the specified range."),(0,l.kt)("p",null,"Utilis\xe9 sans arguments, met \xe0 jour toutes les d\xe9pendances."),(0,l.kt)("h2",{id:"tldr"},"TL;DR"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up")),(0,l.kt)("td",{parentName:"tr",align:null},"Updates all dependencies, adhering to ranges specified in ",(0,l.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up --latest")),(0,l.kt)("td",{parentName:"tr",align:null},"Updates all dependencies, ignoring ranges specified in ",(0,l.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up foo@2")),(0,l.kt)("td",{parentName:"tr",align:null},"Updates ",(0,l.kt)("inlineCode",{parentName:"td"},"foo")," to the latest version on v2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'pnpm up "@babel/*"')),(0,l.kt)("td",{parentName:"tr",align:null},"Updates all dependencies under the ",(0,l.kt)("inlineCode",{parentName:"td"},"@babel")," scope")))),(0,l.kt)("h2",{id:"selecting-dependencies-with-patterns"},"Selecting dependencies with patterns"),(0,l.kt)("p",null,"You can use patterns to update specific dependencies."),(0,l.kt)("p",null,"Update all ",(0,l.kt)("inlineCode",{parentName:"p"},"babel")," packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm update "@babel/*"\n')),(0,l.kt)("p",null,"Update all dependencies, except ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm update !webpack\n")),(0,l.kt)("p",null,"Patterns may also be combined, so the next command will update all ",(0,l.kt)("inlineCode",{parentName:"p"},"babel")," packages, except ",(0,l.kt)("inlineCode",{parentName:"p"},"core"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm update "@babel/*" !@babel/core\n')),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Ex\xe9cute la mise \xe0 jour en parall\xe8le dans tous les sous-dossiers contenant un ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," (\xe0 l'exception de node_modules/)."),(0,l.kt)("p",null,"Exemples d'utilisation :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\n# met \xe0 jour toutes les d\xe9pendances jusqu'\xe0 une pronfondeur de 100 sous-dossiers\npnpm --recursive update --depth 100\n# met \xe0 jour la d\xe9pendance typescript \xe0 sa derni\xe8re version de mani\xe8re r\xe9cursive\npnpm --recursive update typescript@latest\n")),(0,l.kt)("h3",{id:"--latest--l"},"--latest, -L"),(0,l.kt)("p",null,"Ignore la plage de version d\xe9finie dans ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),". \xc0 la place, la version correspondante au tag ",(0,l.kt)("inlineCode",{parentName:"p"},"latest")," sera utilis\xe9e (en basculant potentiellement les d\xe9pendances \xe0 des versions majeures)."),(0,l.kt)("h3",{id:"--global--g"},"--global, -g"),(0,l.kt)("p",null,"Met \xe0 jour les d\xe9pendances globales."),(0,l.kt)("h3",{id:"--workspace"},"--workspace"),(0,l.kt)("p",null,"Tries to link all packages from the workspace. Versions are updated to match the versions of packages inside the workspace."),(0,l.kt)("p",null,"If specific packages are updated, the command will fail if any of the updated dependencies are not found inside the workspace. For instance, the following command fails if ",(0,l.kt)("inlineCode",{parentName:"p"},"express")," is not a workspace package:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm up -r --workspace express\n")),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"Only update packages in ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"Only update packages in ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,l.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,l.kt)("p",null,"Don't update packages in ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--interactive--i"},"--interactive, -i"),(0,l.kt)("p",null,"Show outdated dependencies and select which ones to update."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/fr/next/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0}}]);