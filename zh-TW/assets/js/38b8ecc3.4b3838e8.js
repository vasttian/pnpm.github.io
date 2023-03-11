"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3494],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||l;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(2962),a=n(2742),l=(n(9496),n(9613)),o=["components"],i={id:"outdated",title:"pnpm outdated"},p=void 0,c={unversionedId:"cli/outdated",id:"version-7.x/cli/outdated",title:"pnpm outdated",description:"\u6aa2\u67e5\u662f\u5426\u6709\u904e\u6642\u7684\u76f8\u4f9d\u5957\u4ef6\u3002 \u6b64\u547d\u4ee4\u53ef\u4ee5\u901a\u904e\u63d0\u4f9b\u53c3\u6578\u4f86\u9650\u5236\u70ba\u5df2\u5b89\u88dd  packages \u7684\u4e00\u500b\u5b50\u96c6(\u652f\u6301  patterns )\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-7.x/cli/outdated.md",sourceDirName:"cli",slug:"/cli/outdated",permalink:"/zh-TW/cli/outdated",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/zh-TW",tags:[],version:"7.x",frontMatter:{id:"outdated",title:"pnpm outdated"},sidebar:"version-7.x/docs",previous:{title:"pnpm list",permalink:"/zh-TW/cli/list"},next:{title:"pnpm why",permalink:"/zh-TW/cli/why"}},d={},u=[{value:"\u53c3\u6578",id:"\u53c3\u6578",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--long",id:"--long",level:3},{value:"--format &lt;format&gt;",id:"--format-format",level:3},{value:"--compatible",id:"--compatible",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--no-optional",id:"--no-optional",level:3}],s={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6aa2\u67e5\u662f\u5426\u6709\u904e\u6642\u7684\u76f8\u4f9d\u5957\u4ef6\u3002 \u6b64\u547d\u4ee4\u53ef\u4ee5\u901a\u904e\u63d0\u4f9b\u53c3\u6578\u4f86\u9650\u5236\u70ba\u5df2\u5b89\u88dd ",(0,l.kt)("inlineCode",{parentName:"p"},"packages"),"\u7684\u4e00\u500b\u5b50\u96c6(\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"patterns"),")\u3002"),(0,l.kt)("p",null,"\u7bc4\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm outdated\npnpm outdated "*gulp-*" @babel/core\n')),(0,l.kt)("h2",{id:"\u53c3\u6578"},"\u53c3\u6578"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"\u5728\u767c\u73fe\u7684\u6240\u6709\u5b50\u8cc7\u6599\u593e ",(0,l.kt)("inlineCode",{parentName:"p"},"package")," \u4e2d\uff0c\u6216\u8005\u5982\u679c\u5728\u4e00\u500b workspace \u4e2d\u57f7\u884c\u6642\uff0c\u5728 workspace \u7684\u6240\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"package")," \u4e2d\u6aa2\u67e5\u904e\u671f\u4f9d\u8cf4\u3002"),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh-TW/filtering"},"\u95b1\u8b80\u66f4\u591a\u95dc\u65bc filter \u7684\u8cc7\u8a0a\u3002")),(0,l.kt)("h3",{id:"--global--g"},"--global, -g"),(0,l.kt)("p",null,"\u5217\u51fa\u904e\u6642\u7684\u5168\u57df\u5957\u4ef6\u3002"),(0,l.kt)("h3",{id:"--long"},"--long"),(0,l.kt)("p",null,"\u5217\u5370\u8a73\u7d30\u8cc7\u8a0a\u3002"),(0,l.kt)("h3",{id:"--format-format"},"--format ","<","format",">"),(0,l.kt)("p",null,"Added in: v7.15.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"table")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"table"),", ",(0,l.kt)("strong",{parentName:"li"},"list"),", ",(0,l.kt)("strong",{parentName:"li"},"json"))),(0,l.kt)("p",null,"Prints the outdtaed dependencies in the given format."),(0,l.kt)("h3",{id:"--compatible"},"--compatible"),(0,l.kt)("p",null,"Prints only versions that satisfy specifications in ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"Checks only ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"Checks only ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,l.kt)("p",null,"Doesn't check ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."))}m.isMDXComponent=!0}}]);