"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3372],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),h=o(r),m=a,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||i;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8801:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var n=r(2962),a=r(2742),i=(r(9496),r(9613)),l=["components"],p={id:"publish",title:"pnpm publish"},s=void 0,o={unversionedId:"cli/publish",id:"version-6.x/cli/publish",title:"pnpm publish",description:"Publishes a package to the registry.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/cli/publish.md",sourceDirName:"cli",slug:"/cli/publish",permalink:"/tr/6.x/cli/publish",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/tr",tags:[],version:"6.x",frontMatter:{id:"publish",title:"pnpm publish"},sidebar:"version-6.x/docs",previous:{title:"pnpm env <cmd>",permalink:"/tr/6.x/cli/env"},next:{title:"pnpm pack",permalink:"/tr/6.x/cli/pack"}},u={},c=[{value:"Parametreler",id:"parametreler",level:2},{value:"--tag &lt;tag&gt;",id:"--tag-tag",level:3},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",level:3},{value:"git-checks",id:"git-checks",level:3},{value:"publish-branch",id:"publish-branch",level:3},{value:"--force",id:"--force",level:3},{value:"--report-summary",id:"--report-summary",level:3},{value:"--filter &lt;paket_se\xe7ici&gt;",id:"--filter-paket_se\xe7ici",level:3}],h={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Publishes a package to the registry."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm [-r] publish [<tarball|folder>] [--tag <tag>]\n     [--access <public|restricted>]\n")),(0,i.kt)("p",null,"When publishing a package inside a ",(0,i.kt)("a",{parentName:"p",href:"/tr/6.x/workspaces"},"workspace"),", the LICENSE file from the root of the workspace is packed with the package (unless the package has a license of its own)."),(0,i.kt)("p",null,"You may override some fields before publish, using the ",(0,i.kt)("a",{parentName:"p",href:"/tr/6.x/package_json#publishconfig"},"publishConfig")," field in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". You also can use the ",(0,i.kt)("a",{parentName:"p",href:"/tr/6.x/package_json#publishconfigdirectory"},(0,i.kt)("inlineCode",{parentName:"a"},"publishConfig.directory"))," to customize the published subdirectory (usually using third party build tools)."),(0,i.kt)("p",null,"When running this command recursively (",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm -r publish"),"), pnpm will publish all the packages that have versions not yet published to the registry."),(0,i.kt)("h2",{id:"parametreler"},"Parametreler"),(0,i.kt)("h3",{id:"--tag-tag"},"--tag ","<","tag",">"),(0,i.kt)("p",null,"Publishes the package with the given tag. By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm publish")," updates the ",(0,i.kt)("inlineCode",{parentName:"p"},"latest")," tag."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# inside the foo package directory\npnpm publish --tag next\n# in a project where you want to use the next version of foo\npnpm add foo@next\n")),(0,i.kt)("h3",{id:"--access-publicrestricted"},"--access ","<","public|restricted",">"),(0,i.kt)("p",null,"Tells the registry whether the published package should be public or restricted."),(0,i.kt)("h3",{id:"git-checks"},"git-checks"),(0,i.kt)("p",null,"S\xfcr\xfcm 4.11.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default : ",(0,i.kt)("strong",{parentName:"li"},"true")," (since v5)"),(0,i.kt)("li",{parentName:"ul"},"Tip: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"When true, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm publish")," checks if the current branch is your publish branch (master by default), clean, and up-to-date."),(0,i.kt)("h3",{id:"publish-branch"},"publish-branch"),(0,i.kt)("p",null,"S\xfcr\xfcm 4.11.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"master")),(0,i.kt)("li",{parentName:"ul"},"Types: ",(0,i.kt)("strong",{parentName:"li"},"String"))),(0,i.kt)("p",null,"The primary branch of the repository which is used for publishing the latest changes."),(0,i.kt)("h3",{id:"--force"},"--force"),(0,i.kt)("p",null,"S\xfcr\xfcm 5.18.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"Try to publish packages even if their current version is already found in the registry."),(0,i.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,i.kt)("p",null,"S\xfcr\xfcm 6.5.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"Save the list of published packages to ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-publish-summary.json"),". Useful when some other tooling is used to report the list of published packages."),(0,i.kt)("h3",{id:"--filter-paket_se\xe7ici"},"--filter ","<","paket_se\xe7ici>"),(0,i.kt)("p",null,"S\xfcr\xfcm 4.6.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/tr/6.x/filtering"},"Buradan daha fazla bilgiye ula\u015fabilirsin.")))}m.isMDXComponent=!0}}]);