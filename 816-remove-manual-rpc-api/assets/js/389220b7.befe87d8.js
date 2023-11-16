"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1452],{40905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),l=n(56310);const o={sidebar_label:"Unity",sidebar_position:1},r="Use MetaMask SDK with Unity",s={unversionedId:"how-to/connect/set-up-sdk/gaming/unity",id:"how-to/connect/set-up-sdk/gaming/unity",title:"Use MetaMask SDK with Unity",description:"Import MetaMask SDK into your",source:"@site/wallet/how-to/connect/set-up-sdk/gaming/unity.md",sourceDirName:"how-to/connect/set-up-sdk/gaming",slug:"/how-to/connect/set-up-sdk/gaming/unity",permalink:"/816-remove-manual-rpc-api/wallet/how-to/connect/set-up-sdk/gaming/unity",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/set-up-sdk/gaming/unity.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Unity",sidebar_position:1},sidebar:"walletSidebar",previous:{title:"Gaming",permalink:"/816-remove-manual-rpc-api/wallet/how-to/connect/set-up-sdk/gaming/"},next:{title:"Unreal Engine (coming soon)",permalink:"/816-remove-manual-rpc-api/wallet/how-to/connect/set-up-sdk/gaming/unreal-engine"}},p={},d=[{value:"Video demo",id:"video-demo",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Configure build settings",id:"1-configure-build-settings",level:3},{value:"2. Install the SDK for Unity",id:"2-install-the-sdk-for-unity",level:3},{value:"3. Initialize MetaMask",id:"3-initialize-metamask",level:3},{value:"4. Connect to MetaMask",id:"4-connect-to-metamask",level:3},{value:"5. Use MetaMask",id:"5-use-metamask",level:3},{value:"6. Configure MetaMask",id:"6-configure-metamask",level:3},{value:"FAQS",id:"faqs",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"use-metamask-sdk-with-unity"},"Use MetaMask SDK with Unity"),(0,i.kt)("p",null,"Import ",(0,i.kt)("a",{parentName:"p",href:"/816-remove-manual-rpc-api/wallet/concepts/sdk/"},"MetaMask SDK")," into your\n",(0,i.kt)("a",{parentName:"p",href:"https://assetstore.unity.com/packages/decentralization/infrastructure/metamask-246786"},"Unity")," game\nto enable users to easily connect to their MetaMask Mobile wallet.\nThe MetaMask Unity SDK supports macOS, Windows, Linux, iOS, Android, and WebGL."),(0,i.kt)("h2",{id:"video-demo"},"Video demo"),(0,i.kt)("p",null,"The following video demonstrates how to install and use the MetaMask Unity SDK."),(0,i.kt)("p",{align:"center"},(0,i.kt)(l.Z,{url:"https://www.youtube.com/embed/0D1cIH-PZtI",mdxType:"ReactPlayer"})),(0,i.kt)("h2",{id:"steps"},"Steps"),(0,i.kt)("h3",{id:"1-configure-build-settings"},"1. Configure build settings"),(0,i.kt)("p",null,"To build the SDK, configure the following settings in your Unity editor according to your\ndevelopment platform:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"iOS:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"Build Settings > Build Options")," and set ",(0,i.kt)("strong",{parentName:"li"},"Enable Bitcode")," to ",(0,i.kt)("strong",{parentName:"li"},"NO"),"."))),(0,i.kt)("li",{parentName:"ul"},"Android:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Go to the ",(0,i.kt)("strong",{parentName:"li"},"Assets")," dropdown menu and select ",(0,i.kt)("strong",{parentName:"li"},"External Dependency Manager > Android\nResolver > Resolve"),"."),(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"Build Settings > Player Settings")," and set ",(0,i.kt)("strong",{parentName:"li"},"Minimum API level")," to ",(0,i.kt)("strong",{parentName:"li"},"Android 7.0\n'Nougat'")," (API level 24)."))),(0,i.kt)("li",{parentName:"ul"},"WebGL:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"Build Settings > Player Settings"),", switch to the ",(0,i.kt)("strong",{parentName:"li"},"Resolution & Presentation Tab"),", and\nselect ",(0,i.kt)("strong",{parentName:"li"},"MetaMask"),".")))),(0,i.kt)("p",null,"For all platforms, also set the ",(0,i.kt)("strong",{parentName:"p"},"Scripting Backend")," in ",(0,i.kt)("strong",{parentName:"p"},"Player Settings")," to ",(0,i.kt)("strong",{parentName:"p"},"IL2CPP"),", and set\n",(0,i.kt)("strong",{parentName:"p"},"IL2CPP Code Generation")," in ",(0,i.kt)("strong",{parentName:"p"},"Build Settings")," to ",(0,i.kt)("strong",{parentName:"p"},"Faster (smaller) builds"),"."),(0,i.kt)("h3",{id:"2-install-the-sdk-for-unity"},"2. Install the SDK for Unity"),(0,i.kt)("p",null,"Download the\n",(0,i.kt)("a",{parentName:"p",href:"https://assetstore.unity.com/packages/decentralization/infrastructure/metamask-246786"},"MetaMask SDK for Unity"),"\nfrom the Unity Asset Store."),(0,i.kt)("p",null,"In your Unity editor, go to the menu > ",(0,i.kt)("strong",{parentName:"p"},"Package Manager"),".\nSelect ",(0,i.kt)("strong",{parentName:"p"},"My Assets"),", ",(0,i.kt)("strong",{parentName:"p"},"MetaMask Unity SDK"),", and ",(0,i.kt)("strong",{parentName:"p"},"Install"),".\nYou should see the MetaMask SDK package listed in the project packages and be able to interface\nwith it and its examples in the scene."),(0,i.kt)("p",null,"You also need to install ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/com.unity.textmeshpro.html"},"TextMeshPro"),".\nIf you don't have TextMeshPro installed, the Unity editor automatically prompts you to install it."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Unity SDK package structure"),(0,i.kt)("p",null,(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"File or directory"),(0,i.kt)("th",{parentName:"tr",align:null},"Contents"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Documentation")),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation and link to online documentation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Editor")),(0,i.kt)("td",{parentName:"tr",align:null},"Editor-only code such as Setup GUI windows, data persistence for SDK settings")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Plugins")),(0,i.kt)("td",{parentName:"tr",align:null},"Plugins needed by the package (the ECIES Platform runtime libraries and core SDK Codebase)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Runtime")),(0,i.kt)("td",{parentName:"tr",align:null},"Main scripts for the SDK that are environment-agnostic, including the C# scripts that provide the base implementation of the SDK")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Samples")),(0,i.kt)("td",{parentName:"tr",align:null},"Test application scene that can be used as a referral for your project, including modal popups and dynamic UI scaling")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LICENSE.md")),(0,i.kt)("td",{parentName:"tr",align:null},"Package license")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Third Party Notices.md")),(0,i.kt)("td",{parentName:"tr",align:null},"Third party notices")))))),(0,i.kt)("h3",{id:"3-initialize-metamask"},"3. Initialize MetaMask"),(0,i.kt)("p",null,"The main class you interface with is called ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskWallet"),".\nIt handles the connection to the user's wallet, as well as processing the requests to it using a\nsocket.io implementation."),(0,i.kt)("p",null,"To use it inside Unity, you must attach the component called ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskUnity")," to a game object within\nthe editor.\nThis component is a singleton and you can use its ",(0,i.kt)("inlineCode",{parentName:"p"},"Instance")," property to access the wallet instance.\nYou first must initialize by doing one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Manually call ",(0,i.kt)("inlineCode",{parentName:"p"},"Initialize()"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"MetaMaskUnity.Instance.Initialize();\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Check ",(0,i.kt)("strong",{parentName:"p"},"Initialize On Start")," on the component within the editor."))),(0,i.kt)("p",null,"This initializes the wallet instance, making it accessible from ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskUnity.Instance.Wallet"),".\nYou can now make calls to the user's wallet using ",(0,i.kt)("a",{parentName:"p",href:"/816-remove-manual-rpc-api/wallet/reference/provider-api"},"provider API methods"),"."),(0,i.kt)("h3",{id:"4-connect-to-metamask"},"4. Connect to MetaMask"),(0,i.kt)("p",null,"Once the wallet is prepared and initialized, you can connect to MetaMask.\nCall the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect()")," method on the wallet instance as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"var wallet = MetaMaskUnity.Instance.Wallet;\nwallet.Connect();\n")),(0,i.kt)("p",null,"You can also subscribe to the ",(0,i.kt)("inlineCode",{parentName:"p"},"OnWalletConnected")," callback on the wallet instance to be notified\nonce the wallet is connected:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'wallet.WalletConnected += OnWalletConnected;\n\nvoid OnWalletConnected(object sender, EventArgs e) {\n    Debug.Log("Wallet is connected");\n}\n')),(0,i.kt)("p",null,"You can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect()")," method from ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskUnity")," that delegates the call to the wallet\ninstance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"MetaMaskUnity.Instance.Connect();\n")),(0,i.kt)("p",null,"There are a variety of sample buttons included inside the package that call this method when clicked.\nThese are provided as a convenience to get started quickly with your project.\nOnce the connection request is made, a QR code is generated, and based on the transport you're using\n(",(0,i.kt)("inlineCode",{parentName:"p"},"Unity UI")," by default), either a new Canvas that contains the QR code is spawned or the\n",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskUnityUIQRImage")," generates the QR code when the connection is requested."),(0,i.kt)("p",null,"If you want to use the latter, add an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskUnityUIQRImage")," component to the\nscene with its fields provided.\nThe transport field is also required if you want to use it isolated from the canvas that is spawned\nby the transport, then it generates the QR code for you."),(0,i.kt)("h3",{id:"5-use-metamask"},"5. Use MetaMask"),(0,i.kt)("p",null,"Once the wallet is authorized, you can make requests to it.\nThe wallet is authorized when the buttons become interactable or the ",(0,i.kt)("inlineCode",{parentName:"p"},"WalletAuthorized")," event is fired:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var wallet = MetaMaskUnity.Instance.Wallet;\nwallet.WalletAuthorized += OnWalletAuthorized;\n\nvoid OnWalletAuthorized(object sender, EventArgs e) {\n    Debug.Log("Wallet is authorized");\n}\n')),(0,i.kt)("p",null,"You can call any ",(0,i.kt)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"JSON-RPC API method")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.Request(myRequest)"),".\nThe following is a sample transaction request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var wallet = MetaMaskUnity.Instance.Wallet;\nvar transactionParams = new MetaMaskTransaction\n{\n    To = "0xd0059fB234f15dFA9371a7B45c09d451a2dd2B5a",\n    From = MetaMaskUnity.Instance.Wallet.SelectedAddress,\n    Value = "0x0"\n};\n\nvar request = new MetaMaskEthereumRequest\n{\n    Method = "eth_sendTransaction",\n    Parameters = new MetaMaskTransaction[] { transactionParams }\n};\nawait wallet.Request(request);\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"See the ",(0,i.kt)("a",{parentName:"p",href:"/816-remove-manual-rpc-api/wallet/reference/sdk-unity-api"},"Unity SDK API reference")," for an overview of the\nAPI methods from the most important classes.")),(0,i.kt)("h3",{id:"6-configure-metamask"},"6. Configure MetaMask"),(0,i.kt)("p",null,"You can customize the default configuration or create your own configuration."),(0,i.kt)("p",null,"Edit the default configuration by doing one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to the ",(0,i.kt)("strong",{parentName:"li"},"Window > MetaMask > Setup")," menu item."),(0,i.kt)("li",{parentName:"ul"},"Open the ",(0,i.kt)("inlineCode",{parentName:"li"},"MetaMaskConfig")," asset in the project window.")),(0,i.kt)("p",null,"Edit the fields and save the changes."),(0,i.kt)("p",null,"Create a new configuration by right-clicking on the project window and navigating to\n",(0,i.kt)("strong",{parentName:"p"},"MetaMask > Config"),".\nName the new configuration and use it when initializing the ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskUnity")," instance."),(0,i.kt)("h2",{id:"faqs"},"FAQS"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"I can't find the SDK installation option."),(0,i.kt)("p",null,"If you don't see the option to ",(0,i.kt)("a",{parentName:"p",href:"#2-install-the-sdk-for-unity"},"install the SDK")," in your Unity menu,\nensure you're on the latest Unity version and that you have no red errors printed in your console.\nThis option not appearing is typically due to incorrect editor initialization, which you can\nusually resolve by restarting the editor or updating your Unity version.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"On iOS, why does a popup appear when using a deeplink?"),(0,i.kt)("p",null,"When deeplinking, a background service is created to facilitate the communication layer between the\nUnity game and MetaMask.\nOn iOS, background services expire after a certain amount of time.\nA notification pops up to let you know the socket connection has expired.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"What does the external dependency manager do?"),(0,i.kt)("p",null,"The Unity Jar Resolver is an external dependency manager specifically for Unity projects that use\nexternal libraries.\nIt helps manage the dependencies between Unity and external libraries, which can sometimes be\ncomplicated due to differences between the two environments.\nThis tool is particularly useful for MetaMask SDK, since Android and iOS need a variety of native\nlibraries to facilitate deeplinking and the persistent socket connection.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Does the SDK increase my compilation time?"),(0,i.kt)("p",null,"No.\nIf you notice an increased compilation time, it might be related to the ILL2CP pipeline, which can\ntake longer to build at compile time.\nThe SDK is filled with precompiled libraries to save on runtime compilation.")),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"Once you have the MetaMask Unity SDK set up, you can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/816-remove-manual-rpc-api/wallet/how-to/interact-with-smart-contracts/unity/"},"Interact with smart contracts in Unity.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/816-remove-manual-rpc-api/wallet/how-to/use-3rd-party-integrations/unity-dweb"},"Enable human-readable addresses in Unity using Decentraweb."))))}m.isMDXComponent=!0}}]);