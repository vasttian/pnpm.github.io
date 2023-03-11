"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9119],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,v=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(v,a(a({ref:t},u),{},{components:n})):r.createElement(v,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(2962),i=n(2742),o=(n(9496),n(9613)),a=["components"],l={id:"audit",title:"pnpm audit"},p=void 0,s={unversionedId:"cli/audit",id:"cli/audit",title:"pnpm audit",description:"\u5728\u5df2\u5b89\u88dd\u7684\u5957\u4ef6\u4e2d\u6aa2\u67e5\u5df2\u77e5\u7684\u5b89\u5168\u6027\u554f\u984c\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/zh-TW/next/cli/audit",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/zh-TW",tags:[],version:"current",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"docs",previous:{title:"pnpm dedupe",permalink:"/zh-TW/next/cli/dedupe"},next:{title:"pnpm list",permalink:"/zh-TW/next/cli/list"}},u={},d=[{value:"\u9078\u9805",id:"\u9078\u9805",level:2},{value:"--audit-level &lt;severity&gt;",id:"--audit-level-severity",level:3},{value:"--fix",id:"--fix",level:3},{value:"--json",id:"--json",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--ignore-registry-errors",id:"--ignore-registry-errors",level:3}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u5df2\u5b89\u88dd\u7684\u5957\u4ef6\u4e2d\u6aa2\u67e5\u5df2\u77e5\u7684\u5b89\u5168\u6027\u554f\u984c\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u6709\u767c\u73fe\u5b89\u5168\u6027\u554f\u984c\uff0c\u8acb\u5617\u8a66\u900f\u904e ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm update")," \u4f86\u66f4\u65b0\u60a8\u7684\u5957\u4ef6\u3002 \u5982\u679c\u7c21\u55ae\u7684\u66f4\u65b0\u6c92\u6709\u8fa6\u6cd5\u89e3\u6c7a\u6240\u6709\u554f\u984c\uff0c\u8acb\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/zh-TW/next/package_json#pnpmoverrides"},"overrides")," \u4f86\u5f37\u5236\u66f4\u65b0\u4e0d\u6613\u53d7\u653b\u64ca\u7684\u7248\u672c\u3002 \u4f8b\u5982\uff0c\u82e5 ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash@<2.1.0")," \u5df2\u5bb9\u6613\u53d7\u5230\u653b\u64ca\uff0c\u53ef\u4f7f\u7528 overrides \u5f37\u5236\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash@^2.1.0")," \uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "pnpm": {\n        "overrides": {\n            "lodash@<2.1.0": "^2.1.0"\n        }\n    }\n}\n')),(0,o.kt)("p",null,"\u6216\u662f\uff0c\u57f7\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm audit --fix"),"\u3002"),(0,o.kt)("p",null,"If you want to tolerate some vulnerabilities as they don't affect your project, you may use the ",(0,o.kt)("a",{parentName:"p",href:"/zh-TW/next/package_json#pnpmauditconfigignorecves"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm.auditConfig.ignoreCves"))," setting."),(0,o.kt)("h2",{id:"\u9078\u9805"},"\u9078\u9805"),(0,o.kt)("h3",{id:"--audit-level-severity"},"--audit-level ","<","severity",">"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u578b\u614b\uff1a ",(0,o.kt)("strong",{parentName:"li"},"low"),", ",(0,o.kt)("strong",{parentName:"li"},"moderate"),", ",(0,o.kt)("strong",{parentName:"li"},"high"),", ",(0,o.kt)("strong",{parentName:"li"},"critical")),(0,o.kt)("li",{parentName:"ul"},"\u9810\u8a2d\uff1a ",(0,o.kt)("strong",{parentName:"li"},"low"))),(0,o.kt)("p",null,"Only print advisories with severity greater than or equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"<severity>"),"."),(0,o.kt)("h3",{id:"--fix"},"--fix"),(0,o.kt)("p",null,"Add overrides to the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file in order to force non-vulnerable versions of the dependencies."),(0,o.kt)("h3",{id:"--json"},"--json"),(0,o.kt)("p",null,"Output audit report in JSON format."),(0,o.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,o.kt)("p",null,"Only audit dev dependencies."),(0,o.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,o.kt)("p",null,"Only audit production dependencies."),(0,o.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,o.kt)("p",null,"Don't audit ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,o.kt)("h3",{id:"--ignore-registry-errors"},"--ignore-registry-errors"),(0,o.kt)("p",null,"If the registry responds with a non-200 status code, the process should exit with 0. So the process will fail only if the registry actually successfully responds with found vulnerabilities."))}m.isMDXComponent=!0}}]);