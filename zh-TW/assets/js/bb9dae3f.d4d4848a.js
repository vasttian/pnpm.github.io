"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[961],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),v=o,m=d["".concat(p,".").concat(v)]||d[v]||u[v]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>v,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(2962),o=n(2742),a=(n(9496),n(9613)),i=["components"],l={id:"remove",title:"pnpm remove"},p=void 0,c={unversionedId:"cli/remove",id:"version-7.x/cli/remove",title:"pnpm remove",description:"\u6307\u4ee4\u5225\u540d\uff1arm, uninstall, un",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-7.x/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/zh-TW/cli/remove",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/zh-TW",tags:[],version:"7.x",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"version-7.x/docs",previous:{title:"pnpm update",permalink:"/zh-TW/cli/update"},next:{title:"pnpm link",permalink:"/zh-TW/cli/link"}},s={},u=[{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--save-dev, -D",id:"--save-dev--d",level:3},{value:"--save-optional, -O",id:"--save-optional--o",level:3},{value:"--save-prod, -P",id:"--save-prod--p",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],d={toc:u};function v(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6307\u4ee4\u5225\u540d\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"rm"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"uninstall"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"un")),(0,a.kt)("p",null,"\u5f9e ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u548c\u5c08\u6848\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"\u4e2d\u522a\u9664\u4f9d\u8cf4\u3002"),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/zh-TW/workspaces"},"\u5de5\u4f5c\u5340"),"\u4e2d\u4f7f\u7528\u6642\uff0c\u5c07\u5f9e\u6bcf\u500b\u5de5\u4f5c\u5340\u5305\u4e2d\u522a\u9664\u8a72\u4f9d\u8cf4\u9805\u3002"),(0,a.kt)("p",null,"When used not inside a workspace, removes a dependency (or dependencies) from every package found in subdirectories."),(0,a.kt)("h3",{id:"--global--g"},"--global, -g"),(0,a.kt)("p",null,"\u522a\u9664\u4e00\u500b\u5168\u57df\u5957\u4ef6\u3002"),(0,a.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,a.kt)("p",null,"\u50c5\u5f9e ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies"),"\u4e2d\u522a\u9664\u4f9d\u8cf4\u9805\u3002"),(0,a.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,a.kt)("p",null,"\u50c5\u5f9e ",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"\u4e2d\u522a\u9664\u4f9d\u8cf4\u9805\u3002"),(0,a.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,a.kt)("p",null,"\u50c5\u5f9e ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies"),"\u4e2d\u522a\u9664\u4f9d\u8cf4\u9805\u3002"),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh-TW/filtering"},"Read more about filtering.")))}v.isMDXComponent=!0}}]);