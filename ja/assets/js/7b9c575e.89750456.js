"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[568],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(9496);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,o=e.originalType,a=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(t),m=p,f=s["".concat(a,".").concat(m)]||s[m]||u[m]||o;return t?r.createElement(f,l(l({ref:n},d),{},{components:t})):r.createElement(f,l({ref:n},d))}));function m(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var o=t.length,l=new Array(o);l[0]=s;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:p,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8393:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(2962),p=t(2742),o=(t(9496),t(9613)),l=["components"],i={id:"deploy",title:"pnpm deploy"},a=void 0,c={unversionedId:"cli/deploy",id:"version-7.x/cli/deploy",title:"pnpm deploy",description:"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3: v7.4.0",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-7.x/cli/deploy.md",sourceDirName:"cli",slug:"/cli/deploy",permalink:"/ja/cli/deploy",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ja",tags:[],version:"7.x",frontMatter:{id:"deploy",title:"pnpm deploy"},sidebar:"version-7.x/docs",previous:{title:"pnpm init",permalink:"/ja/cli/init"},next:{title:"pnpm doctor",permalink:"/ja/cli/doctor"}},d={},u=[{value:"Options",id:"options",level:2},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3},{value:"\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u542b\u307e\u308c\u308b\u30d5\u30a1\u30a4\u30eb",id:"\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u542b\u307e\u308c\u308b\u30d5\u30a1\u30a4\u30eb",level:2}],s={toc:u};function m(e){var n=e.components,t=(0,p.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3: v7.4.0"),(0,o.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u304b\u3089\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30c7\u30d7\u30ed\u30a4\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u4f7f\u3044\u65b9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm --filter=<\u30c7\u30d7\u30ed\u30a4\u5148\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u540d> deploy <\u5bfe\u8c61\u30c7\u30a3\u30ec\u30af\u30c8\u30ea>\n")),(0,o.kt)("p",null,"\u30c7\u30d7\u30ed\u30a4\u524d\u306b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d3\u30eb\u30c9\u3059\u308b\u5834\u5408\u306f\u3001 ",(0,o.kt)("inlineCode",{parentName:"p"},"--prod")," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066 ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u30b9\u30ad\u30c3\u30d7\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm --filter=<\u30c7\u30d7\u30ed\u30a4\u5148\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u540d> --prod deploy <\u5bfe\u8c61\u30c7\u30a3\u30ec\u30af\u30c8\u30ea>\n")),(0,o.kt)("p",null,"Docker \u30a4\u30e1\u30fc\u30b8\u3067\u306e\u4f7f\u7528\u65b9\u6cd5\u3002 \u30e2\u30ce\u30ec\u30dd\u3067\u3059\u3079\u3066\u3092\u30d3\u30eb\u30c9\u3057\u305f\u3089\u3001\u30e2\u30ce\u30ec\u30dd\u30d9\u30fc\u30b9\u30a4\u30e1\u30fc\u30b8\u3092\u30d3\u30eb\u30c9\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b 2 \u756a\u76ee\u306e\u30a4\u30e1\u30fc\u30b8\u3067\u3001\u307e\u305f\u306f\u8ffd\u52a0\u306e\u30d3\u30eb\u30c9 \u30b9\u30c6\u30fc\u30b8\u3067\u3001\u3053\u308c\u3092\u884c\u3044\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# syntax=docker/dockerfile:1.4\n\nFROM workspace as pruned\nRUN pnpm --filter <your package name> --prod deploy pruned\n\nFROM node:18-alpine\nWORKDIR /app\n\nENV NODE_ENV=production\n\nCOPY --from=pruned /app/pruned .\n\nENTRYPOINT ["node", "index.js"]\n')),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \u306b\u3088\u3089\u305a ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u5185\u306e\u4f9d\u5b58\u306e\u307f\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u305b\u3093\u3002"),(0,o.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u305b\u3093\u3002"),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/ja/filtering"},"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,o.kt)("h2",{id:"\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u542b\u307e\u308c\u308b\u30d5\u30a1\u30a4\u30eb"},"\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u542b\u307e\u308c\u308b\u30d5\u30a1\u30a4\u30eb"),(0,o.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u30c7\u30d7\u30ed\u30a4\u6642\u306b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u5168\u30d5\u30a1\u30a4\u30eb\u304c\u30b3\u30d4\u30fc\u3055\u308c\u307e\u3059\u3002 \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),' \u306b\u306f\u3001\u30b3\u30d4\u30fc\u3059\u3079\u304d\u30d5\u30a1\u30a4\u30eb\u3084\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u5217\u6319\u3059\u308b "files" \u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u542b\u3080\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002'))}m.isMDXComponent=!0}}]);