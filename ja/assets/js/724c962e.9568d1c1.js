"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1120],{9613:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(9496);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var m=a.createContext({}),o=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},u=function(t){var e=o(t.components);return a.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=o(n),k=l,c=s["".concat(m,".").concat(k)]||s[k]||d[k]||r;return n?a.createElement(c,p(p({ref:e},u),{},{components:n})):a.createElement(c,p({ref:e},u))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,p=new Array(r);p[0]=s;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:l,p[1]=i;for(var o=2;o<r;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},344:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>m,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(2962),l=n(2742),r=(n(9496),n(9613)),p=["components"],i={id:"installation",title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},m=void 0,o={unversionedId:"installation",id:"version-6.x/installation",title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",description:"\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-6.x/installation.md",sourceDirName:".",slug:"/installation",permalink:"/ja/6.x/installation",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ja",tags:[],version:"6.x",frontMatter:{id:"installation",title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},sidebar:"version-6.x/docs",previous:{title:"\u30e2\u30c1\u30d9\u30fc\u30b7\u30e7\u30f3",permalink:"/ja/6.x/motivation"},next:{title:"pnpm CLI",permalink:"/ja/6.x/pnpm-cli"}},u={},d=[{value:"\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528",id:"\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528",level:2},{value:"Node.js \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408",id:"nodejs-\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408",level:3},{value:"Node.js \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408",id:"nodejs-\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408",level:3},{value:"Homebrew \u3092\u4f7f\u7528",id:"homebrew-\u3092\u4f7f\u7528",level:2},{value:"Scoop \u3092\u4f7f\u7528",id:"scoop-\u3092\u4f7f\u7528",level:2},{value:"Corepack\u306e\u4f7f\u7528",id:"corepack\u306e\u4f7f\u7528",level:2},{value:"npm \u3092\u4f7f\u7528",id:"npm-\u3092\u4f7f\u7528",level:2},{value:"npx \u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u89e3\u6c7a\u3092\u4f7f\u7528",id:"npx-\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u89e3\u6c7a\u3092\u4f7f\u7528",level:2},{value:"\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9",id:"\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9",level:2},{value:"\u4e92\u63db\u6027",id:"\u4e92\u63db\u6027",level:2},{value:"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0",id:"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0",level:2},{value:"pnpm\u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"pnpm\u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:2}],s={toc:d};function k(t){var e=t.components,n=(0,l.Z)(t,p);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528"},"\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528"),(0,r.kt)("h3",{id:"nodejs-\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408"},"Node.js \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408"),(0,r.kt)("p",null,"POSIX\u30b7\u30b9\u30c6\u30e0\u3067\u306f\u3001Node.js\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3067\u3082\u3001\u6b21\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528\u3057\u3066pnpm\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | PNPM_VERSION=6.32.11 sh -\n")),(0,r.kt)("p",null,"curl\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001wget\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | PNPM_VERSION=6.32.11 sh -\n")),(0,r.kt)("p",null,"Windows (PowerShell) \u306e\u5834\u5408\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"$env:PNPM_VERSION='6.32.11' ; iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ja/6.x/cli/env"},"pnpm env")," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066 Node.js \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"nodejs-\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408"},"Node.js \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408"),(0,r.kt)("p",null,"Linux\u307e\u305f\u306fmacOS\u306e\u5834\u5408\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@latest-6\n")),(0,r.kt)("p",null,"Windows (PowerShell) \u306e\u5834\u5408\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Invoke-WebRequest 'https://get.pnpm.io/v6.16.js' -UseBasicParsing -o pnpm.js; node pnpm.js add --global pnpm@6.32.11; Remove-Item pnpm.js\n")),(0,r.kt)("p",null,"\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u7f72\u540d\u3055\u308c\u3066\u3044\u307e\u3059\u3002 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/get#verifying-files"},"\u3053\u3061\u3089\u304b\u3089\u691c\u8a3c\u65b9\u6cd5\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002")),(0,r.kt)("h2",{id:"homebrew-\u3092\u4f7f\u7528"},"Homebrew \u3092\u4f7f\u7528"),(0,r.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066pnpm\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,r.kt)("h2",{id:"scoop-\u3092\u4f7f\u7528"},"Scoop \u3092\u4f7f\u7528"),(0,r.kt)("p",null,"Scoop \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066pnpm\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,r.kt)("h2",{id:"corepack\u306e\u4f7f\u7528"},"Corepack\u306e\u4f7f\u7528"),(0,r.kt)("p",null,"Node.js\u3067\u306fv16.13\u4ee5\u964d\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306b ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack"),"\u306e\u63d0\u4f9b\u3092\u59cb\u3081\u307e\u3057\u305f\u3002 \u3053\u308c\u306f\u5b9f\u9a13\u7684\u306a\u6a5f\u80fd\u3067\u3042\u308b\u305f\u3081\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u6709\u52b9\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,r.kt)("p",null,"\u3053\u308c\u306b\u3088\u308a\u3001\u30b7\u30b9\u30c6\u30e0\u306bpnpm\u304c\u81ea\u52d5\u7684\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002 \u305f\u3060\u3057\u3001\u304a\u305d\u3089\u304fpnpm\u306e\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u3067\u306f\u306a\u3044\u3067\u3057\u3087\u3046\u3002 \u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u306b\u306f\u3001\u6700\u65b0\u306epnpm\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u78ba\u8a8d\u3057\u3066\u4ee5\u4e0b\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack prepare pnpm@6.32.11 --activate\n")),(0,r.kt)("h2",{id:"npm-\u3092\u4f7f\u7528"},"npm \u3092\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm@latest-6\n")),(0,r.kt)("h2",{id:"npx-\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u89e3\u6c7a\u3092\u4f7f\u7528"},"npx \u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u89e3\u6c7a\u3092\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx pnpm add -g pnpm\n")),(0,r.kt)("h2",{id:"\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9"},"\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9"),(0,r.kt)("p",null,"\u4e00\u5ea6 pnpm \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308c\u3070\u3001\u4ed6\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u3092\u4f7f\u3063\u3066\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002 pnpm \u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u306f\u3001\u3053\u306e\u3088\u3046\u306b pnpm \u81ea\u4f53\u3092\u7528\u3044\u3066\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -g pnpm\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"CI\u30b5\u30fc\u30d0\u3067pnpm\u3092\u4f7f\u3044\u305f\u3044\u3067\u3059\u304b\uff1f \u3053\u3061\u3089\u3092\u3054\u89a7\u304f\u3060\u3055\u3044: ",(0,r.kt)("a",{parentName:"p",href:"/ja/6.x/continuous-integration"},"Continuous Integration"))),(0,r.kt)("h2",{id:"\u4e92\u63db\u6027"},"\u4e92\u63db\u6027"),(0,r.kt)("p",null,"\u3053\u308c\u307e\u3067\u306epnpm\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u3001\u305d\u308c\u305e\u308c\u306eNode.js\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5bfe\u5fdc\u72b6\u6cc1\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 1"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 2"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 3"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 6"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,r.kt)("h2",{id:"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0"},"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0"),(0,r.kt)("p",null,"pnpm \u304c\u58ca\u308c\u3066\u3044\u3066\u3001\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3082\u4fee\u6b63\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u3001PATH \u304b\u3089\u624b\u52d5\u3067\u524a\u9664\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u3092\u5b9f\u884c\u3057\u3066\u3044\u308b\u3068\u304d\u306b\u3001\u6b21\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u3068\u3057\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,r.kt)("p",null,"\u307e\u305a\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"which pnpm")," \u3092\u5b9f\u884c\u3057\u3066\u3001pnpm \u304c\u3069\u3053\u306b\u3042\u308b\u304b\u63a2\u3057\u3066\u304f\u3060\u3055\u3044\u3002 Windows \u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001Git Bash \u3067\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 \u4f8b\u3048\u3070\u6b21\u306e\u3088\u3046\u306b\u3001 pnpm \u30b3\u30de\u30f3\u30c9\u306e\u5834\u6240\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,r.kt)("p",null,"\u3053\u308c\u3067\u3001 pnpm \u306e CLI \u304c\u3069\u3053\u306b\u3042\u308b\u304b\u304c\u5206\u304b\u308a\u307e\u3057\u305f\u3002\u305d\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u958b\u304d\u3001 pnpm \u95a2\u9023\u30d5\u30a1\u30a4\u30eb (",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm")," \u306a\u3069) \u3092\u524a\u9664\u3057\u307e\u3059\u3002 \u5b8c\u4e86\u3057\u305f\u3089\u3001pnpm \u3092\u518d\u5ea6\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3068\u3001\u671f\u5f85\u3069\u304a\u308a\u306b\u52d5\u4f5c\u3059\u308b\u306f\u305a\u3067\u3059\u3002"),(0,r.kt)("h2",{id:"pnpm\u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"},"pnpm\u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"),(0,r.kt)("p",null,"pnpm \u306e CLI \u3092\u30b7\u30b9\u30c6\u30e0\u304b\u3089\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u30c7\u30a3\u30b9\u30af\u306b\u3042\u308b\u95a2\u9023\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u3092\u524a\u9664\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/ja/6.x/uninstall"},"pnpm \u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}k.isMDXComponent=!0}}]);