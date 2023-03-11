"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[117],{9613:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>m});var t=n(9496);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?t.createElement(f,i(i({ref:r},c),{},{components:n})):t.createElement(f,i({ref:r},c))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4370:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var t=n(2962),a=n(2742),o=(n(9496),n(9613)),i=["components"],p={id:"errors",title:"Codes d'erreur"},l=void 0,s={unversionedId:"errors",id:"version-6.x/errors",title:"Codes d'erreur",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.x/errors.md",sourceDirName:".",slug:"/errors",permalink:"/fr/6.x/errors",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/fr",tags:[],version:"6.x",frontMatter:{id:"errors",title:"Codes d'erreur"},sidebar:"version-6.x/docs",previous:{title:"Feature Comparison",permalink:"/fr/6.x/feature-comparison"},next:{title:"Logos",permalink:"/fr/6.x/logos"}},c={},u=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",level:2}],d={toc:u};function m(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,o.kt)("p",null,"Un r\xe9pertoire de modules est pr\xe9sent et est li\xe9 \xe0 un autre r\xe9pertoire de magasins."),(0,o.kt)("p",null,"Si vous avez modifi\xe9 intentionnellement le r\xe9pertoire de la boutique, ex\xe9cutez ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," et pnpm r\xe9installera les d\xe9pendances en utilisant le nouveau magasin."),(0,o.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,o.kt)("p",null,"Un projet a une d\xe9pendance d'espace de travail qui n'existe pas dans l'espace de travail."),(0,o.kt)("p",null,"Par exemple, le paquet ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," a ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@1.0.0")," dans les ",(0,o.kt)("inlineCode",{parentName:"p"},"d\xe9pendances"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,o.kt)("p",null,"Cependant, il n'y a que ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@2.0.0")," dans l'espace de travail, donc ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," \xe9chouera."),(0,o.kt)("p",null,"Pour corriger cette erreur, toutes les d\xe9pendances qui utilisent le ",(0,o.kt)("a",{parentName:"p",href:"/fr/6.x/workspaces#workspace-protocol-workspace"},"protocole d'espace de travail")," doivent \xeatre mises \xe0 jour pour utiliser les versions des paquets pr\xe9sents dans l'espace de travail. Cela peut \xeatre fait soit manuellement, soit en utilisant la commande ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm -r update"),"."))}m.isMDXComponent=!0}}]);