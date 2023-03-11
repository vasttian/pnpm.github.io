"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8131],{9613:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>m});var t=a(9496);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),d=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},c=function(e){var n=d(e.components);return t.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(a),m=r,k=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return a?t.createElement(k,p(p({ref:n},c),{},{components:a})):t.createElement(k,p({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=s;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var d=2;d<o;d++)p[d]=a[d];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}s.displayName="MDXCreateElement"},1663:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var t=a(2962),r=a(2742),o=(a(9496),a(9613)),p=["components"],l={id:"deploy",title:"pnpm deploy"},i=void 0,d={unversionedId:"cli/deploy",id:"cli/deploy",title:"pnpm deploy",description:"Ditambahkan Pada : v7.4.0",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/cli/deploy.md",sourceDirName:"cli",slug:"/cli/deploy",permalink:"/id/next/cli/deploy",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/id",tags:[],version:"current",frontMatter:{id:"deploy",title:"pnpm deploy"},sidebar:"docs",previous:{title:"pnpm init",permalink:"/id/next/cli/init"},next:{title:"pnpm doctor",permalink:"/id/next/cli/doctor"}},c={},u=[{value:"Options",id:"options",level:2},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3},{value:"Berkas-berkas yang termasuk di dalam projek yang diunggah/deploy",id:"berkas-berkas-yang-termasuk-di-dalam-projek-yang-diunggahdeploy",level:2}],s={toc:u};function m(e){var n=e.components,a=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ditambahkan Pada : v7.4.0"),(0,o.kt)("p",null,"Deploy a package from a workspace."),(0,o.kt)("p",null,"Penggunaan:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm --filter=<deployed project name> deploy <target directory>\n")),(0,o.kt)("p",null,"In case you build your project before deployment, also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--prod")," option to skip ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies")," installation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm --filter=<deployed project name> --prod deploy <target directory>\n")),(0,o.kt)("p",null,"Penggunaan di sebuah docker image. Setelah membangun keseluruhan yang ada pada monorepo anda, lakukan hal ini pada image kedua dimana digunakan pada image monorepo dasar anda sebagai konteks pembuatan atau dalam tahap pembangunan tambahan:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# syntax=docker/dockerfile:1.4\n\nFROM workspace as pruned\nRUN pnpm --filter <your package name> --prod deploy pruned\n\nFROM node:18-alpine\nWORKDIR /app\n\nENV NODE_ENV=production\n\nCOPY --from=pruned /app/pruned .\n\nENTRYPOINT ["node", "index.js"]\n')),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,o.kt)("p",null,"Hanya akan menginstall ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies")," apapun yang ada di dalam ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"."),(0,o.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"opsionalKetergantungan")," tidak akan diinstal."),(0,o.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,o.kt)("p",null,"Packages in ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies")," won't be installed."),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/id/next/filtering"},"Read more about filtering.")),(0,o.kt)("h2",{id:"berkas-berkas-yang-termasuk-di-dalam-projek-yang-diunggahdeploy"},"Berkas-berkas yang termasuk di dalam projek yang diunggah/deploy"),(0,o.kt)("p",null,"Berdasarkan bawaan, keseluruhan berkas yang ada pada projek akan di salin selama proses pengunggahan/deploy. The project's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),' may contain a "files" field to list the files and directories that should be copied.'))}m.isMDXComponent=!0}}]);