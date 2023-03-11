"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7343],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,h=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3500:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var n=r(2962),a=r(2742),i=(r(9496),r(9613)),l=["components"],p={id:"publish",title:"pnpm publish"},o=void 0,s={unversionedId:"cli/publish",id:"version-7.x/cli/publish",title:"pnpm publish",description:"Publica um pacote no registry do npm.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-7.x/cli/publish.md",sourceDirName:"cli",slug:"/cli/publish",permalink:"/pt/cli/publish",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/pt-BR",tags:[],version:"7.x",frontMatter:{id:"publish",title:"pnpm publish"},sidebar:"version-7.x/docs",previous:{title:"pnpm env <cmd>",permalink:"/pt/cli/env"},next:{title:"pnpm pack",permalink:"/pt/cli/pack"}},c={},u=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--json",id:"--json",level:3},{value:"--tag &lt;tag&gt;",id:"--tag-tag",level:3},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",level:3},{value:"--no-git-checks",id:"--no-git-checks",level:3},{value:"--publish-branch",id:"--publish-branch",level:3},{value:"--force",id:"--force",level:3},{value:"--report-summary",id:"--report-summary",level:3},{value:"--dry-run",id:"--dry-run",level:3},{value:"--otp",id:"--otp",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3},{value:"Configura\xe7\xe3o",id:"configura\xe7\xe3o",level:2},{value:"Life Cycle Scripts",id:"life-cycle-scripts",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Publica um pacote no registry do npm."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm [-r] publish [<tarball|folder>] [--tag <tag>]\n     [--access <public|restricted>] [options]\n")),(0,i.kt)("p",null,"Ao publicar um pacote dentro de um workspace ",(0,i.kt)("a",{parentName:"p",href:"/pt/workspaces"}),", o arquivo LICENSE da raiz do workspace \xe9 compactado com o pacote (a menos que o pacote tenha uma licen\xe7a pr\xf3pria)."),(0,i.kt)("p",null,"Voc\xea pode substituir alguns campos antes de publicar, usando o campo ",(0,i.kt)("a",{parentName:"p",href:"/pt/package_json#publishconfig"},"publishConfig")," em ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". Voc\xea tamb\xe9m pode usar o ",(0,i.kt)("a",{parentName:"p",href:"/pt/package_json#publishconfigdirectory"},(0,i.kt)("inlineCode",{parentName:"a"},"publishConfig.directory"))," para personalizar o subdiret\xf3rio publicado (geralmente usando ferramentas de compila\xe7\xe3o de terceiros)."),(0,i.kt)("p",null,"Ao executar este comando recursivamente (",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm -r publish"),"), o pnpm publicar\xe1 todos os pacotes que possuem vers\xf5es ainda n\xe3o publicadas no registry."),(0,i.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"Publish all packages from the workspace."),(0,i.kt)("h3",{id:"--json"},"--json"),(0,i.kt)("p",null,"Show information in JSON format."),(0,i.kt)("h3",{id:"--tag-tag"},"--tag ","<","tag",">"),(0,i.kt)("p",null,"Publishes the package with the given tag. By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm publish")," updates the ",(0,i.kt)("inlineCode",{parentName:"p"},"latest")," tag."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# dentro do diret\xf3rio do pacote foo\npnpm publish --tag next\n# em um projeto onde voc\xea deseja usar a pr\xf3xima vers\xe3o de foo\npnpm add foo@next\n")),(0,i.kt)("h3",{id:"--access-publicrestricted"},"--access ","<","public|restricted",">"),(0,i.kt)("p",null,"Tells the registry whether the published package should be public or restricted."),(0,i.kt)("h3",{id:"--no-git-checks"},"--no-git-checks"),(0,i.kt)("p",null,"Don't check if current branch is your publish branch, clean, and up-to-date with remote."),(0,i.kt)("h3",{id:"--publish-branch"},"--publish-branch"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Padr\xe3o: ",(0,i.kt)("strong",{parentName:"li"},"master")," e ",(0,i.kt)("strong",{parentName:"li"},"main")),(0,i.kt)("li",{parentName:"ul"},"Types: ",(0,i.kt)("strong",{parentName:"li"},"String"))),(0,i.kt)("p",null,"The primary branch of the repository which is used for publishing the latest changes."),(0,i.kt)("h3",{id:"--force"},"--force"),(0,i.kt)("p",null,"Try to publish packages even if their current version is already found in the registry."),(0,i.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,i.kt)("p",null,"Save the list of published packages to ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-publish-summary.json"),". Useful when some other tooling is used to report the list of published packages."),(0,i.kt)("p",null,"An example of a ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-publish-summary.json")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "publishedPackages": [\n    {\n      "name": "foo",\n      "version": "1.0.0"\n    },\n    {\n      "name": "bar",\n      "version": "2.0.0"\n    }\n  }\n]\n')),(0,i.kt)("h3",{id:"--dry-run"},"--dry-run"),(0,i.kt)("p",null,"Does everything a publish would do except actually publishing to the registry."),(0,i.kt)("h3",{id:"--otp"},"--otp"),(0,i.kt)("p",null,"When publishing packages that require two-factor authentication, this option can specify a one-time password."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pt/filtering"},"Leia mais sobre filtragem.")),(0,i.kt)("h2",{id:"configura\xe7\xe3o"},"Configura\xe7\xe3o"),(0,i.kt)("p",null,"You can also set ",(0,i.kt)("inlineCode",{parentName:"p"},"git-checks"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"publish-branch")," options in the ",(0,i.kt)("inlineCode",{parentName:"p"},".npmrc")," file."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title=".npmrc"',title:'".npmrc"'},"git-checks=false\npublish-branch=production\n")),(0,i.kt)("h2",{id:"life-cycle-scripts"},"Life Cycle Scripts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prepublishOnly")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prepublish")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prepack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prepare")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postpack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"publish")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postpublish"))))}d.isMDXComponent=!0}}]);