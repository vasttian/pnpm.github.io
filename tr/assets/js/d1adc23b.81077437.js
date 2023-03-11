"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6836],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),d=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=d(n),m=o,y=s["".concat(a,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=s;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>p,metadata:()=>d,toc:()=>u});var r=n(2962),o=n(2742),i=(n(9496),n(9613)),l=["components"],p={id:"deploy",title:"pnpm deploy"},a=void 0,d={unversionedId:"cli/deploy",id:"cli/deploy",title:"pnpm deploy",description:"Added in: v7.4.0",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/cli/deploy.md",sourceDirName:"cli",slug:"/cli/deploy",permalink:"/tr/next/cli/deploy",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/tr",tags:[],version:"current",frontMatter:{id:"deploy",title:"pnpm deploy"},sidebar:"docs",previous:{title:"pnpm init",permalink:"/tr/next/cli/init"},next:{title:"pnpm doctor",permalink:"/tr/next/cli/doctor"}},c={},u=[{value:"Parametreler",id:"parametreler",level:2},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--filter &lt;paket_se\xe7ici&gt;",id:"--filter-paket_se\xe7ici",level:3},{value:"Files included in the deployed project",id:"files-included-in-the-deployed-project",level:2}],s={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Added in: v7.4.0"),(0,i.kt)("p",null,"Deploy a package from a workspace."),(0,i.kt)("p",null,"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm --filter=<deployed project name> deploy <target directory>\n")),(0,i.kt)("p",null,"In case you build your project before deployment, also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--prod")," option to skip ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," installation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm --filter=<deployed project name> --prod deploy <target directory>\n")),(0,i.kt)("p",null,"Usage in a docker image. After building everything in your monorepo, do this in a second image that uses your monorepo base image as a build context or in an additional build stage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# syntax=docker/dockerfile:1.4\n\nFROM workspace as pruned\nRUN pnpm --filter <your package name> --prod deploy pruned\n\nFROM node:18-alpine\nWORKDIR /app\n\nENV NODE_ENV=production\n\nCOPY --from=pruned /app/pruned .\n\nENTRYPOINT ["node", "index.js"]\n')),(0,i.kt)("h2",{id:"parametreler"},"Parametreler"),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," de\u011feri ne olursa olsun, sadece ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," k\u0131sm\u0131ndaki k\xfct\xfcphaneleri y\xfckler."),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," k\u0131sm\u0131ndaki k\xfct\xfcphaneleri g\xf6z ard\u0131 ederek y\xfckleme yapar."),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"Packages in ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," won't be installed."),(0,i.kt)("h3",{id:"--filter-paket_se\xe7ici"},"--filter ","<","paket_se\xe7ici>"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/tr/next/filtering"},"Buradan daha fazla bilgiye ula\u015fabilirsin.")),(0,i.kt)("h2",{id:"files-included-in-the-deployed-project"},"Files included in the deployed project"),(0,i.kt)("p",null,"By default, all the files of the project are copied during deployment. The project's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),' may contain a "files" field to list the files and directories that should be copied.'))}m.isMDXComponent=!0}}]);