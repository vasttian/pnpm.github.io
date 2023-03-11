"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[215],{9613:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(9496);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=i,h=m["".concat(o,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6561:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(2962),i=a(2742),r=(a(9496),a(9613)),s=["components"],l={title:"L'ann\xe9e 2022 pour pnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48",image:"/img/blog/2022-review.png"},o=void 0,p={permalink:"/fr/blog/2022/12/30/yearly-update",editUrl:"https://translate.pnpm.io/project/pnpm/fr",source:"@site/i18n/fr/docusaurus-plugin-content-blog/2022-12-30-yearly-update.md",title:"L'ann\xe9e 2022 pour pnpm",description:"C'est la fin de l'ann\xe9e. Une ann\xe9e vraiment difficile. Comme vous le savez peut-\xeatre, je vis en Ukraine, donc en raison de l'invasion russe contre nous, il \xe9tait plus difficile de diriger ce projet compar\xe9 aux ann\xe9es pr\xe9c\xe9dentes. N\xe9anmoins, ce fut une bonne ann\xe9e pour pnpm. Nous avons eu beaucoup de nouveaux utilisateurs, contributeurs, et nous avons impl\xe9ment\xe9 de nombreuses fonctionnalit\xe9s int\xe9ressantes.",date:"2022-12-30T00:00:00.000Z",formattedDate:"30 d\xe9cembre 2022",tags:[],readingTime:2.64,hasTruncateMarker:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"L'ann\xe9e 2022 pour pnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48",image:"/img/blog/2022-review.png"},nextItem:{title:"L'ann\xe9e 2021 pour pnpm",permalink:"/fr/blog/2021/12/29/yearly-update"}},u={authorsImageUrls:[void 0]},c=[{value:"Utilisation",id:"utilisation",level:2},{value:"Statistiques de t\xe9l\xe9chargement",id:"statistiques-de-t\xe9l\xe9chargement",level:3},{value:"Visites des documents",id:"visites-des-documents",level:3},{value:"\xc9toiles GitHub",id:"\xe9toiles-github",level:3},{value:"Nos contributeurs",id:"nos-contributeurs",level:3},{value:"Fonctionnalit\xe9s marquantes",id:"fonctionnalit\xe9s-marquantes",level:2},{value:"Support d&#39;un <code>node_modules</code> standard sans liens symboliques (depuis la v6.25.0)",id:"support-dun-node_modules-standard-sans-liens-symboliques-depuis-la-v6250",level:3},{value:"Cache d&#39;effets secondaires (depuis la v7.0.0)",id:"cache-deffets-secondaires-depuis-la-v700",level:3},{value:"Correction des d\xe9pendances (depuis la v7.4.0)",id:"correction-des-d\xe9pendances-depuis-la-v740",level:3},{value:"Strat\xe9gie de r\xe9solution bas\xe9e sur le temps (depuis la v7.10.0)",id:"strat\xe9gie-de-r\xe9solution-bas\xe9e-sur-le-temps-depuis-la-v7100",level:3},{value:"Liste des licences des d\xe9pendances (depuis la v7.17.0)",id:"liste-des-licences-des-d\xe9pendances-depuis-la-v7170",level:3}],m={toc:c};function d(e){var t=e.components,l=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"C'est la fin de l'ann\xe9e. Une ann\xe9e vraiment difficile. Comme vous le savez peut-\xeatre, je vis en Ukraine, donc en raison de l'invasion russe contre nous, il \xe9tait plus difficile de diriger ce projet compar\xe9 aux ann\xe9es pr\xe9c\xe9dentes. N\xe9anmoins, ce fut une bonne ann\xe9e pour pnpm. Nous avons eu beaucoup de nouveaux utilisateurs, contributeurs, et nous avons impl\xe9ment\xe9 de nombreuses fonctionnalit\xe9s int\xe9ressantes."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2423).Z,width:"640",height:"640"})),(0,r.kt)("p",null,"(l'illustration ci-dessus a \xe9t\xe9 g\xe9n\xe9r\xe9e par Midjourney. Le tigre symbolise l'ann\xe9e du tigre)"),(0,r.kt)("h2",{id:"utilisation"},"Utilisation"),(0,r.kt)("h3",{id:"statistiques-de-t\xe9l\xe9chargement"},"Statistiques de t\xe9l\xe9chargement"),(0,r.kt)("p",null,"Mon objectif cette ann\xe9e \xe9tait de battre Lerna en nombre de t\xe9l\xe9chargements. Nous avons pu atteindre cet objectif ",(0,r.kt)("a",{parentName:"p",href:"https://npm-stat.com/charts.html?package=pnpm&package=lerna&from=2022-01-01&to=2022-12-30"},"en ao\xfbt"),"\xa0:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(6717).Z,width:"997",height:"400"})),(0,r.kt)("p",null,"pnpm a \xe9t\xe9 t\xe9l\xe9charg\xe9 plus de ",(0,r.kt)("a",{parentName:"p",href:"https://npm-stat.com/charts.html?package=pnpm&from=2016-12-01&to=2022-12-30"},"5 fois plus")," en 2022 qu'en 2021 :"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1119).Z,width:"997",height:"400"})),(0,r.kt)("h3",{id:"visites-des-documents"},"Visites des documents"),(0,r.kt)("p",null,"Nous recueillons des statistiques non personnalis\xe9es sur nos documentations \xe0 l'aide de Google Analytics. En 2022, nous avions parfois eu plus de 20 000 visiteurs uniques par semaine. C'est 10 fois plus qu'en 2021 !"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(7865).Z,width:"778",height:"391"})),(0,r.kt)("h3",{id:"\xe9toiles-github"},"\xc9toiles GitHub"),(0,r.kt)("p",null,"Notre ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm"},"d\xe9pot GitHub principal")," a presque re\xe7u plus de 7 000 \xe9toiles cette ann\xe9e."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2871).Z,width:"584",height:"787"})),(0,r.kt)("h3",{id:"nos-contributeurs"},"Nos contributeurs"),(0,r.kt)("p",null,"Nous avons eu beaucoup de contributeurs nouveux et actifs cette ann\xe9e. Voici les personnes qui ont eu au moins une PR d'int\xe9gr\xe9e dans pnpm en 2022 :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/zkochan"},"Zoltan Kochan")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lvqq"},"chlorine")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/await-ovo"},"await-ovo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gluxon"},"Brandon Cheng")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/d3lm"},"Dominic Elm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mcmxcdev"},"MCMXC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/dev-itsheng"},"\u90a3\u91cc\u597d\u810f\u4e0d\u53ef\u4ee5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/HomyeeKing"},"Homyee King")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Shinyaigeek"},"Shinobu Hayashi")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/BlackHole1"},"Black-Hole")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kenrick95"},"Kenrick")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/weyert"},"Weyert de Boer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gwhitney"},"Glen Whitney")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/chengcyber"},"Cheng")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fireairforce"},"zoomdong")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ufec"},"thinkhalo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/LuciNyan"},"\u5b50\u77bb Luci")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Spencer17x"},"spencer17x")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/liuxingbaoyu"},"liuxingbaoyu")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/WhiteKiwi"},"\uc7a5\uc9c0\ud6c8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jondlm"},"Jon de la Motte")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Jack-Works"},"Jack Works")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/milahu"},"milahu")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/David-Collins"},"David Collins")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nikoladev"},"nikoladev")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ibezkrovnyi"},"Igor Bezkrovnyi")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/illright"},"Lev Chelyadinov")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/javier-garcia-meteologica"},"javier-garcia-meteologica"))),(0,r.kt)("h2",{id:"fonctionnalit\xe9s-marquantes"},"Fonctionnalit\xe9s marquantes"),(0,r.kt)("h3",{id:"support-dun-node_modules-standard-sans-liens-symboliques-depuis-la-v6250"},"Support d'un ",(0,r.kt)("inlineCode",{parentName:"h3"},"node_modules")," standard sans liens symboliques (depuis la ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v6.25.0"},"v6.25.0"),")"),(0,r.kt)("p",null,'D\xe8s le d\xe9but de 2022, nous avons ajout\xe9 la prise en charge du "traditionnel" ',(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," (aussi appel\xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," plat). Nous utilisons l'algorithme de hissage de Yarn pour cr\xe9er un ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," plat correct. Cette nouvelle fonctionnalit\xe9 a essentiellement rendu pnpm compatible avec toutes les piles Node.js qui sont compatibles avec la CLI npm."),(0,r.kt)("p",null,"Pour utiliser la structure de ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," plat, utilisez le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"node-linker=hoisted")," dans un fichier ",(0,r.kt)("inlineCode",{parentName:"p"},".npmrc"),"."),(0,r.kt)("h3",{id:"cache-deffets-secondaires-depuis-la-v700"},"Cache d'effets secondaires (depuis la ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v7.0.0"},"v7.0.0"),")"),(0,r.kt)("p",null,"Depuis la v7, le cache d'effets secondaires (",(0,r.kt)("a",{parentName:"p",href:"/npmrc#side-effects-cache"},"side-effect-cache"),") est activ\xe9 par d\xe9faut. Les d\xe9pendances qui doivent \xeatre compil\xe9es ne le sont donc qu'une seule fois sur une machine. Cela am\xe9liore consid\xe9rablement la vitesse d'installation dans les projets qui ont des d\xe9pendances avec des scripts de compilation."),(0,r.kt)("h3",{id:"correction-des-d\xe9pendances-depuis-la-v740"},"Correction des d\xe9pendances (depuis la ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v7.4.0"},"v7.4.0"),")"),(0,r.kt)("p",null,"La commande ",(0,r.kt)("a",{parentName:"p",href:"/cli/patch"},(0,r.kt)("inlineCode",{parentName:"a"},"pnpm patch"))," a \xe9t\xe9 ajout\xe9e pour corriger les d\xe9pendances dans votre ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,r.kt)("h3",{id:"strat\xe9gie-de-r\xe9solution-bas\xe9e-sur-le-temps-depuis-la-v7100"},"Strat\xe9gie de r\xe9solution bas\xe9e sur le temps (depuis la ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v7.10.0"},"v7.10.0"),")"),(0,r.kt)("p",null,"Un nouveau mode de r\xe9solution a \xe9t\xe9 ajout\xe9 \xe0 pnpm, ce qui devrait rendre plus s\xe9curis\xe9e la mise \xe0 jour de d\xe9pendances. Vous pouvez changer le mode de r\xe9solution avec le param\xe8tre ",(0,r.kt)("a",{parentName:"p",href:"https://pnpm.io/npmrc#resolution-mode"},"resolution-mode"),"."),(0,r.kt)("h3",{id:"liste-des-licences-des-d\xe9pendances-depuis-la-v7170"},"Liste des licences des d\xe9pendances (depuis la ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v7.17.0"},"v7.17.0"),")"),(0,r.kt)("p",null,"Vous pouvez maintenant utiliser la commande ",(0,r.kt)("a",{parentName:"p",href:"/cli/licenses"},(0,r.kt)("inlineCode",{parentName:"a"},"pnpm licences list"))," pour afficher les licences des d\xe9pendances install\xe9es."))}d.isMDXComponent=!0},2423:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2022-review-092f8f0dfe82b760c2e90fd776d82f75.png"},1119:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/download-stats-2022-e4de79bf61e1066802166f9d97cb36ac.png"},7865:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ga-unique-visits-2022-b2e9bf0b6c559a5c59fdbfd8bb1861f0.png"},6717:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pnpm-vs-lerna-stats-cad28f3b9685ef684c864f919f7f9c5e.png"},2871:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/stars-2022-434ca95e6da688fdff1bb1bf89d6a2d9.png"}}]);