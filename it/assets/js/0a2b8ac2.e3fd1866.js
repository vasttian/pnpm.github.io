"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3674],{2549:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2022/12/30/yearly-update","metadata":{"permalink":"/it/blog/2022/12/30/yearly-update","editUrl":"https://translate.pnpm.io/project/pnpm/it","source":"@site/i18n/it/docusaurus-plugin-content-blog/2022-12-30-yearly-update.md","title":"L\'anno 2022 per pnpm","description":"\xc8 la fine dell\'anno. Un anno davvero difficile. Come forse saprai, vivo in Ucraina, quindi a causa della guerra della Russia contro di noi, \xe8 stato pi\xf9 difficile guidare questo progetto rispetto agli anni precedenti. Tuttavia, \xe8 stato un buon anno per pnpm. Abbiamo molti nuovi utenti, collaboratori e abbiamo implementato molte fantastiche funzionalit\xe0.","date":"2022-12-30T00:00:00.000Z","formattedDate":"30 dicembre 2022","tags":[],"readingTime":2.445,"hasTruncateMarker":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"frontMatter":{"title":"L\'anno 2022 per pnpm","author":"Zoltan Kochan","authorURL":"http://twitter.com/zoltankochan","authorImageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48","image":"/img/blog/2022-review.png"},"nextItem":{"title":"L\'anno 2021 per pnpm","permalink":"/it/blog/2021/12/29/yearly-update"}},"content":"\xc8 la fine dell\'anno. Un anno davvero difficile. Come forse saprai, vivo in Ucraina, quindi a causa della guerra della Russia contro di noi, \xe8 stato pi\xf9 difficile guidare questo progetto rispetto agli anni precedenti. Tuttavia, \xe8 stato un buon anno per pnpm. Abbiamo molti nuovi utenti, collaboratori e abbiamo implementato molte fantastiche funzionalit\xe0.\\n\\n![](/img/blog/2022-review.png)\\n\\n(l\'illustrazione sopra \xe8 stata generata da Midjourney. La tigre simboleggia l\'anno della tigre)\\n\\n\x3c!--truncate--\x3e\\n\\n## Utilizzo\\n\\n### Statistiche di download\\n\\nIl mio obiettivo quest\'anno era battere Lerna per numero di download. Siamo riusciti a raggiungere questo obiettivo [ad agosto](https://npm-stat.com/charts.html?package=pnpm&package=lerna&from=2022-01-01&to=2022-12-30):\\n\\n![](/img/blog/pnpm-vs-lerna-stats.png)\\n\\npnpm \xe8 stato scaricato [5 volte in pi\xf9](https://npm-stat.com/charts.html?package=pnpm&from=2016-12-01&to=2022-12-30) nel 2022 rispetto al 2021:\\n\\n![](/img/blog/download-stats-2022.png)\\n\\n### Visite alla documentazione\\n\\nRaccogliamo alcune statistiche non personalizzate dai nostri documenti utilizzando Google Analytics. Nel 2022, a volte abbiamo avuto pi\xf9 di 20.000 visitatori unici a settimana. Questo \xe8 10 volte di pi\xf9 rispetto al 2021!\\n\\n![](/img/blog/ga-unique-visits-2022.png)\\n\\n### Stelline su GitHub\\n\\nIl nostro [repository GitHub principale](https://github.com/pnpm/pnpm) ha ricevuto quasi +7.000 stelle quest\'anno.\\n\\n![](/img/blog/stars-2022.png)\\n\\n### I nostri collaboratori\\n\\nQuest\'anno abbiamo avuto molti collaboratori nuovi e attivi. Queste sono le persone che hanno unito almeno una PR nel 2022:\\n\\n* [Zoltan Kochan](https://github.com/zkochan)\\n* [chlorine](https://github.com/lvqq)\\n* [await-ovo](https://github.com/await-ovo)\\n* [Brandon Cheng](https://github.com/gluxon)\\n* [Dominic Elm](https://github.com/d3lm)\\n* [MCMXC](https://github.com/mcmxcdev)\\n* [\u90a3\u91cc\u597d\u810f\u4e0d\u53ef\u4ee5](https://github.com/dev-itsheng)\\n* [Homyee King](https://github.com/HomyeeKing)\\n* [Shinobu Hayashi](https://github.com/Shinyaigeek)\\n* [Black-Hole](https://github.com/BlackHole1)\\n* [Kenrick](https://github.com/kenrick95)\\n* [Weyert de Boer](https://github.com/weyert)\\n* [Glen Whitney](https://github.com/gwhitney)\\n* [Cheng](https://github.com/chengcyber)\\n* [zoomdong](https://github.com/fireairforce)\\n* [thinkhalo](https://github.com/ufec)\\n* [\u5b50\u77bb Luci](https://github.com/LuciNyan)\\n* [spencer17x](https://github.com/Spencer17x)\\n* [liuxingbaoyu](https://github.com/liuxingbaoyu)\\n* [\uc7a5\uc9c0\ud6c8](https://github.com/WhiteKiwi)\\n* [Jon de la Motte](https://github.com/jondlm)\\n* [Jack Works](https://github.com/Jack-Works)\\n* [milahu](https://github.com/milahu)\\n* [David Collins](https://github.com/David-Collins)\\n* [nikoladev](https://github.com/nikoladev)\\n* [Igor Bezkrovnyi](https://github.com/ibezkrovnyi)\\n* [Lev Chelyadinov](https://github.com/illright)\\n* [javier-garcia-meteologica](https://github.com/javier-garcia-meteologica)\\n\\n## Caratteristiche principali\\n\\n### Supporto di un `node_modules` hoisted senza collegamenti simbolici (dalla [v6.25.0](https://github.com/pnpm/pnpm/releases/tag/v6.25.0))\\n\\nProprio all\'inizio del 2022, abbiamo aggiunto il supporto per il \\"tradizionale\\" hoisted (ovvero flat `node_modules`). Usiamo l\'algoritmo di hoisting di Yarn per creare un corretto `node_modules` hoisted. Questa nuova impostazione ha sostanzialmente reso pnpm compatibile con tutti gli stack Node.js compatibili con la CLI di npm.\\n\\nPer utilizzare la struttura di directory hoisted per `node_modules`, utilizza l\'impostazione `node-linker=hoisted` in un file `.npmrc`.\\n\\n### Cache con effetti collaterali (dalla [v7.0.0](https://github.com/pnpm/pnpm/releases/tag/v7.0.0))\\n\\nDalla v7, [side-effect-cache][] \xe8 abilitato per impostazione predefinita, quindi le dipendenze che dovrebbero essere create vengono create solo una volta su una macchina. Ci\xf2 migliora notevolmente la velocit\xe0 di installazione nei progetti che hanno dipendenze con gli script di compilazione.\\n\\n### Patch delle dipendenze (dalla [v7.4.0](https://github.com/pnpm/pnpm/releases/tag/v7.4.0))\\n\\nIl comando [`pnpm patch`][] \xe8 stato aggiunto per correggere le dipendenze nei tuoi `node_modules`.\\n\\n### Strategia di risoluzione basata sul tempo (dalla [v7.10.0](https://github.com/pnpm/pnpm/releases/tag/v7.10.0))\\n\\n\xc8 stata aggiunta una nuova modalit\xe0 di risoluzione a pnpm, che dovrebbe rendere pi\xf9 sicuro l\'aggiornamento delle dipendenze. \xc8 possibile modificare la modalit\xe0 di risoluzione con l\'impostazione [resolution-mode][].\\n\\n### Elenco delle licenze delle dipendenze (dalla [v7.17.0](https://github.com/pnpm/pnpm/releases/tag/v7.17.0))\\n\\nYou may now use the [`pnpm licenses list`][] command to check the licenses of the installed packages.\\n\\n[side-effect-cache]: /npmrc#side-effects-cache\\n\\n[`pnpm patch`]: /cli/patch\\n\\n[resolution-mode]: https://pnpm.io/npmrc#resolution-mode\\n\\n[`pnpm licenses list`]: /cli/licenses"},{"id":"/2021/12/29/yearly-update","metadata":{"permalink":"/it/blog/2021/12/29/yearly-update","editUrl":"https://translate.pnpm.io/project/pnpm/it","source":"@site/i18n/it/docusaurus-plugin-content-blog/2021-12-29-yearly-update.md","title":"L\'anno 2021 per pnpm","description":"\xc8 la fine dell\'anno ed \xe8 stato un buon anno per pnpm, quindi vediamo come \xe8 andata.","date":"2021-12-29T00:00:00.000Z","formattedDate":"29 dicembre 2021","tags":[],"readingTime":2.64,"hasTruncateMarker":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"frontMatter":{"title":"L\'anno 2021 per pnpm","author":"Zoltan Kochan","authorURL":"http://twitter.com/zoltankochan","authorImageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},"prevItem":{"title":"L\'anno 2022 per pnpm","permalink":"/it/blog/2022/12/30/yearly-update"},"nextItem":{"title":"Opzioni di configurazione di Node-Modules con pnpm","permalink":"/it/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"\xc8 la fine dell\'anno ed \xe8 stato un buon anno per pnpm, quindi vediamo come \xe8 andata.\\n\\n\x3c!--truncate--\x3e\\n\\n## Utilizzo\\n\\n### Statistiche di download\\n\\nIl mio obiettivo quest\'anno era battere Bower per numero di download. Siamo stati in grado di raggiungere questo obiettivo [a novembre](https://npm-stat.com/charts.html?package=pnpm&package=bower&from=2021-01-01&to=2021-12-29):\\n\\n![](/img/blog/pnpm-vs-bower-stats.png)\\n\\npnpm \xe8 stato scaricato circa [3 volte in pi\xf9](https://npm-stat.com/charts.html?package=pnpm&from=2016-12-01&to=2021-12-29) nel 2021 rispetto al 2020:\\n\\n![](/img/blog/download-stats-2021.png)\\n\\n:::note\\n\\nQueste statistiche non misurano nemmeno tutti i diversi modi in cui pnpm pu\xf2 essere installato! Misurano solo i download del [pacchetto pnpm di npm](https://www.npmjs.com/package/pnpm). Quest\'anno abbiamo anche aggiunto versioni binarie compilate di pnpm, che vengono fornite in modo diverso.\\n\\n:::\\n\\n### Visite alla documentazione\\n\\nRaccogliamo alcune statistiche non personalizzate dai nostri documenti utilizzando Google Analytics. Nel 2021, a volte abbiamo avuto pi\xf9 di 2.000 visitatori unici a settimana.\\n\\n![](/img/blog/ga-unique-visits-2021.png)\\n\\nLa maggior parte dei nostri utenti proviene dagli Stati Uniti e dalla Cina.\\n\\n![](/img/blog/countries-2021.png)\\n\\n### Stelline su GitHub\\n\\nIl nostro [repository GitHub principale](https://github.com/pnpm/pnpm) ha ricevuto +5.000 stelle quest\'anno.\\n\\n![](/img/blog/stars-2021.png)\\n\\n### Nuovi utenti\\n\\nIl nostro pi\xf9 grande nuovo utente quest\'anno \xe8 [Bytedance](https://github.com/pnpm/pnpm.github.io/pull/89) (la societ\xe0 dietro TikTok).\\n\\nInoltre, molti grandi progetti open source hanno iniziato a utilizzare pnpm. Alcuni sono passati a pnpm grazie al suo grande supporto dei monorepo:\\n\\n* [Vue](https://github.com/vuejs/vue-next)\\n* [Vite](https://github.com/vitejs/vite)\\n* e [altri](https://pnpm.io/workspaces#usage-examples)\\n\\nAlcuni hanno cambiato perch\xe9 apprezzano quanto sia efficiente, veloce e bello pnpm:\\n\\n* [Autoprefixer](https://twitter.com/Autoprefixer/status/1476226146488692736)\\n* [PostCSS](https://twitter.com/PostCSS/status/1470438664006258701)\\n* [Browserslist](https://twitter.com/Browserslist/status/1468264308308156419)\\n\\n## Caratteristiche principali\\n\\n### Nuovo formato del lockfile (dal [v6.0.0](https://github.com/pnpm/pnpm/releases/tag/v6.0.0))\\n\\nUno dei primi e pi\xf9 importanti cambiamenti di quest\'anno \xe8 stato il nuovo formato `pnpm-lock.yaml`. Questo \xe8 stato un cambiamento importante, quindi abbiamo dovuto rilasciare la v6. Ma \xe8 stato un successo. Il vecchio lockfile causava spesso conflitti con Git. Da quando \xe8 stato introdotto il nuovo formato, non abbiamo ricevuto alcun reclamo sui conflitti con Git.\\n\\n### Gestione delle versioni di Node.js (da [v6.12.0](https://github.com/pnpm/pnpm/releases/tag/v6.12.0))\\n\\nAbbiamo fornito un nuovo comando (`pnpm env`) che permette di gestire le versioni di Node.js. Quindi puoi usare pnpm invece dei gestori di versione di Node.js come nvm o Volta.\\n\\nInoltre, pnpm viene fornito come eseguibile autonomo, quindi puoi eseguirlo anche senza Node.js preinstallato sul sistema.\\n\\n### Iniezione di dipendenze locali (da [v6.20.0](https://github.com/pnpm/pnpm/releases/tag/v6.20.0))\\n\\nPuoi \\"iniettare\\" una dipendenza locale. Per impostazione predefinita, le dipendenze locali sono collegate simbolicamente a `node_modules` ma con questa nuova funzionalit\xe0 puoi invece indicare a pnpm di collegare i file del pacchetto.\\n\\n### Segnalazione migliorata dei problemi di dipendenze peer (da [v6.24.0](https://github.com/pnpm/pnpm/releases/tag/v6.24.0))\\n\\nI problemi di dipendenze peer venivano stampati come testo normale ed era difficile capirli. Ora sono tutti raggruppati e stampati in una bella struttura gerarchica.\\n\\n## La competizione\\n\\n### Yarn\\n\\nYarn ha aggiunto un linker pnpm in [v3.1](https://dev.to/arcanis/yarn-31-corepack-esm-pnpm-optional-packages--3hak#new-install-mode-raw-pnpm-endraw-). Quindi Yarn pu\xf2 creare una struttura della cartella node_modules simile a quella creata da pnpm.\\n\\nInoltre, il team di Yarn prevede di implementare un archivio indirizzabile al contenuto per essere pi\xf9 efficiente in termini di spazio su disco.\\n\\n### npm\\n\\nIl team di npm ha deciso di adottare anche la struttura della cartella node_modules simbolica utilizzata da pnpm ([RFC](https://github.com/npm/rfcs/blob/main/accepted/0042-isolated-mode.md) correlato).\\n\\n### Altri\\n\\n[Bun](https://twitter.com/jarredsumner/status/1473416431291174912/photo/1) scritto in Zig e [Volt](https://github.com/voltpkg/volt) scritto in Rust entrambi affermano di essere pi\xf9 veloci di npm/Yarn/pnpm. Non ho ancora valutato questi nuovi gestori di pacchetti.\\n\\n## Progetti futuri\\n\\nPi\xf9 veloce, migliore, il migliore."},{"id":"/2020/10/17/node-modules-configuration-options-with-pnpm","metadata":{"permalink":"/it/blog/2020/10/17/node-modules-configuration-options-with-pnpm","editUrl":"https://translate.pnpm.io/project/pnpm/it","source":"@site/i18n/it/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md","title":"Opzioni di configurazione di Node-Modules con pnpm","description":"Esistono molti modi per creare una cartella nodemodules. Il tuo obiettivo deve essere quello di creare la pi\xf9 rigorosa, ma se ci\xf2 non \xe8 possibile, ci sono anche opzioni per creare una cartella nodemodules sciolta.","date":"2020-10-17T00:00:00.000Z","formattedDate":"17 ottobre 2020","tags":[],"readingTime":1.855,"hasTruncateMarker":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"frontMatter":{"title":"Opzioni di configurazione di Node-Modules con pnpm","author":"Zoltan Kochan","authorURL":"http://twitter.com/zoltankochan","authorImageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},"prevItem":{"title":"L\'anno 2021 per pnpm","permalink":"/it/blog/2021/12/29/yearly-update"},"nextItem":{"title":"La node_modules flat non \xe8 l\'unico modo","permalink":"/it/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},"content":"Esistono molti modi per creare una cartella node_modules. Il tuo obiettivo deve essere quello di creare la pi\xf9 rigorosa, ma se ci\xf2 non \xe8 possibile, ci sono anche opzioni per creare una cartella node_modules sciolta.\\n\\n\x3c!--truncate--\x3e\\n\\n## Configurazione predefinita\\n\\nPer impostazione predefinita, pnpm v5 crea una cartella node_modules semi-rigorosa. Semi-rigorosa significa che la tua applicazione sar\xe0 in grado di utilizzare solo i pacchetti che sono stati aggiunti come dipendenze in `package.json` (con alcune eccezioni). Tuttavia, le tue dipendenze saranno in grado di accedere a qualsiasi pacchetto.\\n\\nLa configurazione predefinita \xe8 simile a questa:\\n\\n```ini\\n; Tutti i pacchetti vengono installati in node_modules/.pnpm/node_modules\\nhoist-pattern[]=*\\n\\n; Tutti i tipi vengono installati alla radice per rendere felice TypeScript\\npublic-hoist-pattern[]=*types*\\n\\n; Tutti i pacchetti relativi a ESLint vengono installati alla radice anch\'essi\\npublic-hoist-pattern[]=*eslint*\\n```\\n\\n## Plug\'n\'Play. La configurazione pi\xf9 rigorosa\\n\\npnpm supporta il [Plug\'n\'Play di Yarn](https://yarnpkg.com/features/pnp) dalla versione v5.9. Con PnP, sia la tua applicazione che le dipendenze della tua applicazione avranno accesso solo alle loro dipendenze dichiarate. Questo \xe8 ancora pi\xf9 rigoroso dell\'impostazione `hoist=false` perch\xe9 all\'interno di un monorepo, la tua applicazione non sar\xe0 in grado di accedere nemmeno alle dipendenze del progetto root.\\n\\nPer utilizzare Plug\'n\'Play, imposta queste impostazioni:\\n\\n```ini\\nnode-linker=pnp\\nsymlink=false\\n```\\n\\n## Una cartella di moduli rigorosa e tradizionale\\n\\nSe non sei ancora pronto per utilizzare PnP, puoi comunque essere rigoroso e consentire solo ai pacchetti di accedere alle proprie dipendenze impostando la configurazione dell\'hoist su false:\\n\\n```ini\\nhoist=false\\n```\\n\\nTuttavia, se alcune delle tue dipendenze stanno tentando di accedere a pacchetti che non hanno nelle dipendenze, hai due opzioni:\\n\\n1. Crea un `pnpmfile.js` e usa un [hook](/pnpmfile) per aggiungere la dipendenza mancante al manifest del pacchetto.\\n\\n2. Aggiungi un modello all\'impostazione `hoist-pattern`. Ad esempio, se il modulo non trovato \xe8 `babel-core`, aggiungi la seguente impostazione a `.npmrc`:\\n\\n    ```ini\\n    hoist-pattern[]=babel-core\\n    ```\\n\\n## Il caso peggiore - installazione alla radice\\n\\nAlcuni strumenti potrebbero non funzionare anche con la configurazione predefinita di pnpm, che installa tutto alla radice dell\'archivio virtuale e alcuni pacchetti alla radice. In questo caso, puoi installare tutto o un sottoinsieme di dipendenze alla radice della cartella dei moduli.\\n\\nInstalla tutto alla radice di node_modules:\\n\\n```ini\\nshamefully-hoist=true\\n```\\n\\nInstalla solo i pacchetti che corrispondono a un modello:\\n\\n```ini\\npublic-hoist-pattern[]=babel-*\\n```"},{"id":"/2020/05/27/flat-node-modules-is-not-the-only-way","metadata":{"permalink":"/it/blog/2020/05/27/flat-node-modules-is-not-the-only-way","editUrl":"https://translate.pnpm.io/project/pnpm/it","source":"@site/i18n/it/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md","title":"La node_modules flat non \xe8 l\'unico modo","description":"I nuovi utenti di pnpm mi chiedono spesso della strana struttura di node_modules che crea pnpm. Perch\xe9 non \xe8 piatta? Dove sono tutte le dipendenze secondarie?","date":"2020-05-27T00:00:00.000Z","formattedDate":"27 maggio 2020","tags":[],"readingTime":2.73,"hasTruncateMarker":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"frontMatter":{"title":"La node_modules flat non \xe8 l\'unico modo","author":"Zoltan Kochan","authorURL":"http://twitter.com/zoltankochan","authorImageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},"prevItem":{"title":"Opzioni di configurazione di Node-Modules con pnpm","permalink":"/it/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"I nuovi utenti di pnpm mi chiedono spesso della strana struttura di `node_modules` che crea pnpm. Perch\xe9 non \xe8 piatta? Dove sono tutte le dipendenze secondarie?\\n\\n\x3c!--truncate--\x3e\\n\\n> Presumo che i lettori dell\'articolo abbiano gi\xe0 familiarit\xe0 con la cartella `node_modules` piatta creata da npm e Yarn. Se non capisci perch\xe9 npm 3 ha dovuto iniziare a utilizzare `node_modules` flat nella v3, puoi trovare un po\' di preistoria in [Perch\xe9 dovremmo usare pnpm?](https://www.kochan.io/nodejs/why-should-we-use-pnpm.html).\\n\\nPerch\xe9 allora `node_modules` di pnpm \xe8 insolito? Creiamo due cartelle ed eseguiamo `npm add express` in una di esse e `pnpm add express` nell\'altra. Ecco la parte superiore di ci\xf2 che si ottiene in `node_modules` della prima cartella:\\n\\n```text\\n.bin\\naccepts\\narray-flatten\\nbody-parser\\nbytes\\ncontent-disposition\\ncookie-signature\\ncookie\\ndebug\\ndepd\\ndestroy\\nee-first\\nencodeurl\\nescape-html\\netag\\nexpress\\n```\\n\\nPuoi vedere l\'intera cartella [qui](https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules).\\n\\nE questo \xe8 ci\xf2 che ottieni in `node_modules` creato da pnpm:\\n\\n```text\\n.pnpm\\n.modules.yaml\\nexpress\\n```\\n\\nPuoi controllarlo [qui](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules).\\n\\nAllora, dove sono tutte le dipendenze? C\'\xe8 solo una cartella in `node_modules` chiamata `.pnpm` e un collegamento simbolico chiamato `express`. Bene, abbiamo installato solo `express`, quindi questo \xe8 l\'unico pacchetto a cui la tua applicazione deve avere accesso\\n\\n> Leggi di pi\xf9 sul perch\xe9 la severit\xe0 di pnpm \xe8 una buona cosa [qui](https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308)\\n\\nVediamo cosa c\'\xe8 dentro `express`:\\n\\n```text\\n\u25be node_modules\\n  \u25b8 .pnpm\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n  .modules.yaml\\n```\\n\\n`express` non ha `node_modules`? Dove sono tutte le dipendenze di `express`?\\n\\nIl trucco \xe8 che `express` \xe8 solo un collegamento simbolico. Quando Node.js risolve le dipendenze, utilizza le loro posizioni reali, quindi non conserva i collegamenti simbolici. Ma dov\'\xe8 la vera posizione di `express`, si potrebbe chiedere?\\n\\nQui: [node_modules/.pnpm/express@4.17.1/node_modules/express](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express).\\n\\nOK, ora conosciamo lo scopo della cartella `.pnpm/`. `.pnpm/` memorizza tutti i pacchetti in una struttura di cartelle piatte, quindi ogni pacchetto pu\xf2 essere trovato in una cartella denominata con questo modello:\\n\\n```text\\n.pnpm/<name>@<version>/node_modules/<name>\\n```\\n\\nLa chiamiamo cartella dell\'archivio virtuale.\\n\\nQuesta struttura piatta evita i problemi di percorso lunghi che sono stati causati dai `node_modules` annidati creati da npm v2 ma mantiene i pacchetti isolati a differenza dei `node_modules` piatti creati da npm v3,4,5,6 o yarn v1.\\n\\nOra diamo un\'occhiata alla vera posizione di `express`:\\n\\n```text\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n```\\n\\n\xc8 una truffa? Manca ancora la cartella `node_modules`! Il secondo trucco della struttura `node_modules` di pnpm \xe8 che le dipendenze dei pacchetti sono sullo stesso livello di cartella su cui si trova la posizione reale del pacchetto dipendente. Quindi le dipendenze di `express` non sono in `.pnpm/express@4.17.1/node_modules/express/node_modules/` ma in [.pnpm/express@4.17.1/node_modules/](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules):\\n\\n```text\\n\u25be node_modules\\n  \u25be .pnpm\\n    \u25b8 accepts@1.3.5\\n    \u25b8 array-flatten@1.1.1\\n    ...\\n    \u25be express@4.16.3\\n      \u25be node_modules\\n        \u25b8 accepts\\n        \u25b8 array-flatten\\n        \u25b8 body-parser\\n        \u25b8 content-disposition\\n        ...\\n        \u25b8 etag\\n        \u25be express\\n          \u25b8 lib\\n            History.md\\n            index.js\\n            LICENSE\\n            package.json\\n            Readme.md\\n```\\n\\nTutte le dipendenze di `express` sono collegamenti simbolici a cartelle appropriate in `node_modules/.pnpm/`. Posizionare le dipendenze di `express` un livello in alto permette di evitare i collegamenti simbolici circolari.\\n\\nQuindi, come puoi vedere, anche se la struttura `node_modules` di pnpm sembra inizialmente inusuale:\\n\\n1. \xe8 completamente compatibile con Node.js\\n2. i pacchetti sono ben raggruppati con le loro dipendenze\\n\\nLa struttura \xe8 un po\' [pi\xf9 complessa](/how-peers-are-resolved) per i pacchetti con dipendenze peer ma l\'idea \xe8 la stessa: usare collegamenti simbolici per creare un annidamento con una struttura di cartelle piatta."}]}')}}]);