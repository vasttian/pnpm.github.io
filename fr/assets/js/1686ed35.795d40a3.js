"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6312],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),f=l,m=c["".concat(o,".").concat(f)]||c[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var r=n(2962),l=n(2742),a=(n(9496),n(9613)),i=["components"],p={id:"list",title:"pnpm list"},o=void 0,s={unversionedId:"cli/list",id:"cli/list",title:"pnpm list",description:"Alias : ls",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/cli/list.md",sourceDirName:"cli",slug:"/cli/list",permalink:"/fr/next/cli/list",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/fr",tags:[],version:"current",frontMatter:{id:"list",title:"pnpm list"},sidebar:"docs",previous:{title:"pnpm audit",permalink:"/fr/next/cli/audit"},next:{title:"pnpm outdated",permalink:"/fr/next/cli/outdated"}},u={},d=[{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--json",id:"--json",level:3},{value:"--long",id:"--long",level:3},{value:"--parseable",id:"--parseable",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--depth &lt;number&gt;",id:"--depth-number",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--only-projects",id:"--only-projects",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],c={toc:d};function f(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Alias : ",(0,a.kt)("inlineCode",{parentName:"p"},"ls")),(0,a.kt)("p",null,"Cette commande affiche les versions de tous les paquets install\xe9s, ainsi que leurs d\xe9pendances, dans une arborescence."),(0,a.kt)("p",null,"Les arguments positionnels sont des identifiants ",(0,a.kt)("inlineCode",{parentName:"p"},"nom@version"),", qui permettent de limiter les r\xe9sultats aux paquets recherch\xe9s. Par exemple, ",(0,a.kt)("inlineCode",{parentName:"p"},'pnpm list "babel-*" "eslint-*" semver@5'),"."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"Ex\xe9cuter la commande sur chaque paquet dans les sous-r\xe9pertoires ou sur chaque paquet de l'espace de travail, quand ex\xe9cut\xe9 dans un espace de travail."),(0,a.kt)("h3",{id:"--json"},"--json"),(0,a.kt)("p",null,"Afficher le r\xe9sultat au format JSON."),(0,a.kt)("h3",{id:"--long"},"--long"),(0,a.kt)("p",null,"Afficher des informations d\xe9taill\xe9es."),(0,a.kt)("h3",{id:"--parseable"},"--parseable"),(0,a.kt)("p",null,"Afficher les r\xe9pertoires des paquets dans un format analysable au lieu du format sous arborescence."),(0,a.kt)("h3",{id:"--global--g"},"--global, -g"),(0,a.kt)("p",null,"Afficher les paquets dans le r\xe9pertoire d'installation global plut\xf4t que dans le projet en cours."),(0,a.kt)("h3",{id:"--depth-number"},"--depth ","<","number",">"),(0,a.kt)("p",null,"Profondeur d'affichage maximale de l'arbre de d\xe9pendances."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth 0")," ne liste que les d\xe9pendances directes. ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth -1")," ne liste que les projets. Utile dans un espace de travail quand l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"-r")," est utilis\xe9e."),(0,a.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,a.kt)("p",null,"N'afficher que le graphe de d\xe9pendances pour les paquets dans ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,a.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,a.kt)("p",null,"N'afficher que le graphe de d\xe9pendances pour les paquets dans ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,a.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,a.kt)("p",null,"Ne pas afficher les paquets dans ",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,a.kt)("h3",{id:"--only-projects"},"--only-projects"),(0,a.kt)("p",null,"Ajout\xe9 dans : v7.22.0"),(0,a.kt)("p",null,"N'afficher que les d\xe9pendances qui sont \xe9galement des projets dans l'espace de travail."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/fr/next/filtering"},"En savoir plus sur le filtrage.")))}f.isMDXComponent=!0}}]);