"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4867],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),s=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||r;return n?i.createElement(k,l(l({ref:t},u),{},{components:n})):i.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var i=n(2962),a=n(2742),r=(n(9496),n(9613)),l=["components"],p={id:"run",title:"pnpm run"},o=void 0,s={unversionedId:"cli/run",id:"version-7.x/cli/run",title:"pnpm run",description:"Alias: run-script",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-7.x/cli/run.md",sourceDirName:"cli",slug:"/cli/run",permalink:"/it/cli/run",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/it",tags:[],version:"7.x",frontMatter:{id:"run",title:"pnpm run"},sidebar:"version-7.x/docs",previous:{title:"pnpm licenses",permalink:"/it/cli/licenses"},next:{title:"pnpm test",permalink:"/it/cli/test"}},u={},c=[{value:"Esempi",id:"esempi",level:2},{value:"Running multiple scripts",id:"running-multiple-scripts",level:2},{value:"Details",id:"details",level:2},{value:"Differences with <code>npm run</code>",id:"differences-with-npm-run",level:2},{value:"Environment",id:"environment",level:2},{value:"Opzioni",id:"opzioni",level:2},{value:"script-shell",id:"script-shell",level:3},{value:"shell-emulator",id:"shell-emulator",level:3},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--if-present",id:"--if-present",level:3},{value:"--parallel",id:"--parallel",level:3},{value:"--stream",id:"--stream",level:3},{value:"--aggregate-output",id:"--aggregate-output",level:3},{value:"enable-pre-post-scripts",id:"enable-pre-post-scripts",level:3},{value:"--resume-from &lt;package_name&gt;",id:"--resume-from-package_name",level:3},{value:"--report-summary",id:"--report-summary",level:3},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Alias: ",(0,r.kt)("inlineCode",{parentName:"p"},"run-script")),(0,r.kt)("p",null,"Esegue uno script definito nel file manifesto del pacchetto."),(0,r.kt)("h2",{id:"esempi"},"Esempi"),(0,r.kt)("p",null,"Supponiamo che tu abbia uno script ",(0,r.kt)("inlineCode",{parentName:"p"},"watch")," configurato nel tuo ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", in questo modo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "watch": "webpack --watch"\n}\n')),(0,r.kt)("p",null,"Ora puoi eseguire questo script usando ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run watch"),"! Semplice, vero? Un'altra cosa da notare per coloro a cui piace risparmiare sequenze di tasti e tempo \xe8 che tutti gli script vengono resi alias come comandi pnpm, quindi alla fine ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm watch")," \xe8 solo abbreviazione per ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," (SOLO per gli script che non condividono lo stesso nome dei comandi pnpm gi\xe0 esistenti)."),(0,r.kt)("h2",{id:"running-multiple-scripts"},"Running multiple scripts"),(0,r.kt)("p",null,"Added in: v7.27.0"),(0,r.kt)("p",null,"You may run multiple scripts at the same time by using a regex instead of the script name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm run "/<regex>/"\n')),(0,r.kt)("p",null,"Run all scripts that start with ",(0,r.kt)("inlineCode",{parentName:"p"},"watch:"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm run "/^watch:.*/"\n')),(0,r.kt)("h2",{id:"details"},"Details"),(0,r.kt)("p",null,"In addition to the shell\u2019s pre-existing ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run")," includes ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," provided to ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts"),". This means that so long as you have a package installed, you can use it in a script like a regular command. For example, if you have ",(0,r.kt)("inlineCode",{parentName:"p"},"eslint")," installed, you can write up a script like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"lint": "eslint src --fix"\n')),(0,r.kt)("p",null,"And even though ",(0,r.kt)("inlineCode",{parentName:"p"},"eslint")," is not installed globally in your shell, it will run."),(0,r.kt)("p",null,"For workspaces, ",(0,r.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," is also added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),", so if a tool is installed in the workspace root, it may be called in any workspace package's ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts"),"."),(0,r.kt)("h2",{id:"differences-with-npm-run"},"Differences with ",(0,r.kt)("inlineCode",{parentName:"h2"},"npm run")),(0,r.kt)("p",null,"By default, pnpm doesn't run arbitrary ",(0,r.kt)("inlineCode",{parentName:"p"},"pre")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"post")," hooks for user-defined scripts (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"prestart"),"). This behavior, inherited from npm, caused scripts to be implicit rather than explicit, obfuscating the execution flow. It also led to surprising executions with ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm serve")," also running ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm preserve"),"."),(0,r.kt)("p",null,"If for some reason you need the pre/post scripts behavior of npm, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"enable-pre-post-scripts")," option."),(0,r.kt)("h2",{id:"environment"},"Environment"),(0,r.kt)("p",null,"There are some environment variables that pnpm automatically creates for the executed scripts. These environment variables may be used to get contextual information about the running process."),(0,r.kt)("p",null,"These are the environment variables created by pnpm:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"npm_command")," - contains the name of the executed command. If the executed command is ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm run"),', then the value of this variable will be "run-script".')),(0,r.kt)("h2",{id:"opzioni"},"Opzioni"),(0,r.kt)("p",null,"Any options for the ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," command should be listed before the script's name. Options listed after the script's name are passed to the executed script."),(0,r.kt)("p",null,"All these will run pnpm CLI with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--silent")," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run --silent watch\npnpm --silent run watch\npnpm --silent watch\n")),(0,r.kt)("p",null,"Any arguments after the command's name are added to the executed script. So if ",(0,r.kt)("inlineCode",{parentName:"p"},"watch")," runs ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack --watch"),", then this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run watch --no-color\n")),(0,r.kt)("p",null,"will run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"webpack --watch --no-color\n")),(0,r.kt)("h3",{id:"script-shell"},"script-shell"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Predefinito: ",(0,r.kt)("strong",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},"Tipo: ",(0,r.kt)("strong",{parentName:"li"},"percorso"))),(0,r.kt)("p",null,"La shell da usare per gli script eseguiti con il comando ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run"),"."),(0,r.kt)("p",null,"Ad esempio, per forzare l'utilizzo di Git Bash su Windows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'pnpm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"\n')),(0,r.kt)("h3",{id:"shell-emulator"},"shell-emulator"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Predefinito: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tipo: ",(0,r.kt)("strong",{parentName:"li"},"Booleano"))),(0,r.kt)("p",null,"Quando ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", pnpm utilizzer\xe0 un'implementazione JavaScript di ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/shell"},"shell simili a bash")," per eseguire gli script."),(0,r.kt)("p",null,"Questa opzione semplifica lo scripting multipiattaforma. Ad esempio, per impostazione predefinita, lo script successivo avr\xe0 esito negativo sui sistemi non conformi a POSIX:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test": "NODE_ENV=test node test.js"\n}\n')),(0,r.kt)("p",null,"Ma se l'opzione ",(0,r.kt)("inlineCode",{parentName:"p"},"shell-emulator")," \xe8 impostata a ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", funzioner\xe0 su tutte le piattaforme."),(0,r.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,r.kt)("p",null,'Questo esegue un comando arbitrario dall\'oggetto "script" di ogni pacchetto. Se un pacchetto non ha il comando, viene saltato. Se nessuno dei pacchetti ha il comando, il comando fallisce.'),(0,r.kt)("h3",{id:"--if-present"},"--if-present"),(0,r.kt)("p",null,"Puoi usare il flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--if-present")," per evitare di uscire con un codice di uscita diverso da zero quando lo script non \xe8 definito. Questo consente di eseguire script potenzialmente indefiniti senza interrompere la catena di esecuzione."),(0,r.kt)("h3",{id:"--parallel"},"--parallel"),(0,r.kt)("p",null,"Ignora completamente la convaluta e l'ordinamento topologico, eseguendo un dato script immediatamente in tutti i pacchetti corrispondenti con output di streaming prefissato. Questo \xe8 il flag preferito per i processi a lungo termine su molti pacchetti, per esempio, un lungo processo di compilazione."),(0,r.kt)("h3",{id:"--stream"},"--stream"),(0,r.kt)("p",null,"Trasmetti immediatamente l'output dai processi figlio, con il prefisso della cartella del pacchetto di origine. Questo permette di interporre l'output di pacchetti diversi."),(0,r.kt)("h3",{id:"--aggregate-output"},"--aggregate-output"),(0,r.kt)("p",null,"Aggrega l'output dai processi figlio eseguiti in parallelo e stampa l'output solo quando il processo figlio \xe8 terminato. Rende molto pi\xf9 semplice la lettura di registri di grandi dimensioni dopo aver eseguito ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm -r <command>")," con ",(0,r.kt)("inlineCode",{parentName:"p"},"--parallel")," o con ",(0,r.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency=<number>")," (specialmente su CI). Solo ",(0,r.kt)("inlineCode",{parentName:"p"},"--reporter=append-only")," \xe8 supportato."),(0,r.kt)("h3",{id:"enable-pre-post-scripts"},"enable-pre-post-scripts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Predefinito: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tipo: ",(0,r.kt)("strong",{parentName:"li"},"Booleano"))),(0,r.kt)("p",null,"Quando ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", pnpm eseguir\xe0 automaticamente tutti gli script pre/post. Quindi l'esecuzione di ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm foo")," sar\xe0 come eseguire ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm prefoo && pnpm foo && pnpm postfoo"),"."),(0,r.kt)("h3",{id:"--resume-from-package_name"},"--resume-from ","<","package_name",">"),(0,r.kt)("p",null,"Added in: v7.22.0"),(0,r.kt)("p",null,"Resume execution from a particular project. This can be useful if you are working with a large workspace and you want to restart a build at a particular project without running through all of the projects that precede it in the build order."),(0,r.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,r.kt)("p",null,"Added in: v7.28.0"),(0,r.kt)("p",null,"Record the result of the scripts executions into a ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-exec-summary.json")," file."),(0,r.kt)("p",null,"An example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-exec-summary.json")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "executionStatus": {\n    "/Users/zoltan/src/pnpm/pnpm/cli/command": {\n      "status": "passed",\n      "duration": 1861.143042\n    },\n    "/Users/zoltan/src/pnpm/pnpm/cli/common-cli-options-help": {\n      "status": "passed",\n      "duration": 1865.914958\n    }\n  }\n')),(0,r.kt)("p",null,"Possible values of ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," are: 'passed', 'queued', 'running'."),(0,r.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/it/filtering"},"Ulteriori informazioni sui filtri.")))}d.isMDXComponent=!0}}]);