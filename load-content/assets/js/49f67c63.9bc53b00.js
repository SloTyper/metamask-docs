"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Node.js"},s="Use MetaMask SDK with Node.js",l={unversionedId:"how-to/use-sdk/javascript/nodejs",id:"how-to/use-sdk/javascript/nodejs",title:"Node.js",description:"You can import MetaMask SDK into your Node.js dapp to enable your users to easily connect with their",source:"@site/wallet/how-to/use-sdk/javascript/nodejs.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/nodejs",permalink:"/load-content/wallet/how-to/use-sdk/javascript/nodejs",draft:!1,tags:[],version:"current",frontMatter:{title:"Node.js"},sidebar:"walletSidebar",previous:{title:"React Native",permalink:"/load-content/wallet/how-to/use-sdk/javascript/react-native"},next:{title:"Electron",permalink:"/load-content/wallet/how-to/use-sdk/javascript/electron"}},i={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Instantiate the SDK",id:"3-instantiate-the-sdk",level:3},{value:"4. Use the SDK",id:"4-use-the-sdk",level:3}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-metamask-sdk-with-nodejs"},"Use MetaMask SDK with Node.js"),(0,r.kt)("p",null,"You can import MetaMask SDK into your Node.js dapp to enable your users to easily connect with their\nMetaMask Mobile wallet.\nThe SDK for Node.js has the ",(0,r.kt)("a",{parentName:"p",href:"/load-content/wallet/#prerequisites"},"same prerequisites")," as for standard JavaScript."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"When a user accesses your Node.js dapp, the SDK renders a QR code on the console to scan\nwith their MetaMask Mobile app."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SDK Node.js example",src:n(425).Z,width:"871",height:"947"}))),(0,r.kt)("p",null,"You can download the\n",(0,r.kt)("a",{parentName:"p",href:"https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/downloads/nodejs_v0.0.1_beta5.zip"},"Node.js example"),".\nInstall the example using ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," and run it using ",(0,r.kt)("inlineCode",{parentName:"p"},"node ."),"."),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,r.kt)("p",null,"In your project directory, install the SDK using Yarn or npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/sdk\nor\nnpm i @metamask/sdk\n")),(0,r.kt)("h3",{id:"2-import-the-sdk"},"2. Import the SDK"),(0,r.kt)("p",null,"In your project script, add the following to import the SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import MetaMaskSDK from '@metamask/sdk';\n")),(0,r.kt)("h3",{id:"3-instantiate-the-sdk"},"3. Instantiate the SDK"),(0,r.kt)("p",null,"Instantiate the SDK using any ",(0,r.kt)("a",{parentName:"p",href:"/load-content/wallet/reference/sdk-js-options"},"options"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const MMSDK = new MetaMaskSDK(options);\n\nconst ethereum = MMSDK.getProvider(); // You can also access via window.ethereum\n")),(0,r.kt)("h3",{id:"4-use-the-sdk"},"4. Use the SDK"),(0,r.kt)("p",null,"Use the SDK by calling any ",(0,r.kt)("a",{parentName:"p",href:"/load-content/wallet/reference/provider-api"},"provider API methods"),".\nAlways call ",(0,r.kt)("a",{parentName:"p",href:"/load-content/wallet/reference/rpc-api#eth_requestaccounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," using\n",(0,r.kt)("a",{parentName:"p",href:"/load-content/wallet/reference/provider-api#ethereumrequestargs"},(0,r.kt)("inlineCode",{parentName:"a"},"ethereum.request()"))," first, since it\nprompts the installation or connection popup to appear."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"ethereum.request({ method: 'eth_requestAccounts', params: [] });\n")))}d.isMDXComponent=!0},425:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sdk-nodejs-53d5a8860c4b7d48902adc99a64a668f.gif"}}]);