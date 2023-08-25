"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2472],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const s={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),s=n(86010),i=n(12466),o=n(70989),l=n(72389);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){let{className:t,block:n,selectedValue:o,selectValue:l,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==o&&(d(t),l(a))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:m},i,{className:(0,s.Z)("tabs__item",u.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function p(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function d(e){const t=(0,o.Y)(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",u.tabList)},r.createElement(c,(0,a.Z)({},e,t)),r.createElement(p,(0,a.Z)({},e,t)))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},70989:(e,t,n)=>{n.d(t,{Y:()=>d});var a=n(67294),r=n(16550),s=n(91980),i=n(67392),o=n(50012);function l(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??l(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const i=(0,r.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(i.location.search);t.set(o,e),i.replace({...i.location,search:t.toString()})}),[o,i])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=u(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[d,m]=p({queryString:n,groupId:r}),[h,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,o.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),f=(()=>{const e=d??h;return c({value:e,tabValues:s})?e:null})();(0,a.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),g(e)}),[m,g,s]),tabValues:s}}},3020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),s=n(65488),i=n(85162);const o={description:"Sign data using eth_signTypedData_v4 and personal_sign.",sidebar_position:4},l="Sign data",u={unversionedId:"how-to/sign-data/index",id:"how-to/sign-data/index",title:"Sign data",description:"Sign data using eth_signTypedData_v4 and personal_sign.",source:"@site/wallet/how-to/sign-data/index.md",sourceDirName:"how-to/sign-data",slug:"/how-to/sign-data/",permalink:"/cm/less-onerous-coin-type-60-callout/wallet/how-to/sign-data/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/sign-data/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Sign data using eth_signTypedData_v4 and personal_sign.",sidebar_position:4},sidebar:"walletSidebar",previous:{title:"Send transactions",permalink:"/cm/less-onerous-coin-type-60-callout/wallet/how-to/send-transactions"},next:{title:"Sign in with Ethereum",permalink:"/cm/less-onerous-coin-type-60-callout/wallet/how-to/sign-data/siwe"}},c={},p=[{value:"Use eth_signTypedData_v4",id:"use-eth_signtypeddata_v4",level:2},{value:"Example",id:"example",level:3},{value:"Use personal_sign",id:"use-personal_sign",level:2},{value:"Example",id:"example-1",level:3}],d={toc:p},m="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sign-data"},"Sign data"),(0,r.kt)("p",null,"You can use the following RPC methods to request cryptographic signatures from users:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#use-eth_signtypeddata_v4"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_signTypedData_v4"))," - Use this method to request the most human-readable\nsignatures that are efficient to process on-chain.\nWe recommend this for most use cases."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#use-personal_sign"},(0,r.kt)("inlineCode",{parentName:"a"},"personal_sign"))," - Use this method for the easiest way to request human-readable\nsignatures that don't need to be efficiently processed on-chain.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/cm/less-onerous-coin-type-60-callout/wallet/concepts/signing-methods#eth_sign"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sign"))," is deprecated.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"MetaMask supports signing transactions using Trezor and Ledger hardware wallets.\nThese wallets only support signing data using ",(0,r.kt)("inlineCode",{parentName:"p"},"personal_sign"),".\nIf you can't log in to a dapp when using a Ledger or Trezor, the dapp might be requesting you to\nsign data using an unsupported method, in which case we recommend using your standard MetaMask account.")),(0,r.kt)("h2",{id:"use-eth_signtypeddata_v4"},"Use eth_signTypedData_v4"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_signTypedData_v4"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_signTypedData_v4")),"\nprovides the most human-readable signatures that are efficient to process on-chain.\nIt follows the ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-712"},"EIP-712")," specification to allow users to sign\ntyped structured data that can be verified on-chain.\nIt renders the structured data as usefully as possible to the user (for example, displaying known\naccount names in place of addresses)."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"eth_signTypedData_v4",src:n(89192).Z,width:"472",height:"732"}))),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_signTypedData_v4")," payload uses a standard format of encoding structs, but has a different\nformat for the top-level struct that is signed, which includes some metadata about the verifying\ncontract to provide replay protection of these signatures between different contract instances."),(0,r.kt)("p",null,"We recommend using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/eth-sig-util"},(0,r.kt)("inlineCode",{parentName:"a"},"eth-sig-util"))," to generate and\nvalidate signatures.\nYou can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/danfinlay/eip712-codegen#readme"},(0,r.kt)("inlineCode",{parentName:"a"},"eip712-codegen"))," to generate most\nof the Solidity required to verify these signatures on-chain.\nIt currently doesn't generate the top-level struct verification code, so you must write that part manually.\nSee\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/delegatable/delegatable-sol/blob/fb34bb259890417285f7185bc6500fb0ab8bf86f/contracts/Delegatable.sol#L80"},"this example implementation"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Since the top-level struct type's name and the ",(0,r.kt)("inlineCode",{parentName:"p"},"domain.name")," are presented to the user prominently\nin the confirmation, consider your contract name, the top-level struct name, and the struct keys to\nbe a user-facing security interface.\nEnsure your contract is as readable as possible to the user.")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"The following is an example of using ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_signTypedData_v4")," with MetaMask.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.github.io/test-dapp/#signTypedDataV4"},"live example")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/test-dapp"},"test dapp source code"),"."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"JavaScript",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"signTypedDataV4Button.addEventListener('click', async function (event) {\n  event.preventDefault();\n\n  // eth_signTypedData_v4 parameters. All of these parameters affect the resulting signature.\n  const msgParams = JSON.stringify({\n    domain: {\n      // This defines the network, in this case, Mainnet.\n      chainId: 1,\n      // Give a user-friendly name to the specific contract you're signing for.\n      name: 'Ether Mail',\n      // Add a verifying contract to make sure you're establishing contracts with the proper entity.\n      verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',\n      // This identifies the latest version.\n      version: '1',\n    },\n\n    // This defines the message you're proposing the user to sign, is dapp-specific, and contains\n    // anything you want. There are no required fields. Be as explicit as possible when building out\n    // the message schema.\n    message: {\n      contents: 'Hello, Bob!',\n      attachedMoneyInEth: 4.2,\n      from: {\n        name: 'Cow',\n        wallets: [\n          '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',\n          '0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF',\n        ],\n      },\n      to: [\n        {\n          name: 'Bob',\n          wallets: [\n            '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',\n            '0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57',\n            '0xB0B0b0b0b0b0B000000000000000000000000000',\n          ],\n        },\n      ],\n    },\n    // This refers to the keys of the following types object.\n    primaryType: 'Mail',\n    types: {\n      // This refers to the domain the contract is hosted on.\n      EIP712Domain: [\n        { name: 'name', type: 'string' },\n        { name: 'version', type: 'string' },\n        { name: 'chainId', type: 'uint256' },\n        { name: 'verifyingContract', type: 'address' },\n      ],\n      // Not an EIP712Domain definition.\n      Group: [\n        { name: 'name', type: 'string' },\n        { name: 'members', type: 'Person[]' },\n      ],\n      // Refer to primaryType.\n      Mail: [\n        { name: 'from', type: 'Person' },\n        { name: 'to', type: 'Person[]' },\n        { name: 'contents', type: 'string' },\n      ],\n      // Not an EIP712Domain definition.\n      Person: [\n        { name: 'name', type: 'string' },\n        { name: 'wallets', type: 'address[]' },\n      ],\n    },\n  });\n\n  var from = await web3.eth.getAccounts();\n\n  var params = [from[0], msgParams];\n  var method = 'eth_signTypedData_v4';\n\n  web3.currentProvider.sendAsync(\n    {\n      method,\n      params,\n      from: from[0],\n    },\n    function (err, result) {\n      if (err) return console.dir(err);\n      if (result.error) {\n        alert(result.error.message);\n      }\n      if (result.error) return console.error('ERROR', result);\n      console.log('TYPED SIGNED:' + JSON.stringify(result.result));\n\n      const recovered = sigUtil.recoverTypedSignature_v4({\n        data: JSON.parse(msgParams),\n        sig: result.result,\n      });\n\n      if (\n        ethUtil.toChecksumAddress(recovered) === ethUtil.toChecksumAddress(from)\n      ) {\n        alert('Successfully recovered signer as ' + from);\n      } else {\n        alert(\n          'Failed to verify signer when comparing ' + result + ' to ' + from\n        );\n      }\n    }\n  );\n});\n"))),(0,r.kt)(i.Z,{label:"HTML",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<h3>Sign typed data v4</h3>\n<button type="button" id="signTypedDataV4Button">eth_signTypedData_v4</button>\n')))),(0,r.kt)("h2",{id:"use-personal_sign"},"Use personal_sign"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/personal_sign"},(0,r.kt)("inlineCode",{parentName:"a"},"personal_sign"))," is the\neasiest way to request human-readable signatures that don't need to be efficiently processed on-chain.\nIt's often used for signature challenges that are authenticated on a web server, such as\n",(0,r.kt)("a",{parentName:"p",href:"/cm/less-onerous-coin-type-60-callout/wallet/how-to/sign-data/siwe"},"Sign-In with Ethereum"),"."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"personal_sign",src:n(1027).Z,width:"472",height:"732"}))),(0,r.kt)("p",null,"Some other signers implement ",(0,r.kt)("inlineCode",{parentName:"p"},"personal_sign")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_sign"),", because the Go Ethereum client changed\nthe behavior of their ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_sign")," method.\nBecause MetaMask supports existing applications, MetaMask implements both ",(0,r.kt)("inlineCode",{parentName:"p"},"personal_sign")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_sign"),".\nYou might need to check what method your supported signers use for a given implementation."),(0,r.kt)("admonition",{title:"important",type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Don't use this method to display binary data, because the user wouldn't be able to understand what\nthey're agreeing to."),(0,r.kt)("li",{parentName:"ul"},"If using this method for a signature challenge, think about what would prevent a phisher from\nreusing the same challenge and impersonating your site.\nAdd text referring to your domain, or the current time, so the user can easily verify if this\nchallenge is legitimate."))),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("p",null,"The following is an example of using ",(0,r.kt)("inlineCode",{parentName:"p"},"personal_sign")," with MetaMask.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.github.io/test-dapp/#personalSign"},"live example")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/test-dapp"},"test dapp source code"),"."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"JavaScript",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"personalSignButton.addEventListener('click', async function (event) {\n  event.preventDefault();\n  const exampleMessage = 'Example `personal_sign` message.';\n  try {\n    const from = accounts[0];\n    // For historical reasons, you must submit the message to sign in hex-encoded UTF-8.\n    // This uses a Node.js-style buffer shim in the browser.\n    const msg = `0x${Buffer.from(exampleMessage, 'utf8').toString('hex')}`;\n    const sign = await ethereum.request({\n      method: 'personal_sign',\n      params: [msg, from],\n    });\n    personalSignResult.innerHTML = sign;\n    personalSignVerify.disabled = false;\n  } catch (err) {\n    console.error(err);\n    personalSign.innerHTML = `Error: ${err.message}`;\n  }\n});\n"))),(0,r.kt)(i.Z,{label:"HTML",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<h3>Personal sign</h3>\n<button type="button" id="personalSignButton">personal_sign</button>\n')))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"personal_sign")," prepends the message with ",(0,r.kt)("inlineCode",{parentName:"p"},"\\x19Ethereum Signed Message:\\n<length of message>")," before\nhashing and signing it."))}h.isMDXComponent=!0},1027:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/personal_sign-d816d3f7b4c78b5bf5f31dfb3e167775.png"},89192:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/signTypedData-e0bc49cef93b62a1275a0302134e86c4.png"}}]);