"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9537],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(t),d=r,k=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return t?a.createElement(k,o(o({ref:n},m),{},{components:t})):a.createElement(k,o({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6984:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var a=t(2962),r=t(2742),i=(t(9496),t(9613)),o=["components"],p={id:"completion",title:"Isi Otomatis untuk Tab Baris Perintah"},l=void 0,s={unversionedId:"completion",id:"completion",title:"Isi Otomatis untuk Tab Baris Perintah",description:"Tidak seperti manajer paket populer lain yang biasanya membutuhkan plugin, pnpm mendukung pengisian otomatis dengan tab pada baris perintah untuk Bash, Zsh, Fish, dan shell sejenis.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/completion.md",sourceDirName:".",slug:"/completion",permalink:"/id/next/completion",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/id",tags:[],version:"current",frontMatter:{id:"completion",title:"Isi Otomatis untuk Tab Baris Perintah"},sidebar:"docs",previous:{title:"Alias",permalink:"/id/next/aliases"},next:{title:"Using Changesets with pnpm",permalink:"/id/next/using-changesets"}},m={},u=[{value:"Gambar (hanya di macOS)",id:"gambar-hanya-di-macos",level:2}],c={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Tidak seperti manajer paket populer lain yang biasanya membutuhkan plugin, pnpm mendukung pengisian otomatis dengan tab pada baris perintah untuk Bash, Zsh, Fish, dan shell sejenis."),(0,i.kt)("p",null,"Untuk menyiapkan Pengisian otomatis, jalankan:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion\n")),(0,i.kt)("p",null,"Antarmuka berbasis Baris Perintah (CLI) akan menanyakan ",(0,i.kt)("em",{parentName:"p"},"shell")," mana yang akan menggunakan skrip isi otomatis. Contoh lain, jika ingin menentukan target shell sendiri, dapat menggunakan perintah:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"pnpm install-completion zsh\n")),(0,i.kt)("p",null,"Untuk melihat contoh isi-otomatis, baca ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-v4-9-comes-with-command-completion-a411715260b4"},"artikel ini"),"."),(0,i.kt)("h2",{id:"gambar-hanya-di-macos"},"Gambar (hanya di macOS)"),(0,i.kt)("p",null,"Anda bisa mendapatkan isi-otomatis gaya IDE untuk pnpm dengan ",(0,i.kt)("a",{parentName:"p",href:"https://fig.io/"},"Fig"),". Ia bekerja di Bash, Zsh, dan Fish."),(0,i.kt)("p",null,"Untuk menginstal, jalankan:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"brew install fig\n")))}d.isMDXComponent=!0}}]);