"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7001],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=s(t),u=o,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||p;return t?a.createElement(k,i(i({ref:n},d),{},{components:t})):a.createElement(k,i({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,i=new Array(p);i[0]=c;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var s=2;s<p;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8079:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var a=t(2962),o=t(2742),p=(t(9496),t(9613)),i=["components"],r={id:"faq",title:"\u5e38\u898b\u554f\u984c"},l=void 0,s={unversionedId:"faq",id:"faq",title:"\u5e38\u898b\u554f\u984c",description:"\u5982\u679c\u5957\u4ef6\u90fd\u5b58\u5728\u5168\u57df\u7684\u5132\u5b58\u5340\u4e86\uff0c\u70ba\u4ec0\u9ebc\u6211\u7684 node_modules \u8cc7\u6599\u593e\u4ecd\u4f54\u7528\u786c\u789f\u7a7a\u9593\uff1f",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/faq.md",sourceDirName:".",slug:"/faq",permalink:"/zh-TW/next/faq",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/zh-TW",tags:[],version:"current",frontMatter:{id:"faq",title:"\u5e38\u898b\u554f\u984c"}},d={},m=[{value:"\u5982\u679c\u5957\u4ef6\u90fd\u5b58\u5728\u5168\u57df\u7684\u5132\u5b58\u5340\u4e86\uff0c\u70ba\u4ec0\u9ebc\u6211\u7684 <code>node_modules</code> \u8cc7\u6599\u593e\u4ecd\u4f54\u7528\u786c\u789f\u7a7a\u9593\uff1f",id:"\u5982\u679c\u5957\u4ef6\u90fd\u5b58\u5728\u5168\u57df\u7684\u5132\u5b58\u5340\u4e86\u70ba\u4ec0\u9ebc\u6211\u7684-node_modules-\u8cc7\u6599\u593e\u4ecd\u4f54\u7528\u786c\u789f\u7a7a\u9593",level:2},{value:"pnpm \u53ef\u4ee5\u5728 Windows \u4e0a\u57f7\u884c\u55ce\uff1f",id:"pnpm-\u53ef\u4ee5\u5728-windows-\u4e0a\u57f7\u884c\u55ce",level:2},{value:"\u4f46\u662f\u5de2\u72c0 <code>node_modules</code> \u7684\u65b9\u5f0f\u4e0d\u9069\u7528\u65bc Windows\uff1f",id:"\u4f46\u662f\u5de2\u72c0-node_modules-\u7684\u65b9\u5f0f\u4e0d\u9069\u7528\u65bc-windows",level:2},{value:"What about circular symlinks?",id:"what-about-circular-symlinks",level:2},{value:"\u70ba\u4ec0\u9ebc\u4f7f\u7528\u786c\u9023\u7d50\uff1f \u70ba\u4ec0\u9ebc\u4e0d\u76f4\u63a5 symlink \u81f3\u5168\u57df\u7684\u5132\u5b58\u5340\uff1f",id:"\u70ba\u4ec0\u9ebc\u4f7f\u7528\u786c\u9023\u7d50-\u70ba\u4ec0\u9ebc\u4e0d\u76f4\u63a5-symlink-\u81f3\u5168\u57df\u7684\u5132\u5b58\u5340",level:2},{value:"pnpm \u53ef\u4ee5\u5728\u591a\u78c1\u789f\u6a5f\u3001\u6a94\u6848\u7cfb\u7d71\u4e0a\u904b\u4f5c\u55ce\uff1f",id:"pnpm-\u53ef\u4ee5\u5728\u591a\u78c1\u789f\u6a5f\u6a94\u6848\u7cfb\u7d71\u4e0a\u904b\u4f5c\u55ce",level:2},{value:"\u5df2\u6307\u5b9a\u5132\u5b58\u5340\u8def\u5f91",id:"\u5df2\u6307\u5b9a\u5132\u5b58\u5340\u8def\u5f91",level:3},{value:"\u672a\u6307\u5b9a\u5132\u5b58\u5340\u8def\u5f91",id:"\u672a\u6307\u5b9a\u5132\u5b58\u5340\u8def\u5f91",level:3},{value:"<code>pnpm</code> \u4ee3\u8868\u4ec0\u9ebc\u610f\u601d\uff1f",id:"pnpm-\u4ee3\u8868\u4ec0\u9ebc\u610f\u601d",level:2},{value:"<code>pnpm</code> \u7121\u6cd5\u5728 &lt;\u60a8\u7684\u5c08\u6848&gt; \u4e2d\u4f7f\u7528 \uff1f",id:"pnpm-\u7121\u6cd5\u5728-\u60a8\u7684\u5c08\u6848-\u4e2d\u4f7f\u7528-",level:2},{value:"\u89e3\u6c7a\u65b9\u6848 1",id:"\u89e3\u6c7a\u65b9\u6848-1",level:3},{value:"\u89e3\u6c7a\u65b9\u6848 2",id:"\u89e3\u6c7a\u65b9\u6848-2",level:3},{value:"\u89e3\u6c7a\u65b9\u6848 3",id:"\u89e3\u6c7a\u65b9\u6848-3",level:3}],c={toc:m};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\u5982\u679c\u5957\u4ef6\u90fd\u5b58\u5728\u5168\u57df\u7684\u5132\u5b58\u5340\u4e86\u70ba\u4ec0\u9ebc\u6211\u7684-node_modules-\u8cc7\u6599\u593e\u4ecd\u4f54\u7528\u786c\u789f\u7a7a\u9593"},"\u5982\u679c\u5957\u4ef6\u90fd\u5b58\u5728\u5168\u57df\u7684\u5132\u5b58\u5340\u4e86\uff0c\u70ba\u4ec0\u9ebc\u6211\u7684 ",(0,p.kt)("inlineCode",{parentName:"h2"},"node_modules")," \u8cc7\u6599\u593e\u4ecd\u4f54\u7528\u786c\u789f\u7a7a\u9593\uff1f"),(0,p.kt)("p",null,"pnpm \u6703\u900f\u904e ",(0,p.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hard_link"},"\u786c\u9023\u7d50"),"\u7684\u65b9\u5f0f\u9023\u7d50\u5168\u57df\u5b58\u5132\u5230\u5c08\u6848\u8cc7\u6599\u593e\u4e0b\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," \u8cc7\u6599\u593e\u3002 \u786c\u9023\u7d50\u6703\u6307\u5411\u786c\u789f\u4e0a\u539f\u59cb\u6a94\u6240\u5728\u7684\u540c\u4e00\u4f4d\u7f6e\u3002 \u56e0\u6b64\uff0c\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u7684\u9805\u76ee\u4e2d\u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," \u4f5c\u70ba\u4f9d\u8cf4\u9805\u4e26\u4e14\u5b83\u4f54\u7528 1MB \u7a7a\u9593\uff0c\u90a3\u9ebc\u5b83\u770b\u8d77\u4f86\u5c31\u50cf\u5b83\u5728\u9805\u76ee\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," \u6587\u4ef6\u593e\u4e2d\u5360\u7528\u4e86\u8207\u5168\u5c40\u5b58\u5132\u76f8\u540c\u7684 1MB \u7a7a\u9593\u3002 \u4f46\u662f\uff0c\u9019 1MB \u662f\u786c\u789f\u4e0a\u5169\u500b\u4e0d\u540c\u4f4d\u7f6e\u7684",(0,p.kt)("em",{parentName:"p"},"\u76f8\u540c\u7a7a\u9593")," \u3002 \u6240\u4ee5 ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," \u7e3d\u5171\u53ea\u5360\u7528 1MB\uff0c\u800c\u4e0d\u662f 2MB\u3002"),(0,p.kt)("p",null,"\u6709\u95dc\u9019\u500b\u4e3b\u984c\u7684\u66f4\u591a\u8cc7\u8a0a\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/88423/why-do-hard-links-seem-to-take-the-same-space-as-the-originals"},"\u70ba\u4ec0\u9ebc\u786c\u9023\u7d50\u4f3c\u4e4e\u8207\u539f\u59cb\u9023\u7d50\u4f54\u7528\u76f8\u540c\u7684\u7a7a\u9593\uff1f")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://gist.github.com/zkochan/106cfef49f8476b753a9cbbf9c65aff1"},"Pnpm \u804a\u5929\u5ba4\u7684\u4e00\u5247\u8a0e\u8ad6\u4e32")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/794"},"Pnpm repo \u4e2d\u7684\u4e00\u500b issue"))),(0,p.kt)("h2",{id:"pnpm-\u53ef\u4ee5\u5728-windows-\u4e0a\u57f7\u884c\u55ce"},"pnpm \u53ef\u4ee5\u5728 Windows \u4e0a\u57f7\u884c\u55ce\uff1f"),(0,p.kt)("p",null,"\u4e00\u53e5\u8a71\uff1a\u662f\u7684\u3002 \u8a73\u7d30\u56de\u7b54\uff1a\u5728 Windows \u4e0a\u4f7f\u7528\u7b26\u865f\u9023\u7d50\u6703\u9020\u6210\u8a31\u591a\u554f\u984c\uff0c\u4f46 pnpm \u6709\u4e00\u500b\u66ab\u6642\u7684\u89e3\u6c7a\u65b9\u6cd5\u3002 \u5c0d\u65bc Windows\uff0c\u6211\u5011\u7528",(0,p.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions"},"junctions"),"\u66ff\u4ee3\u3002"),(0,p.kt)("h2",{id:"\u4f46\u662f\u5de2\u72c0-node_modules-\u7684\u65b9\u5f0f\u4e0d\u9069\u7528\u65bc-windows"},"\u4f46\u662f\u5de2\u72c0 ",(0,p.kt)("inlineCode",{parentName:"h2"},"node_modules")," \u7684\u65b9\u5f0f\u4e0d\u9069\u7528\u65bc Windows\uff1f"),(0,p.kt)("p",null,"\u4e4b\u524d\u7684 npm \u7248\u672c\u56e0\u5de2\u72c0\u5167\u5d4c\u4e86\u6240\u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," \u767c\u751f\u554f\u984c (\u8acb\u53c3\u95b1",(0,p.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-v0.x-archive/issues/6960"},"\u6b64\u554f\u984c"),")\u3002 However, pnpm does not create deep folders, it stores all packages flatly and uses symbolic links to create the dependency tree structure."),(0,p.kt)("h2",{id:"what-about-circular-symlinks"},"What about circular symlinks?"),(0,p.kt)("p",null,"Although pnpm uses linking to put dependencies into ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," folders, circular symlinks are avoided because parent packages are placed into the same ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," folder in which their dependencies are. So ",(0,p.kt)("inlineCode",{parentName:"p"},"foo"),"'s dependencies are not in ",(0,p.kt)("inlineCode",{parentName:"p"},"foo/node_modules"),", but ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," is in ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," together with its own dependencies."),(0,p.kt)("h2",{id:"\u70ba\u4ec0\u9ebc\u4f7f\u7528\u786c\u9023\u7d50-\u70ba\u4ec0\u9ebc\u4e0d\u76f4\u63a5-symlink-\u81f3\u5168\u57df\u7684\u5132\u5b58\u5340"},"\u70ba\u4ec0\u9ebc\u4f7f\u7528\u786c\u9023\u7d50\uff1f \u70ba\u4ec0\u9ebc\u4e0d\u76f4\u63a5 symlink \u81f3\u5168\u57df\u7684\u5132\u5b58\u5340\uff1f"),(0,p.kt)("p",null,"\u4e00\u500b\u5305\u5728\u4e00\u53f0\u6a5f\u5668\u4e0a\u53ef\u4ee5\u6709\u4e0d\u540c\u7684\u4f9d\u8cf4\u96c6\u3002"),(0,p.kt)("p",null,"In project ",(0,p.kt)("strong",{parentName:"p"},"A")," ",(0,p.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," can have a dependency resolved to ",(0,p.kt)("inlineCode",{parentName:"p"},"bar@1.0.0"),", but in project ",(0,p.kt)("strong",{parentName:"p"},"B")," the same dependency of ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," might resolve to ",(0,p.kt)("inlineCode",{parentName:"p"},"bar@1.1.0"),"; so, pnpm hard links ",(0,p.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," to every project where it is used, in order to create different sets of dependencies for it."),(0,p.kt)("p",null,"Direct symlinking to the global store would work with Node's ",(0,p.kt)("inlineCode",{parentName:"p"},"--preserve-symlinks")," flag, however, that approach comes with a plethora of its own issues, so we decided to stick with hard links. For more details about why this decision was made, see ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-eps/issues/46"},"this issue"),"."),(0,p.kt)("h2",{id:"pnpm-\u53ef\u4ee5\u5728\u591a\u78c1\u789f\u6a5f\u6a94\u6848\u7cfb\u7d71\u4e0a\u904b\u4f5c\u55ce"},"pnpm \u53ef\u4ee5\u5728\u591a\u78c1\u789f\u6a5f\u3001\u6a94\u6848\u7cfb\u7d71\u4e0a\u904b\u4f5c\u55ce\uff1f"),(0,p.kt)("p",null,"The package store should be on the same drive and filesystem as installations, otherwise packages will be copied, not linked. This is due to a limitation in how hard linking works, in that a file on one filesystem cannot address a location in another. \u8acb\u53c3\u898b ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/712"},"Issue #712")," \u4ee5\u4e86\u89e3\u8a73\u7d30\u8cc7\u8a0a\u3002"),(0,p.kt)("p",null,"pnpm \u5728\u4e0b\u5217\u5169\u7a2e\u60c5\u5f62\u4e2d\u7684\u884c\u70ba\u4e0d\u540c"),(0,p.kt)("h3",{id:"\u5df2\u6307\u5b9a\u5132\u5b58\u5340\u8def\u5f91"},"\u5df2\u6307\u5b9a\u5132\u5b58\u5340\u8def\u5f91"),(0,p.kt)("p",null,"\u5982\u679c\u5df2\u900f\u904e ",(0,p.kt)("a",{parentName:"p",href:"/zh-TW/next/configuring"},"store config")," \u6307\u5b9a\u4e86\u5132\u5b58\u5340\u8def\u5f91\uff0c\u53ea\u6709\u5728\u5176\u4ed6\u786c\u789f\u4e0a\u7684\u5c08\u6848\u6703\u5c0e\u81f4\u8907\u88fd\u5957\u4ef6\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u60a8\u5728\u786c\u789f ",(0,p.kt)("inlineCode",{parentName:"p"},"A")," \u4e0a\u57f7\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install"),"\uff0c\u90a3 pnpm \u5132\u5b58\u5340\u5fc5\u5b58\u5728\u786c\u789f ",(0,p.kt)("inlineCode",{parentName:"p"},"A"),"\u3002 \u5047\u5982 pnpm \u5132\u5b58\u5340\u4f4d\u65bc\u786c\u789f ",(0,p.kt)("inlineCode",{parentName:"p"},"B"),"\uff0c\u90a3\u6240\u6709\u9700\u8981\u7684\u5957\u4ef6\u5c07\u76f4\u63a5\u8907\u88fd\u5230\u5c08\u6848\u4f4d\u7f6e\uff0c\u5c31\u4e0d\u4f7f\u7528\u9023\u7d50\u65b9\u5f0f\u3002 \u9019\u500b\u505a\u6cd5\u6703\u986f\u8457\u524a\u5f31 pnpm \u5728\u7bc0\u7701\u5132\u5b58\u7a7a\u9593\u53ca\u63d0\u5347\u6027\u80fd\u7684\u512a\u52e2\u3002"),(0,p.kt)("h3",{id:"\u672a\u6307\u5b9a\u5132\u5b58\u5340\u8def\u5f91"},"\u672a\u6307\u5b9a\u5132\u5b58\u5340\u8def\u5f91"),(0,p.kt)("p",null,"\u5982\u679c\u6c92\u6709\u8a2d\u5b9a\u5132\u5b58\u5340\u8def\u5f91\uff0c\u5247\u6703\u5efa\u7acb\u591a\u500b\u5132\u5b58\u5340\uff08\u6bcf\u500b\u786c\u789f\u6216\u6a94\u6848\u7cfb\u7d71\u5404\u81ea\u64c1\u6709\uff09\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"A")," \u786c\u789f\u4e0a\u9032\u884c\u5b89\u88dd\uff0c\u5132\u5b58\u5340\u5247\u5efa\u7acb\u65bc ",(0,p.kt)("inlineCode",{parentName:"p"},"A")," \u786c\u789f\u7684\u6a94\u6848\u7cfb\u7d71\u6839\u76ee\u9304\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpm-store")," \u4f4d\u7f6e\u3002  \u82e5\u4e4b\u5f8c\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"B")," \u786c\u789f\u4e0a\u9032\u884c\u5b89\u88dd\uff0c\u53e6\u4e00\u500b\u5132\u5b58\u5340\u5247\u5efa\u7acb\u65bc ",(0,p.kt)("inlineCode",{parentName:"p"},"B")," \u786c\u789f\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpm-store"),"\u3002 \u60a8\u7684\u5c08\u6848\u4ecd\u4eab\u6709 pnpm \u7684\u597d\u8655\uff0c\u4f46\u4e0d\u540c\u786c\u789f\u9593\u53ef\u80fd\u6703\u6709\u5197\u9918\u5957\u4ef6\u3002"),(0,p.kt)("h2",{id:"pnpm-\u4ee3\u8868\u4ec0\u9ebc\u610f\u601d"},(0,p.kt)("inlineCode",{parentName:"h2"},"pnpm")," \u4ee3\u8868\u4ec0\u9ebc\u610f\u601d\uff1f"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," \u4ee3\u8868 performant\uff08\u9ad8\u6548\u80fd\u7684\uff09\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"npm"),"\u3002 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/rstacruz/"},"@rstacruz")," \u60f3\u51fa\u4e86\u9019\u500b\u540d\u5b57\u3002"),(0,p.kt)("h2",{id:"pnpm-\u7121\u6cd5\u5728-\u60a8\u7684\u5c08\u6848-\u4e2d\u4f7f\u7528-"},(0,p.kt)("inlineCode",{parentName:"h2"},"pnpm")," \u7121\u6cd5\u5728 ","<","\u60a8\u7684\u5c08\u6848> \u4e2d\u4f7f\u7528 \uff1f"),(0,p.kt)("p",null,"\u5728\u5927\u90e8\u5206\u60c5\u6cc1\u4e0b\uff0c\u9019\u8868\u793a\u81f3\u5c11\u6709\u4e00\u9805\u4f9d\u9644\u95dc\u4fc2\u9700\u8981\u7684\u5957\u4ef6\u672a\u88ab\u5ba3\u544a\u65bc ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u3002 \u9019\u662f\u7531\u5e73\u92ea\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," \u5f15\u8d77\u7684\u5e38\u898b\u932f\u8aa4\u3002 \u5982\u679c\u767c\u751f\u9019\u7a2e\u60c5\u6cc1\uff0c\u9019\u662f\u4f9d\u8cf4\u9805\u4e2d\u7684\u932f\u8aa4\uff0c\u4f9d\u8cf4\u9805\u9700\u8981\u88ab\u4fee\u5fa9\u3002 \u4f46\u9019\u53ef\u80fd\u82b1\u8cbb\u4e00\u9ede\u6642\u9593\uff0c\u56e0\u6b64 pnpm \u652f\u6301\u984d\u5916\u7684\u89e3\u6c7a\u65b9\u6cd5\u4f86\u4f7f\u6709\u554f\u984c\u7684\u4f9d\u8cf4\u6b63\u5e38\u904b\u884c\u3002"),(0,p.kt)("h3",{id:"\u89e3\u6c7a\u65b9\u6848-1"},"\u89e3\u6c7a\u65b9\u6848 1"),(0,p.kt)("p",null,"In case there are issues, you can use the ",(0,p.kt)("a",{parentName:"p",href:"npmrc#node-linker"},(0,p.kt)("inlineCode",{parentName:"a"},"node-linker=hoisted"))," setting. This creates a flat ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," structure similar to the one created by ",(0,p.kt)("inlineCode",{parentName:"p"},"npm"),"."),(0,p.kt)("h3",{id:"\u89e3\u6c7a\u65b9\u6848-2"},"\u89e3\u6c7a\u65b9\u6848 2"),(0,p.kt)("p",null,"In the following example, a dependency does ",(0,p.kt)("strong",{parentName:"p"},"not")," have the ",(0,p.kt)("inlineCode",{parentName:"p"},"iterall")," module in its own list of deps."),(0,p.kt)("p",null,"The easiest solution to resolve missing dependencies of the buggy packages is to ",(0,p.kt)("strong",{parentName:"p"},"add ",(0,p.kt)("inlineCode",{parentName:"strong"},"iterall")," as a dependency to our project's ",(0,p.kt)("inlineCode",{parentName:"strong"},"package.json")),"."),(0,p.kt)("p",null,"You can do so, by installing it via ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm add iterall"),", and will be automatically added to your project's ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    ...\n    "iterall": "^1.2.2",\n    ...\n  }\n')),(0,p.kt)("h3",{id:"\u89e3\u6c7a\u65b9\u6848-3"},"\u89e3\u6c7a\u65b9\u6848 3"),(0,p.kt)("p",null,"One of the solutions is to use ",(0,p.kt)("a",{parentName:"p",href:"/zh-TW/next/pnpmfile#hooks"},"hooks")," for adding the missing dependencies to the package's ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,p.kt)("p",null,"An example was ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/1043"},"Webpack Dashboard")," which wasn't working with ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm"),". It has since been resolved such that it works with ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," now."),(0,p.kt)("p",null,"It used to throw an error:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-console"},"Error: Cannot find module 'babel-traverse'\n  at /node_modules/inspectpack@2.2.3/node_modules/inspectpack/lib/actions/parse\n")),(0,p.kt)("p",null,"The problem was that ",(0,p.kt)("inlineCode",{parentName:"p"},"babel-traverse")," was used in ",(0,p.kt)("inlineCode",{parentName:"p"},"inspectpack")," which was used by ",(0,p.kt)("inlineCode",{parentName:"p"},"webpack-dashboard"),", but ",(0,p.kt)("inlineCode",{parentName:"p"},"babel-traverse")," wasn't specified in ",(0,p.kt)("inlineCode",{parentName:"p"},"inspectpack"),"'s ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),". It still worked with ",(0,p.kt)("inlineCode",{parentName:"p"},"npm")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"yarn")," because they create flat ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,p.kt)("p",null,"The solution was to create a ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," with the following contents:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    readPackage: (pkg) => {\n      if (pkg.name === \"inspectpack\") {\n        pkg.dependencies['babel-traverse'] = '^6.26.0';\n      }\n      return pkg;\n    }\n  }\n};\n")),(0,p.kt)("p",null,"After creating a ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", delete ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," only - there is no need to delete ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules"),", as pnpm hooks only affect module resolution. Then, rebuild the dependencies & it should be working."))}u.isMDXComponent=!0}}]);