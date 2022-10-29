"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9678],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var r=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,p=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),u=l,k=d["".concat(o,".").concat(u)]||d[u]||m[u]||p;return t?r.createElement(k,a(a({ref:n},s),{},{components:t})):r.createElement(k,a({ref:n},s))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var p=t.length,a=new Array(p);a[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<p;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},661:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var r=t(2081),l=t(4604),p=(t(9496),t(9613)),a=["components"],i={id:"exec",title:"pnpm exec"},o=void 0,c={unversionedId:"cli/exec",id:"version-6.x/cli/exec",title:"pnpm exec",description:"\u5728\u5c08\u6848\u7684\u7bc4\u570d\u4e2d\u57f7\u884c Shell \u547d\u4ee4\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-6.x/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/zh-TW/6.x/cli/exec",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"6.x",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"version-6.x/docs",previous:{title:"pnpm test",permalink:"/zh-TW/6.x/cli/test"},next:{title:"pnpm dlx",permalink:"/zh-TW/6.x/cli/dlx"}},s={},m=[{value:"Examples",id:"examples",level:2},{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"Examples",id:"examples-1",level:4},{value:"--parallel",id:"--parallel",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],d={toc:m};function u(e){var n=e.components,t=(0,l.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u5728\u5c08\u6848\u7684\u7bc4\u570d\u4e2d\u57f7\u884c Shell \u547d\u4ee4\u3002"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," \u6703\u88ab\u6dfb\u52a0\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"PATH"),"\uff0c\u56e0\u6b64 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm exec")," \u5141\u8a31\u57f7\u884c\u4f9d\u8cf4\u95dc\u4fc2\u7684\u547d\u4ee4\u3002"),(0,p.kt)("h2",{id:"examples"},"Examples"),(0,p.kt)("p",null,"\u5982\u679c\u60a8\u7684\u5c08\u6848\u4f7f\u7528 Jest \u4f5c\u70ba\u4f9d\u9644\u5957\u4ef6\uff0c\u5247\u7121\u9700\u5168\u57df\u5b89\u88dd Jest\uff0c\u53ea\u9700\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm exec")," \u57f7\u884c\u5b83\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,p.kt)("p",null,"\u7576\u547d\u4ee4\u540d\u7a31\u8207 pnpm \u7684\u5167\u5efa\u547d\u4ee4\u4e0d\u885d\u7a81\u6642\uff0c ",(0,p.kt)("inlineCode",{parentName:"p"},"exec")," \u9019\u90e8\u5206\u5be6\u969b\u4e0a\u662f\u53ef\u9078\u7684\uff0c\u56e0\u6b64\u60a8\u4e5f\u53ef\u4ee5\u53ea\u57f7\u884c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("p",null,"\u6709\u95dc ",(0,p.kt)("inlineCode",{parentName:"p"},"exec")," \u547d\u4ee4\u7684\u9078\u9805\u9700\u7f6e\u65bc ",(0,p.kt)("inlineCode",{parentName:"p"},"exec")," \u95dc\u9375\u5b57\u524d\u3002 \u7f6e\u65bc ",(0,p.kt)("inlineCode",{parentName:"p"},"exec")," \u95dc\u9375\u5b57\u5f8c\u7684\u9078\u9805\u5c07\u6703\u63d0\u4f9b\u7d66\u57f7\u884c\u7684\u547d\u4ee4\u3002"),(0,p.kt)("p",null,"\u6b63\u78ba\u7bc4\u4f8b\uff0c pnpm \u5c07\u905e\u8ff4\u5730\u57f7\u884c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm -r exec jest\n")),(0,p.kt)("p",null,"\u932f\u8aa4\u7bc4\u4f8b\uff0cpnpm \u4e0d\u6703\u905e\u8ff4\u5730\u57f7\u884c\uff0c\u4f46 ",(0,p.kt)("inlineCode",{parentName:"p"},"jest")," \u6703\u4ee5 ",(0,p.kt)("inlineCode",{parentName:"p"},"-r")," \u9078\u9805\u57f7\u884c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm exec jest -r\n")),(0,p.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,p.kt)("p",null,"Added in: v2.9.0"),(0,p.kt)("p",null,"Execute the shell command in every project of the workspace."),(0,p.kt)("p",null,"The name of the current package is available through the environment variable ",(0,p.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supported from pnpm v2.22.0 onwards)."),(0,p.kt)("h4",{id:"examples-1"},"Examples"),(0,p.kt)("p",null,"Prune ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," installations for all packages:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,p.kt)("p",null,"View package information for all packages. This should be used with the ",(0,p.kt)("inlineCode",{parentName:"p"},"--shell-mode")," (or ",(0,p.kt)("inlineCode",{parentName:"p"},"-c"),") option for the environment variable to work."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,p.kt)("h3",{id:"--parallel"},"--parallel"),(0,p.kt)("p",null,"Added in: v5.1.0"),(0,p.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,p.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,p.kt)("p",null,"Added in: v6.31.0"),(0,p.kt)("p",null,"Runs the command inside of a shell. Uses ",(0,p.kt)("inlineCode",{parentName:"p"},"/bin/sh")," on UNIX and ",(0,p.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," on Windows."),(0,p.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/zh-TW/6.x/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0}}]);