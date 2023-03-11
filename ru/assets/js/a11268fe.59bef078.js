"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1727],{9613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(9496);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=i,u=d["".concat(p,".").concat(m)]||d[m]||k[m]||l;return a?n.createElement(u,r(r({ref:t},c),{},{components:a})):n.createElement(u,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8129:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>k});var n=a(2962),i=a(2742),l=(a(9496),a(9613)),r=["components"],o={id:"workspaces",title:"\u0412\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441"},p=void 0,s={unversionedId:"workspaces",id:"version-6.x/workspaces",title:"\u0412\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441",description:"pnpm \u0438\u043c\u0435\u0435\u0442 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u0443\u044e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 \u043c\u043e\u043d\u043e\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432 (multi-package \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432, multi-project \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432 \u0438\u043b\u0438 \u043c\u043e\u043d\u043e\u043b\u0438\u0442\u043d\u044b\u0445 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432). \u041c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0447\u0443\u044e \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u0432 \u043e\u0434\u043d\u043e\u043c \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.x/workspaces.md",sourceDirName:".",slug:"/workspaces",permalink:"/ru/6.x/workspaces",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ru",tags:[],version:"6.x",frontMatter:{id:"workspaces",title:"\u0412\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441"},sidebar:"version-6.x/docs",previous:{title:".pnpmfile.cjs",permalink:"/ru/6.x/pnpmfile"},next:{title:"\u0410\u043b\u0438\u0430\u0441\u044b",permalink:"/ru/6.x/aliases"}},c={},k=[{value:"\u041f\u0440\u043e\u0442\u043e\u043a\u043e\u043b \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 (workspace:)",id:"\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b-\u0440\u0430\u0431\u043e\u0447\u0435\u0439-\u043e\u0431\u043b\u0430\u0441\u0442\u0438-workspace",level:2},{value:"\u0421\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u043f\u0430\u043a\u0435\u0442\u044b \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 \u043f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c\u044b",id:"\u0441\u0441\u044b\u043b\u043a\u0438-\u043d\u0430-\u043f\u0430\u043a\u0435\u0442\u044b-\u0440\u0430\u0431\u043e\u0447\u0435\u0439-\u043e\u0431\u043b\u0430\u0441\u0442\u0438-\u0447\u0435\u0440\u0435\u0437-\u043f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c\u044b",level:3},{value:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u0430\u043a\u0435\u0442\u044b \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 \u0438\u0445 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u0442\u044c",id:"\u0441\u0441\u044b\u043b\u043a\u0430-\u043d\u0430-\u043f\u0430\u043a\u0435\u0442\u044b-\u0440\u0430\u0431\u043e\u0447\u0435\u0439-\u043e\u0431\u043b\u0430\u0441\u0442\u0438-\u0447\u0435\u0440\u0435\u0437-\u0438\u0445-\u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439-\u043f\u0443\u0442\u044c",level:3},{value:"\u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438",id:"\u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f-\u043f\u0430\u043a\u0435\u0442\u043e\u0432-\u0440\u0430\u0431\u043e\u0447\u0435\u0439-\u043e\u0431\u043b\u0430\u0441\u0442\u0438",level:3},{value:"Release workflow",id:"release-workflow",level:2},{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"link-workspace-packages",id:"link-workspace-packages",level:3},{value:"prefer-workspace-packages",id:"prefer-workspace-packages",level:3},{value:"shared-workspace-lockfile",id:"shared-workspace-lockfile",level:3},{value:"save-workspace-protocol",id:"save-workspace-protocol",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0431\u043b\u0435\u043c",level:2},{value:"Usage examples",id:"usage-examples",level:2}],d={toc:k};function m(e){var t=e.components,a=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"pnpm \u0438\u043c\u0435\u0435\u0442 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u0443\u044e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 \u043c\u043e\u043d\u043e\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432 (multi-package \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432, multi-project \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432 \u0438\u043b\u0438 \u043c\u043e\u043d\u043e\u043b\u0438\u0442\u043d\u044b\u0445 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432). \u041c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0447\u0443\u044e \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u0432 \u043e\u0434\u043d\u043e\u043c \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438."),(0,l.kt)("p",null,"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0434\u043e\u043b\u0436\u043d\u0430 \u0438\u043c\u0435\u0442\u044c \u0444\u0430\u0439\u043b ",(0,l.kt)("a",{parentName:"p",href:"/ru/6.x/pnpm-workspace_yaml"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm-workspace.yaml"))," \u0432 \u043a\u043e\u0440\u043d\u0435\u0432\u043e\u043c \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435. \u0420\u0430\u0431\u043e\u0447\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c ",(0,l.kt)("a",{parentName:"p",href:"/ru/6.x/npmrc"},(0,l.kt)("inlineCode",{parentName:"a"},".npmrc"))," \u0432 \u043a\u043e\u0440\u043d\u0435."),(0,l.kt)("h2",{id:"\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b-\u0440\u0430\u0431\u043e\u0447\u0435\u0439-\u043e\u0431\u043b\u0430\u0441\u0442\u0438-workspace"},"\u041f\u0440\u043e\u0442\u043e\u043a\u043e\u043b \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 (workspace:)"),(0,l.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v3.7.0."),(0,l.kt)("p",null,"By default, pnpm will link packages from the workspace if the available packages match the declared ranges. For instance, ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is linked into ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," if ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," has ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "^1.0.0"')," in its dependencies and ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is not in the workspace. However, if ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," has ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," in dependencies and ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," is not in the workspace, ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," will be installed from the registry. This behavior introduces some uncertainty."),(0,l.kt)("p",null,"Luckily, pnpm supports the ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:")," protocol. When this protocol is used, pnpm will refuse to resolve to anything other than a local workspace package. So, if you set ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"'),", this time installation will fail because ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," isn't present in the workspace."),(0,l.kt)("p",null,"This protocol is especially useful when the ",(0,l.kt)("a",{parentName:"p",href:"#link-workspace-packages"},"link-workspace-packages")," option is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),". In that case, pnpm will only link packages from the workspace if the ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:")," protocol is used."),(0,l.kt)("h3",{id:"\u0441\u0441\u044b\u043b\u043a\u0438-\u043d\u0430-\u043f\u0430\u043a\u0435\u0442\u044b-\u0440\u0430\u0431\u043e\u0447\u0435\u0439-\u043e\u0431\u043b\u0430\u0441\u0442\u0438-\u0447\u0435\u0440\u0435\u0437-\u043f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c\u044b"},"\u0421\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u043f\u0430\u043a\u0435\u0442\u044b \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 \u043f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c\u044b"),(0,l.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v5.12.0"),(0,l.kt)("p",null,"Let's say you have a package in the workspace named ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),". Usually, you would reference it as ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:*"'),"."),(0,l.kt)("p",null,"If you want to use a different alias, the following syntax will work too: ",(0,l.kt)("inlineCode",{parentName:"p"},'"bar": "workspace:foo@*"'),"."),(0,l.kt)("p",null,"Before publish, aliases are converted to regular aliased dependencies. The above example will become: ",(0,l.kt)("inlineCode",{parentName:"p"},'"bar": "npm:foo@1.0.0"'),"."),(0,l.kt)("h3",{id:"\u0441\u0441\u044b\u043b\u043a\u0430-\u043d\u0430-\u043f\u0430\u043a\u0435\u0442\u044b-\u0440\u0430\u0431\u043e\u0447\u0435\u0439-\u043e\u0431\u043b\u0430\u0441\u0442\u0438-\u0447\u0435\u0440\u0435\u0437-\u0438\u0445-\u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439-\u043f\u0443\u0442\u044c"},"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u0430\u043a\u0435\u0442\u044b \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 \u0438\u0445 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u0442\u044c"),(0,l.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v5.12.0"),(0,l.kt)("p",null,"In a workspace with 2 packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+ packages\n    + foo\n    + bar\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"bar")," may have ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," in its dependencies declared as ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:../foo"'),". Before publishing, these specs are converted to regular version specs supported by all package managers."),(0,l.kt)("h3",{id:"\u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f-\u043f\u0430\u043a\u0435\u0442\u043e\u0432-\u0440\u0430\u0431\u043e\u0447\u0435\u0439-\u043e\u0431\u043b\u0430\u0441\u0442\u0438"},"\u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438"),(0,l.kt)("p",null,"When a workspace package is packed into an archive (whether it's through ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm pack")," or one of the publish commands like ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm publish"),"), we dynamically replace any ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:")," dependency by:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432 \u0446\u0435\u043b\u0435\u0432\u043e\u0439 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 (\u0435\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 ",(0,l.kt)("inlineCode",{parentName:"li"},"workspace:*"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"workspace:~")," \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"workspace: ^"),")"),(0,l.kt)("li",{parentName:"ul"},"\u0421\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0439 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d semver (\u0434\u043b\u044f \u043b\u044e\u0431\u043e\u0433\u043e \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430)")),(0,l.kt)("p",null,"So for example, if we have ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"bar"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"qar"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"zoo")," in the workspace and they all are at version ",(0,l.kt)("inlineCode",{parentName:"p"},"1.5.0"),", the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "workspace:*",\n        "bar": "workspace:~",\n        "qar": "workspace:^",\n        "zoo": "workspace:^1.5.0"\n    }\n}\n')),(0,l.kt)("p",null,"Will be transformed into:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "1.5.0",\n        "bar": "~1.5.0",\n        "qar": "^1.5.0",\n        "zoo": "^1.5.0"\n    }\n}\n')),(0,l.kt)("p",null,"This feature allows you to depend on your local workspace packages while still being able to publish the resulting packages to the remote registry without needing intermediary publish steps - your consumers will be able to use your published workspaces as any other package, still benefitting from the guarantees semver offers."),(0,l.kt)("h2",{id:"release-workflow"},"Release workflow"),(0,l.kt)("p",null,"Versioning packages inside a workspace is a complex task and pnpm currently does not provide a built-in solution for it. However, there are 2 well tested tools that handle versioning and support pnpm:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/changesets/changesets"},"changesets")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rushjs.io"},"Rush"),".")),(0,l.kt)("p",null,"For how to set up a repository using Rush, read ",(0,l.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/setup_new_repo"},"this page"),"."),(0,l.kt)("p",null,"For using Changesets with pnpm, read ",(0,l.kt)("a",{parentName:"p",href:"/ru/6.x/using-changesets"},"this guide"),"."),(0,l.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,l.kt)("h3",{id:"link-workspace-packages"},"link-workspace-packages"),(0,l.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v2.14.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,l.kt)("strong",{parentName:"li"},"true"),", ",(0,l.kt)("strong",{parentName:"li"},"false"),", ",(0,l.kt)("strong",{parentName:"li"},"deep"))),(0,l.kt)("p",null,"If this is enabled, locally available packages are linked to ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," instead of being downloaded from the registry. This is very convenient in a monorepo. If you need local packages to also be linked to subdependencies, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"deep")," setting (since v5)."),(0,l.kt)("p",null,"Else, packages are downloaded and installed from the registry. However, workspace packages can still be linked by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:")," range protocol."),(0,l.kt)("h3",{id:"prefer-workspace-packages"},"prefer-workspace-packages"),(0,l.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v5.13.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"If this is enabled, local packages from the workspace are preferred over packages from the registry, even if there is a newer version of the package in the registry."),(0,l.kt)("p",null,"This setting is only useful if the workspace doesn't use ",(0,l.kt)("inlineCode",{parentName:"p"},"save-workspace-protocol"),"."),(0,l.kt)("h3",{id:"shared-workspace-lockfile"},"shared-workspace-lockfile"),(0,l.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v2.17.0 \u043a\u0430\u043a ",(0,l.kt)("inlineCode",{parentName:"p"},"shared-workspace-shrinkwrap")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"If this is enabled, pnpm creates a single ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," file in the root of the workspace. This also means that all dependencies of workspace packages will be in a single ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," (and get symlinked to their package ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," folder for Node's module resolution)."),(0,l.kt)("p",null,"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0434\u0430\u043d\u043d\u043e\u0439 \u043e\u043f\u0446\u0438\u0438:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"every dependency is a singleton"),(0,l.kt)("li",{parentName:"ul"},"faster installations in a monorepo"),(0,l.kt)("li",{parentName:"ul"},"fewer changes in code reviews as they are all in one file")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Even though all the dependencies will be hard linked into the root ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules"),", packages will have access only to those dependencies that are declared in their ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),", so pnpm's strictness is preserved. This is a result of the aforementioned symbolic linking.")),(0,l.kt)("h3",{id:"save-workspace-protocol"},"save-workspace-protocol"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"If this is enabled, new dependencies will be added with the workspace protocol IF (and only if) they are present in the workspace."),(0,l.kt)("p",null,"You might want to change this setting to ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," if the tooling in your repository does not understand the workspace protocol (and ideally submit a PR to your tooling to get it added in the future)."),(0,l.kt)("h2",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0431\u043b\u0435\u043c"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c"),(0,l.kt)("p",null,"pnpm cannot guarantee that scripts will be run in topological order if there are cycles between workspace dependencies. If pnpm detects cyclic dependencies during installation, it will produce a warning. If pnpm is able to find out which dependencies are causing the cycles, it will display them too."),(0,l.kt)("p",null,"If you see the message ",(0,l.kt)("inlineCode",{parentName:"p"},"There are cyclic workspace dependencies"),", please inspect workspace dependencies declared in ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,l.kt)("h2",{id:"usage-examples"},"Usage examples"),(0,l.kt)("p",null,"Here are a few open source projects that use the workspace feature of pnpm:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ice-lab/icestark"},"icestark")," (as of 12/16/2021, commit ",(0,l.kt)("inlineCode",{parentName:"li"},"4862326a8de53d02f617e7b1986774fd7540fccd"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/vuejs/vue-next"},"Vue 3.0")," (as of 10/9/2021, commit ",(0,l.kt)("inlineCode",{parentName:"li"},"61c5fbd3e35152f5f32e95bf04d3ee083414cecb"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite"},"Vite")," (as of 9/26/2021, commit ",(0,l.kt)("inlineCode",{parentName:"li"},"3e1cce01d01493d33e50966d0d0fd39a86d229f9"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/cyclejs/cyclejs"},"Cycle.js")," (as of 9/21/2021, commit ",(0,l.kt)("inlineCode",{parentName:"li"},"f2187ab6688368edb904b649bd371a658f6a8637"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/prisma/prisma"},"Prisma")," (as of 9/21/2021, commit ",(0,l.kt)("inlineCode",{parentName:"li"},"c4c83e788aa16d61bae7a6d00adc8a58b3789a06"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/verdaccio/verdaccio"},"Verdaccio")," (as of 9/21/2021, commit ",(0,l.kt)("inlineCode",{parentName:"li"},"9dbf73e955fcb70b0a623c5ab89649b95146c744"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/rollup/plugins"},"Rollup plugins")," (as of 9/21/2021, commit ",(0,l.kt)("inlineCode",{parentName:"li"},"53fb18c0c2852598200c547a0b1d745d15b5b487"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Saul-Mirone/milkdown"},"Milkdown")," (as of 9/26/2021, commit ",(0,l.kt)("inlineCode",{parentName:"li"},"4b2e1dd6125bc2198fd1b851c4f00eda70e9b913"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/bytedance/bytemd"},"ByteMD")," (as of 2/18/2021, commit ",(0,l.kt)("inlineCode",{parentName:"li"},"36ef25f1ea1cd0b08752df5f8c832302017bb7fb"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/vueuse/vueuse"},"VueUse")," (as of 9/25/2021, commit ",(0,l.kt)("inlineCode",{parentName:"li"},"826351ba1d9c514e34426c85f3d69fb9875c7dd9"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/slidevjs/slidev"},"Slidev")," (as of 4/12/2021, commit ",(0,l.kt)("inlineCode",{parentName:"li"},"d6783323eb1ab1fc612577eb63579c8f7bc99c3a"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/sveltejs/kit"},"SvelteKit")," (as of 9/26/2021, commit ",(0,l.kt)("inlineCode",{parentName:"li"},"b164420ab26fa04fd0fbe0ac05431f36a89ef193"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/telecraft/telecraft"},"Telecraft")," (as of 9/26/2021, commit ",(0,l.kt)("inlineCode",{parentName:"li"},"73a9c48c9d4f160d758b8881f404cc52c20a7454"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/hayes/giraphql"},"GiraphQL")," (as of 8/4/2021, commit ",(0,l.kt)("inlineCode",{parentName:"li"},"3dd3ff148da382d6f406f20626a9a5c25707c0c8"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/msgbyte/tailchat"},"Tailchat")," (as of 12/27/2021, commit ",(0,l.kt)("inlineCode",{parentName:"li"},"298af71aa0619e0a8fa8717777afe2fb32739db4"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/vitest-dev/vitest"},"Vitest")," (as of 12/13/2021, commit ",(0,l.kt)("inlineCode",{parentName:"li"},"d6ff0ccb819716713f5eab5c046861f4d8e4f988"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/element-plus/element-plus"},"Element Plus")," (as of 9/23/2021, commit ",(0,l.kt)("inlineCode",{parentName:"li"},"f9e192535ff74d1443f1d9e0c5394fad10428629"),")")))}m.isMDXComponent=!0}}]);