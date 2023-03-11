"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[958],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=r.createContext({}),d=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,a=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(n),v=l,m=s["".concat(a,".").concat(v)]||s[v]||c[v]||i;return n?r.createElement(m,p(p({ref:t},u),{},{components:n})):r.createElement(m,p({ref:t},u))}));function v(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,p=new Array(i);p[0]=s;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:l,p[1]=o;for(var d=2;d<i;d++)p[d]=n[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>v,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=n(2962),l=n(2742),i=(n(9496),n(9613)),p=["components"],o={id:"list",title:"pnpm list"},a=void 0,d={unversionedId:"cli/list",id:"version-7.x/cli/list",title:"pnpm list",description:"\u0410\u043b\u0438\u0430\u0441\u044b: ls",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-7.x/cli/list.md",sourceDirName:"cli",slug:"/cli/list",permalink:"/ru/cli/list",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ru",tags:[],version:"7.x",frontMatter:{id:"list",title:"pnpm list"},sidebar:"version-7.x/docs",previous:{title:"pnpm audit",permalink:"/ru/cli/audit"},next:{title:"pnpm outdated",permalink:"/ru/cli/outdated"}},u={},c=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--json",id:"--json",level:3},{value:"--long",id:"--long",level:3},{value:"--parseable",id:"--parseable",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--depth &lt;\u0447\u0438\u0441\u043b\u043e&gt;",id:"--depth-\u0447\u0438\u0441\u043b\u043e",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--only-projects",id:"--only-projects",level:3},{value:"--filter &lt;\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430&gt;",id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430",level:3}],s={toc:c};function v(e){var t=e.components,n=(0,l.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u0410\u043b\u0438\u0430\u0441\u044b: ",(0,i.kt)("inlineCode",{parentName:"p"},"ls")),(0,i.kt)("p",null,"\u042d\u0442\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0432\u044b\u0432\u0435\u0434\u0435\u0442 \u0432 \u0432\u0438\u0434\u0435 \u0434\u0435\u0440\u0435\u0432\u0430 \u0432\u0441\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u043f\u0430\u043a\u0435\u0442\u043e\u0432, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0438\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438."),(0,i.kt)("p",null,"\u041f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u2014 \u044d\u0442\u043e \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b ",(0,i.kt)("inlineCode",{parentName:"p"},"name-pattern@version-range"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0432\u0430\u044e\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043f\u0430\u043a\u0435\u0442\u0430. \u0414\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u0440\u0430, ",(0,i.kt)("inlineCode",{parentName:"p"},'pnpm list "babel-*" "eslint-*" semver@5'),"."),(0,i.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430 \u0432 \u043f\u043e\u0434\u043f\u0430\u043f\u043a\u0430\u0445, \u0438\u043b\u0438 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441-\u043f\u0430\u043a\u0435\u0442\u0430, \u0435\u0441\u043b\u0438 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u0430 \u0438\u0437 \u043f\u043e\u0434 \u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0430."),(0,i.kt)("h3",{id:"--json"},"--json"),(0,i.kt)("p",null,"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u044b\u0432\u043e\u0434 \u0432 JSON \u0444\u043e\u0440\u043c\u0430\u0442\u0435."),(0,i.kt)("h3",{id:"--long"},"--long"),(0,i.kt)("p",null,"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e."),(0,i.kt)("h3",{id:"--parseable"},"--parseable"),(0,i.kt)("p",null,"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u044b\u0432\u043e\u0434 \u0432 \u0432\u0438\u0434\u0435 \u0441\u043f\u0438\u0441\u043a\u0430 \u043f\u0430\u043f\u043e\u043a \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0432 \u0443\u0434\u043e\u0431\u043d\u043e\u043c \u0434\u043b\u044f \u043f\u0430\u0440\u0441\u0438\u043d\u0433\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u0435, \u0432\u043c\u0435\u0441\u0442\u043e \u043a\u0440\u0430\u0441\u0438\u0432\u043e\u0433\u043e \u0432\u044b\u0432\u043e\u0434\u0430 \u0432 \u0432\u0438\u0434\u0435 \u0434\u0435\u0440\u0435\u0432\u0430."),(0,i.kt)("h3",{id:"--global--g"},"--global, -g"),(0,i.kt)("p",null,"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u0432\u043c\u0435\u0441\u0442\u043e \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435."),(0,i.kt)("h3",{id:"--depth-\u0447\u0438\u0441\u043b\u043e"},"--depth ","<","\u0447\u0438\u0441\u043b\u043e",">"),(0,i.kt)("p",null,"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0433\u043b\u0443\u0431\u0438\u043d\u0430 \u043f\u043e\u043a\u0430\u0437\u0430 \u0434\u0435\u0440\u0435\u0432\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth 0")," \u0432\u044b\u0432\u0435\u0434\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u044f\u043c\u044b\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439. ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth -1")," \u0432\u044b\u0432\u0435\u0434\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432. \u0423\u0434\u043e\u0431\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0435, \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u043d\u043e \u0441 \u043e\u043f\u0446\u0438\u0435\u0439 ",(0,i.kt)("inlineCode",{parentName:"p"},"-r"),"."),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0434\u0435\u0440\u0435\u0432\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0438\u0437 ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0434\u0435\u0440\u0435\u0432\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0438\u0437 ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,"\u041d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u0430\u043a\u0435\u0442\u044b \u0438\u0437 ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--only-projects"},"--only-projects"),(0,i.kt)("p",null,"Added in: v7.22.0"),(0,i.kt)("p",null,"Display only dependencies that are also projects within the workspace."),(0,i.kt)("h3",{id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430"},"--filter ","<","\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ru/filtering"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438.")))}v.isMDXComponent=!0}}]);