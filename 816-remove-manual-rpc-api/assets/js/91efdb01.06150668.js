"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3805],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,v=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(v,s(s({ref:t},l),{},{components:r})):a.createElement(v,s({ref:t},l))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45294:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={description:"Access a user's MetaMask provider using metamask-extension-provider.",sidebar_position:8},s="Access a user's MetaMask provider",i={unversionedId:"how-to/access-provider",id:"how-to/access-provider",title:"Access a user's MetaMask provider",description:"Access a user's MetaMask provider using metamask-extension-provider.",source:"@site/wallet/how-to/access-provider.md",sourceDirName:"how-to",slug:"/how-to/access-provider",permalink:"/816-remove-manual-rpc-api/wallet/how-to/access-provider",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/access-provider.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"Access a user's MetaMask provider using metamask-extension-provider.",sidebar_position:8},sidebar:"walletSidebar",previous:{title:"Request permissions",permalink:"/816-remove-manual-rpc-api/wallet/how-to/request-permissions"},next:{title:"Discover multiple wallets",permalink:"/816-remove-manual-rpc-api/wallet/how-to/discover-multiple-wallets"}},p={},c=[{value:"Use @metamask/providers",id:"use-metamaskproviders",level:2}],l={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"access-a-users-metamask-provider"},"Access a user's MetaMask provider"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/providers"},(0,n.kt)("inlineCode",{parentName:"a"},"@metamask/providers"))," module to access a user's\nMetaMask provider from other sources, such as external extension providers and inpage providers."),(0,n.kt)("p",null,"The accounts provided by this provider are the user's MetaMask accounts.\nWhen sending signing requests to this provider, MetaMask prompts the user to sign with their accounts."),(0,n.kt)("p",null,"This module works in Chrome and Firefox."),(0,n.kt)("h2",{id:"use-metamaskproviders"},"Use @metamask/providers"),(0,n.kt)("p",null,"Install ",(0,n.kt)("inlineCode",{parentName:"p"},"@metamask/providers")," using the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @metamask/providers\n")),(0,n.kt)("p",null,"Initialize the provider using the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { initializeProvider } from '@metamask/providers';\n\n// Create a stream to a remote provider\nconst metamaskStream = new LocalMessageDuplexStream({\n  name: 'inpage',\n  target: 'contentscript',\n});\n\n// Initialize the provider and set it as window.ethereum\ninitializeProvider({\n  connectionStream: metamaskStream,\n});\n")),(0,n.kt)("p",null,"Create an external extension provider using the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createExternalExtensionProvider } from '@metamask/providers';\n\nlet provider = createExternalExtensionProvider();\nconst accounts = await provider.request({ method: 'eth_requestAccounts' });\n")))}u.isMDXComponent=!0}}]);