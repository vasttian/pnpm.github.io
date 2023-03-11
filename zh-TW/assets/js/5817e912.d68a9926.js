"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6112],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var a=n(2962),r=n(2742),o=(n(9496),n(9613)),l=["components"],p={title:"Pnpm \u7684 Node-Modules \u8a2d\u5b9a\u9078\u9805",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},i=void 0,u={permalink:"/zh-TW/blog/2020/10/17/node-modules-configuration-options-with-pnpm",editUrl:"https://translate.pnpm.io/project/pnpm/zh-TW",source:"@site/i18n/zh-TW/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md",title:"Pnpm \u7684 Node-Modules \u8a2d\u5b9a\u9078\u9805",description:"\u6709\u5f88\u591a\u65b9\u6cd5\u53ef\u4ee5\u5275\u5efa nodemodules \u76ee\u9304\u3002 \u76ee\u6a19\u4e00\u5b9a\u662f\u5275\u5efa\u6700\u56b4\u683c\u7684 nodemodules\uff0c\u4f46\u5982\u679c\u90a3\u4e0d\u53ef\u80fd\u7684\u8a71\uff0c\u4e5f\u6709\u9078\u9805\u8b93\u60a8\u53ef\u4ee5\u7522\u751f\u4e00\u500b\u9b06\u6563\u7684 node_modules\u3002",date:"2020-10-17T00:00:00.000Z",formattedDate:"2020\u5e7410\u670817\u65e5",tags:[],readingTime:2.965,hasTruncateMarker:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"Pnpm \u7684 Node-Modules \u8a2d\u5b9a\u9078\u9805",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},prevItem:{title:"2021 \u5e74\u7684 pnpm",permalink:"/zh-TW/blog/2021/12/29/yearly-update"},nextItem:{title:"\u5e73\u9762\u5316node_module\u4e0d\u6703\u662f\u552f\u4e00\u7684\u65b9\u6cd5",permalink:"/zh-TW/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},c={authorsImageUrls:[void 0]},m=[{value:"\u9810\u8a2d\u8a2d\u5b9a",id:"\u9810\u8a2d\u8a2d\u5b9a",level:2},{value:"Plug&#39;n&#39;Play\uff0d \u6700\u56b4\u683c\u7684\u8a2d\u5b9a",id:"plugnplay-\u6700\u56b4\u683c\u7684\u8a2d\u5b9a",level:2},{value:"\u4e00\u500b\u56b4\u683c\uff0c\u50b3\u7d71\u7684\u6a21\u7d44\u76ee\u9304",id:"\u4e00\u500b\u56b4\u683c\u50b3\u7d71\u7684\u6a21\u7d44\u76ee\u9304",level:2},{value:"\u6700\u4e0d\u597d\u7684\u60c5\u6cc1\uff0d\u63d0\u5347\u6240\u6709\u6771\u897f\u81f3\u6839\u76ee\u9304",id:"\u6700\u4e0d\u597d\u7684\u60c5\u6cc1\u63d0\u5347\u6240\u6709\u6771\u897f\u81f3\u6839\u76ee\u9304",level:2}],s={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6709\u5f88\u591a\u65b9\u6cd5\u53ef\u4ee5\u5275\u5efa node_modules \u76ee\u9304\u3002 \u76ee\u6a19\u4e00\u5b9a\u662f\u5275\u5efa\u6700\u56b4\u683c\u7684 node_modules\uff0c\u4f46\u5982\u679c\u90a3\u4e0d\u53ef\u80fd\u7684\u8a71\uff0c\u4e5f\u6709\u9078\u9805\u8b93\u60a8\u53ef\u4ee5\u7522\u751f\u4e00\u500b\u9b06\u6563\u7684 node_modules\u3002"),(0,o.kt)("h2",{id:"\u9810\u8a2d\u8a2d\u5b9a"},"\u9810\u8a2d\u8a2d\u5b9a"),(0,o.kt)("p",null,"\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c pnpm \u7b2c\u4e94\u7248\u6703\u5275\u5efa\u4e00\u500b\u534a\u56b4\u683c\u7684 node_modules \u8cc7\u6599\u593e\u3002 \u300c\u534a\u56b4\u683c\u300d\u610f\u601d\u662f\u60a8\u7684\u61c9\u7528\u7a0b\u5f0f\u53ea\u80fd\u532f\u5165\u65b0\u589e\u81f3 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u7684\u4f9d\u8cf4\u5957\u4ef6\uff08\u7576\u7136\u4e5f\u6709\u4e00\u4e9b\u4f8b\u5916\uff09\u3002 \u4e0d\u904e\u9019\u6a23\u7684\u8a71\uff0c\u60a8\u7684\u4f9d\u8cf4\u5957\u4ef6\u5c07\u80fd\u5b58\u53d6\u4efb\u4f55\u5957\u4ef6\u3002"),(0,o.kt)("p",null,"\u9810\u8a2d\u7684\u8a2d\u5b9a\u770b\u8d77\u4f86\u50cf\u9019\u6a23\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},";\u5c07\u6240\u6709\u6a21\u7d44\u90fd\u63d0\u5347\u81f3 node_modules/.pnpm/node_modules\nhoist-pattern[]=*\n\n;\u5c07\u6240\u6709\u578b\u5225\u5ba3\u544a\u63d0\u5347\u81f3\u6839\u76ee\u9304\u4ee5\u8b93 TypeScript \u80fd\u627e\u5230\npublic-hoist-pattern[]=*types*\n\n;\u5c07\u6240\u6709\u8207ESLint\u76f8\u95dc\u7684\u6a21\u7d44\u63d0\u5347\u81f3\u6839\u76ee\u9304\npublic-hoist-pattern[]=*eslint*\n")),(0,o.kt)("h2",{id:"plugnplay-\u6700\u56b4\u683c\u7684\u8a2d\u5b9a"},"Plug'n'Play\uff0d \u6700\u56b4\u683c\u7684\u8a2d\u5b9a"),(0,o.kt)("p",null,"pnpm \u5f9e 5.9 \u7248\u958b\u59cb\u652f\u63f4 ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com/features/pnp"},"Yarn \u7684 Plug'n'Play")," \u3002 \u7576\u4f7f\u7528 PnP \u6642\uff0c\u60a8\u7684\u61c9\u7528\u7a0b\u5f0f\u548c\u5176\u4f9d\u8cf4\u5957\u4ef6\u5c07\u53ea\u80fd\u5b58\u53d6\u5b83\u5011\u5ba3\u544a\u7684\u4f9d\u8cf4\u5957\u4ef6\u3002 \u9019\u6bd4\u8a2d\u5b9a ",(0,o.kt)("inlineCode",{parentName:"p"},"hoist=false")," \u9084\u8981\u56b4\u683c\uff0c\u56e0\u70ba\u5728 Monorepo \u4e2d\uff0c\u60a8\u7684\u61c9\u7528\u7a0b\u5f0f\u751a\u81f3\u7121\u6cd5\u5b58\u53d6\u6839\u5c08\u6848\u7684\u4f9d\u8cf4\u5957\u4ef6\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u8981\u4f7f\u7528 Plug'n'Play\uff0c\u8acb\u4f7f\u7528\u4ee5\u4e0b\u8a2d\u5b9a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"node-linker=pnp\nsymlink=false\n")),(0,o.kt)("h2",{id:"\u4e00\u500b\u56b4\u683c\u50b3\u7d71\u7684\u6a21\u7d44\u76ee\u9304"},"\u4e00\u500b\u56b4\u683c\uff0c\u50b3\u7d71\u7684\u6a21\u7d44\u76ee\u9304"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u9084\u6c92\u6709\u6e96\u5099\u597d\u8981\u4f7f\u7528 PnP\uff0c\u60a8\u4ecd\u7136\u53ef\u4ee5\u900f\u904e\u5c07\u4ee5\u4e0b\u8a2d\u5b9a\u8a2d\u5b9a\u70ba false \u4f86\u5141\u8a31\u6a21\u7d44\u53ea\u80fd\u5b58\u53d6\u81ea\u5df1\u7684\u4f9d\u8cf4\u6a21\u7d44\uff0c\u4ee5\u4fdd\u969c\u5176\u56b4\u683c\u6027\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"hoist=false\n")),(0,o.kt)("p",null,"\u4e0d\u904e\uff0c\u5982\u679c\u60a8\u7684\u4e00\u4e9b\u4f9d\u8cf4\u6a21\u7d44\u5617\u8a66\u5b58\u53d6\u6c92\u6709\u4f9d\u8cf4\u5957\u4ef6\u7684\u6a21\u7d44\uff0c\u60a8\u6709\u5169\u500b\u9078\u64c7\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5275\u5efa\u4e00\u500b ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpmfile.js")," \u6a94\u6848\u4e26\u4e14\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"/pnpmfile"},"\u9264\u5b50"),"\u5c07\u907a\u5931\u7684\u4f9d\u8cf4\u5957\u4ef6\u65b0\u589e\u81f3\u4f9d\u8cf4\u5957\u4ef6\u540d\u55ae\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5c07\u4e00\u7d44\u8868\u9054\u5f0f\u586b\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"hoist-pattern")," \u8a2d\u5b9a\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-core")," \u6a21\u7d44\u627e\u4e0d\u5230\uff0c\u8acb\u5c07\u4ee5\u4e0b\u8a2d\u5b9a\u52a0\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},".npmrc"),"\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"hoist-pattern[]=babel-core\n")))),(0,o.kt)("h2",{id:"\u6700\u4e0d\u597d\u7684\u60c5\u6cc1\u63d0\u5347\u6240\u6709\u6771\u897f\u81f3\u6839\u76ee\u9304"},"\u6700\u4e0d\u597d\u7684\u60c5\u6cc1\uff0d\u63d0\u5347\u6240\u6709\u6771\u897f\u81f3\u6839\u76ee\u9304"),(0,o.kt)("p",null,"\u4e00\u4e9b\u5de5\u5177\u53ef\u80fd\u5373\u4f7f\u4f7f\u7528 pnpm \u9810\u8a2d\u8a2d\u5b9a\u4e5f\u6c92\u8fa6\u6cd5\u6b63\u5e38\u57f7\u884c\uff0c\u56e0\u70bapnpm\u9810\u8a2d\u8a2d\u5b9a\u6703\u5c07\u6240\u6709\u6771\u897f\u63d0\u5347\u81f3\u6839\u76ee\u9304\u4e26\u5c07\u4e00\u4e9b\u6a21\u7d44\u63d0\u5347\u81f3\u6839\u76ee\u9304\u3002 \u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u60a8\u53ef\u4ee5\u9078\u64c7\u5c07\u6240\u6709\u6771\u897f\u6216\u8005\u90e8\u5206\u4f9d\u8cf4\u5957\u4ef6\u63d0\u5347\u81f3\u6839\u76ee\u9304\uff1a"),(0,o.kt)("p",null,"\u5c07\u6240\u6709\u9805\u76ee\u63d0\u5347\u5230 node_modules \u7684\u6839\u76ee\u9304:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"shamefully-hoist=true\n")),(0,o.kt)("p",null,"\u50c5\u63d0\u5347\u7b26\u5408\u4ee5\u4e0b\u8868\u9054\u5f0f\u7684\u6a21\u7d44\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"public-hoist-pattern[]=babel-*\n")))}d.isMDXComponent=!0}}]);