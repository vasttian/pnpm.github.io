"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4488],{9613:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>s});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},k=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),u=o(n),s=r,c=u["".concat(d,".").concat(s)]||u[s]||m[s]||l;return n?a.createElement(c,p(p({ref:t},k),{},{components:n})):a.createElement(c,p({ref:t},k))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var o=2;o<l;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>d,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(2962),r=n(2742),l=(n(9496),n(9613)),p=["components"],i={id:"add",title:"pnpm add <\u043f\u0430\u043a\u0435\u0442>"},d=void 0,o={unversionedId:"cli/add",id:"cli/add",title:"pnpm add <\u043f\u0430\u043a\u0435\u0442>",description:"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u043f\u0430\u043a\u0435\u0442 \u0438 \u0432\u0441\u0435 \u0435\u0433\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043b\u044e\u0431\u043e\u0439 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u043a\u0435\u0442 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a production \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/cli/add.md",sourceDirName:"cli",slug:"/cli/add",permalink:"/ru/next/cli/add",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ru",tags:[],version:"current",frontMatter:{id:"add",title:"pnpm add <\u043f\u0430\u043a\u0435\u0442>"},sidebar:"docs",previous:{title:"\u0421\u043a\u0440\u0438\u043f\u0442\u044b",permalink:"/ru/next/scripts"},next:{title:"pnpm install",permalink:"/ru/next/cli/install"}},k={},m=[{value:"TL;DR",id:"tldr",level:2},{value:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438 \u043f\u0430\u043a\u0435\u0442\u043e\u0432",id:"\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435-\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438-\u043f\u0430\u043a\u0435\u0442\u043e\u0432",level:2},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u0437 npm \u0440\u0435\u0435\u0441\u0442\u0440\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c-\u0438\u0437-npm-\u0440\u0435\u0435\u0441\u0442\u0440\u0430",level:3},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u0437 \u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c-\u0438\u0437-\u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0430",level:3},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u0437 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c-\u0438\u0437-\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0439-\u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439-\u0441\u0438\u0441\u0442\u0435\u043c\u044b",level:3},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u0437 \u0430\u0440\u0445\u0438\u0432\u0430 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c-\u0438\u0437-\u0430\u0440\u0445\u0438\u0432\u0430-\u043f\u043e-\u0441\u0441\u044b\u043b\u043a\u0435",level:3},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u0437 Git \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c-\u0438\u0437-git-\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f",level:3},{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"--save-prod, -P",id:"--save-prod--p",level:3},{value:"--save-dev, -D",id:"--save-dev--d",level:3},{value:"--save-optional, -O",id:"--save-optional--o",level:3},{value:"--save-exact, -E",id:"--save-exact--e",level:3},{value:"--save-peer",id:"--save-peer",level:3},{value:"--ignore-workspace-root-check",id:"--ignore-workspace-root-check",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--filter &lt;\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430&gt;",id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430",level:3}],u={toc:m};function s(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u043f\u0430\u043a\u0435\u0442 \u0438 \u0432\u0441\u0435 \u0435\u0433\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043b\u044e\u0431\u043e\u0439 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u043a\u0435\u0442 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a production \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c."),(0,l.kt)("h2",{id:"tldr"},"TL;DR"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u041a\u043e\u043c\u0430\u043d\u0434\u0430"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432 ",(0,l.kt)("inlineCode",{parentName:"td"},"dependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add -D sax")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432 ",(0,l.kt)("inlineCode",{parentName:"td"},"devDependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add -O sax")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432 ",(0,l.kt)("inlineCode",{parentName:"td"},"optionalDependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add -g sax")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax@next")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u0437 \u0442\u0435\u0433\u0430 ",(0,l.kt)("inlineCode",{parentName:"td"},"next"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0435\u0440\u0441\u0438\u044e ",(0,l.kt)("inlineCode",{parentName:"td"},"3.0.0"))))),(0,l.kt)("h2",{id:"\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435-\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438-\u043f\u0430\u043a\u0435\u0442\u043e\u0432"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438 \u043f\u0430\u043a\u0435\u0442\u043e\u0432"),(0,l.kt)("h3",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c-\u0438\u0437-npm-\u0440\u0435\u0435\u0441\u0442\u0440\u0430"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u0437 npm \u0440\u0435\u0435\u0441\u0442\u0440\u0430"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add \u0438\u043c\u044f-\u043f\u0430\u043a\u0435\u0442\u0430")," \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u0432\u0435\u0440\u0441\u0438\u044e ",(0,l.kt)("inlineCode",{parentName:"p"},"\u0438\u043c\u044f-\u043f\u0430\u043a\u0435\u0442\u0430")," \u0441 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm \u0440\u0435\u0435\u0441\u0442\u0440\u0430")," \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0432 \u0440\u0430\u0431\u043e\u0447\u0435\u043c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435 (\u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0435), \u043e\u043d\u0430 \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u043f\u043e\u043f\u044b\u0442\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u043b\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u0432 \u0440\u0430\u0431\u043e\u0447\u0435\u043c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435 (\u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0435) \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u043f\u0430\u043a\u0435\u0442. \u0415\u0441\u043b\u0438 \u0434\u0430, \u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0430 \u0432\u0435\u0440\u0441\u0438\u044f \u0438\u0437 \u0443\u0436\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0433\u043e \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430 \u0432\u0435\u0440\u0441\u0438\u0439."),(0,l.kt)("p",null,"\u0412\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u043f\u0430\u043a\u0435\u0442\u044b \u0442\u0430\u043a\u0438\u043c\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0442\u0435\u0433: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),(0,l.kt)("li",{parentName:"ul"},"\u0432\u0435\u0440\u0441\u0438\u044f: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),(0,l.kt)("li",{parentName:"ul"},"\u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0432\u0435\u0440\u0441\u0438\u0439: ",(0,l.kt)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">=0.1.0 <0.2.0"'))),(0,l.kt)("h3",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c-\u0438\u0437-\u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0430"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u0437 \u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0430"),(0,l.kt)("p",null,"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0438 \u0440\u0430\u0431\u043e\u0442\u0435 \u0432 ",(0,l.kt)("a",{parentName:"p",href:"/ru/next/workspaces"},"\u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0435"),", \u043f\u0430\u043a\u0435\u0442\u044b \u0431\u0443\u0434\u0443\u0442 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u0438\u0437 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0445 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u043e\u0432, \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0442\u043e\u0433\u043e, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0430 \u043b\u0438 \u043e\u043f\u0446\u0438\u044f ",(0,l.kt)("a",{parentName:"p",href:"/ru/next/workspaces#link-workspace-packages"},(0,l.kt)("inlineCode",{parentName:"a"},"link-workspace-packages"))," \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043b\u0438 ",(0,l.kt)("a",{parentName:"p",href:"/ru/next/workspaces#workspace-ranges-workspace"},(0,l.kt)("inlineCode",{parentName:"a"},"workspace: range protocol")),"."),(0,l.kt)("h3",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c-\u0438\u0437-\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0439-\u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439-\u0441\u0438\u0441\u0442\u0435\u043c\u044b"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u0437 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b"),(0,l.kt)("p",null,"\u0415\u0441\u0442\u044c \u0434\u0432\u0430 \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0438\u0437 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u0438\u0437 \u0430\u0440\u0445\u0438\u0432\u0430 (",(0,l.kt)("inlineCode",{parentName:"li"},".tar"),", ",(0,l.kt)("inlineCode",{parentName:"li"},".tar.gz"),", \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},".tgz"),")"),(0,l.kt)("li",{parentName:"ol"},"\u0438\u0437 \u043f\u0430\u043f\u043a\u0438")),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440\u044b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tar.gz\npnpm add ./some-directory\n")),(0,l.kt)("p",null,"\u041f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u0438\u0437 \u043f\u0430\u043f\u043a\u0438, \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d\u0430 \u0441\u0438\u043c\u0432\u043e\u043b\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430 \u0432 ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u044d\u0442\u043e \u0442\u043e\u0436\u0435 \u0441\u0430\u043c\u043e\u0435 \u0447\u0442\u043e \u0438 \u0437\u0430\u043f\u0443\u0441\u043a \u043a\u043e\u043c\u0430\u043d\u0434\u044b ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm link"),"."),(0,l.kt)("h3",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c-\u0438\u0437-\u0430\u0440\u0445\u0438\u0432\u0430-\u043f\u043e-\u0441\u0441\u044b\u043b\u043a\u0435"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u0437 \u0430\u0440\u0445\u0438\u0432\u0430 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435"),(0,l.kt)("p",null,'\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u043c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c URL-\u0430\u0434\u0440\u0435\u0441, \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0439\u0441\u044f \u0441 "http://" \u0438\u043b\u0438 "https://".'),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),(0,l.kt)("h3",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c-\u0438\u0437-git-\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u0437 Git \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add <\u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 git \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439>\n")),(0,l.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u043f\u0430\u043a\u0435\u0442 \u0438\u0437 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430 Git \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f, \u043a\u043b\u043e\u043d\u0438\u0440\u0443\u044f \u0435\u0433\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e git. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u044b \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 Git \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u043e\u0432. \u041f\u0440\u0438\u043c\u0435\u0440 \u0434\u043b\u044f GitHub, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add github:user/repo")),(0,l.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u0437 Git \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u043a\u043e\u043c\u043c\u0438\u0442 \u0438\u0437 \u043c\u0430\u0441\u0442\u0435\u0440\u0430: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),(0,l.kt)("li",{parentName:"ul"},"\u043a\u043e\u043c\u043c\u0438\u0442: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),(0,l.kt)("li",{parentName:"ul"},"\u0432\u0435\u0442\u043a\u0430: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#master")),(0,l.kt)("li",{parentName:"ul"},"\u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0432\u0435\u0440\u0441\u0438\u0439: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#semver: ^ 2.0.0"))),(0,l.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,l.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,l.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u044b \u043a\u0430\u043a ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,l.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,l.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u044b \u043a\u0430\u043a ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,l.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,l.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u044b \u043a\u0430\u043a ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--save-exact--e"},"--save-exact, -E"),(0,l.kt)("p",null,"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0431\u0443\u0434\u0443\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u044b \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0442\u043e\u0447\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438, \u0430 \u043d\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430 semver, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,l.kt)("h3",{id:"--save-peer"},"--save-peer"),(0,l.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"--save-peer"),", \u043c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0434\u0438\u043d \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u043a ",(0,l.kt)("inlineCode",{parentName:"p"},"peerDependencies")," \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u0445 \u043a\u0430\u043a dev \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438."),(0,l.kt)("h3",{id:"--ignore-workspace-root-check"},"--ignore-workspace-root-check"),(0,l.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0439 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043a \u043a\u043e\u0440\u043d\u0435\u0432\u043e\u043c\u0443 \u043f\u0430\u043a\u0435\u0442\u0443 \u0440\u0430\u0431\u043e\u0447\u0435\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0441\u044f \u043d\u0435\u0443\u0434\u0430\u0447\u043d\u043e, \u0435\u0441\u043b\u0438 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0444\u043b\u0430\u0433 ",(0,l.kt)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"-w"),"."),(0,l.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add debug -w"),"."),(0,l.kt)("h3",{id:"--global--g"},"--global, -g"),(0,l.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u043a\u0435\u0442 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e."),(0,l.kt)("h3",{id:"--workspace"},"--workspace"),(0,l.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c, \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u043e\u043d\u0430 \u043d\u0430\u0439\u0434\u0435\u043d\u0430 \u0432 \u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0435."),(0,l.kt)("h3",{id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430"},"--filter ","<","\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ru/next/filtering"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438.")))}s.isMDXComponent=!0}}]);