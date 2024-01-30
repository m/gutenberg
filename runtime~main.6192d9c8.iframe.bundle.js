(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({81:"components-inserter-stories-index-story",139:"guide-stories-index-story",204:"heading-stories-index-story",243:"scroll-lock-stories-index-story",309:"toggle-group-control-stories-index-story",408:"popover-stories-index-story",698:"navigation-stories-index-story",772:"date-time-stories-time-story",869:"components-dimensions-tool-stories-scale-tool-story",951:"components-block-mover-stories-index-story",970:"angle-picker-control-stories-index-story",983:"components-dimensions-tool-stories-index-story",988:"stories-index-story",1057:"visually-hidden-stories-index-story",1101:"palette-edit-stories-index-story",1638:"placeholder-stories-index-story",1656:"components-block-draggable-stories-index-story",1791:"search-control-stories-index-story",1802:"form-toggle-stories-index-story",1821:"sandbox-stories-index-story",1960:"base-control-stories-index-story",1998:"gradient-picker-stories-index-story",2057:"docs-introduction-mdx",2211:"dropdown-menu-stories-index-story",2419:"text-highlight-stories-index-story",2900:"tooltip-stories-index-story",3134:"custom-select-control-v2-stories-index-story",3218:"components-url-popover-stories-index-story",3267:"item-group-stories-index-story",3417:"icon-stories-index-story",3421:"combobox-control-stories-index-story",3517:"dropdown-menu-v2-stories-index-story",3614:"navigator-stories-index-story",3732:"date-time-stories-date-story",3754:"truncate-stories-index-story",3772:"view-stories-index-story",3788:"radio-group-stories-index-story",3813:"components-text-decoration-control-stories-index-story",3933:"tab-panel-stories-index-story",3953:"border-box-control-stories-index-story",4317:"alignment-matrix-control-stories-index-story",4325:"number-control-stories-index-story",4355:"text-control-stories-index-story",4520:"docs-components-contributing-mdx",4593:"resizable-box-stories-index-story",4595:"components-global-styles-stories-index-story",4662:"draggable-stories-index-story",4706:"select-control-stories-index-story",4770:"components-dimensions-tool-stories-width-height-tool-story",4831:"navigable-container-stories-navigable-menu-story",4836:"drop-zone-stories-index-story",4895:"unit-control-stories-index-story",4972:"components-dimensions-tool-stories-aspect-ratio-tool-story",5008:"button-stories-index-story",5100:"toggle-control-stories-index-story",5106:"menu-items-choice-stories-index-story",5151:"scrollable-stories-index-story",5175:"custom-gradient-picker-stories-index-story",5194:"components-text-transform-control-stories-index-story",5309:"font-size-picker-stories-index-story",5367:"h-stack-stories-index-story",5619:"menu-group-stories-index-story",5735:"dropdown-stories-index-story",5739:"menu-item-stories-index-story",5745:"tip-stories-index-story",5825:"components-resolution-tool-stories-index-story",5891:"animate-stories-index-story",6180:"box-control-stories-index-story",6246:"spinner-stories-index-story",6265:"components-height-control-stories-index-story",6510:"query-controls-stories-index-story",6605:"card-stories-index-story",6610:"icon-stories-index-story-tsx",6758:"form-file-upload-stories-index-story",6764:"modal-stories-index-story",6869:"flex-stories-index-story",6883:"surface-stories-index-story",6932:"form-token-field-stories-index-story",6939:"border-control-stories-index-story",7131:"spacer-stories-index-story",7137:"elevation-stories-index-story",7152:"input-control-stories-index-story",7196:"duotone-picker-stories-duotone-picker-story",7211:"tabs-stories-index-story",7306:"color-indicator-stories-index-story",7351:"radio-control-stories-index-story",7552:"dimension-control-stories-index-story",7577:"color-palette-stories-index-story",7637:"tree-select-stories-index-story",7707:"button-group-stories-index-story",7716:"textarea-control-stories-index-story",7752:"snackbar-stories-index-story",7844:"color-picker-stories-index-story",7875:"tree-grid-stories-index-story",8035:"range-control-stories-index-story",8067:"shortcut-stories-index-story",8108:"v-stack-stories-index-story",8147:"duotone-picker-stories-duotone-swatch-story",8297:"checkbox-control-stories-index-story",8518:"tools-panel-stories-index-story",8628:"snackbar-stories-list-story",8633:"date-time-stories-date-time-story",8673:"confirm-dialog-stories-index-story",8748:"components-line-height-control-stories-index-story",8751:"focal-point-picker-stories-index-story",8768:"external-link-stories-index-story",8772:"playground-index-story",8773:"custom-select-control-stories-index-story",8821:"icon-stories-index-story-js",8917:"slot-fill-stories-index-story",8930:"circular-option-picker-stories-index-story",8953:"keyboard-shortcuts-stories-index-story",8958:"toolbar-stories-index-story",8971:"z-stack-stories-index-story",9003:"disabled-stories-index-story",9170:"progress-bar-stories-index-story",9189:"notice-stories-index-story",9379:"divider-stories-index-story",9475:"text-stories-index-story",9501:"docs-components-readme-mdx",9696:"navigable-container-stories-tabbable-container-story",9812:"grid-stories-index-story",9828:"theme-stories-index-story",9901:"responsive-wrapper-stories-index-story",9943:"panel-stories-index-story"}[chunkId]||chunkId)+"."+{75:"b3bdd948",81:"064b8758",139:"e0336916",204:"81d35d0a",238:"a53847ba",243:"12985f6c",257:"86c01071",309:"d9c13ad2",331:"7877395c",404:"b44bfdf1",408:"a32718a0",421:"a8bccbe9",652:"3e328b02",698:"ac9422da",723:"ce0532e2",772:"6c012b1f",869:"92ebf9ee",888:"ee0d3fc9",951:"8c1227d5",970:"780dc6fc",983:"7b805fb8",988:"f5887c51",1057:"a476a243",1064:"ceeaab2d",1101:"51def49a",1124:"da9b2d78",1200:"4266d15e",1230:"20941caa",1265:"a54a62ff",1505:"c21797bf",1575:"a8905e71",1596:"4e457da6",1613:"7084b264",1638:"96ae29b5",1642:"e8a1be89",1656:"7486da79",1785:"a279866b",1791:"e6f66997",1802:"15c4ce1a",1821:"aac688fe",1950:"27701051",1960:"8e22bd0d",1998:"24e69085",2033:"99776a7f",2057:"d2bed04d",2211:"bf4893cc",2218:"757282f0",2276:"8178cfdb",2394:"6cea0808",2419:"e00da223",2493:"f95e7b16",2689:"0ccaf441",2769:"5173833c",2900:"90d2336f",3042:"483b2b9a",3043:"a37b2a41",3081:"673ed303",3134:"cf373929",3194:"230b338b",3218:"0cf1e584",3267:"7d1284dc",3417:"2ecb6be3",3421:"eca92775",3423:"5e26bfee",3469:"2e434125",3517:"c4709227",3614:"36b63a7a",3622:"762295d6",3665:"6d91a813",3712:"0195a1a2",3732:"8ba339a6",3754:"42d0f364",3772:"2d0591c3",3788:"63c097de",3813:"64eb947d",3933:"f28dd0f6",3953:"a4d94a29",4068:"12ecb44b",4095:"abf7039c",4166:"ff19b411",4239:"25892233",4268:"ec521322",4285:"6c8b0116",4317:"c28a72b7",4325:"00f52ddc",4355:"6ae128fa",4520:"fb1b41d4",4535:"6dab593c",4593:"bed42de1",4595:"14f37a9b",4644:"69764e04",4662:"5a685bf5",4706:"61225a1b",4760:"2d6a6ea0",4770:"c1e06114",4831:"ce482446",4836:"ca0a31c8",4837:"739c0b7e",4875:"b50466c4",4895:"0d9eb493",4928:"f92c99c6",4963:"048f871e",4972:"e1913d0b",5008:"8327c396",5100:"1995ad37",5106:"c839e530",5111:"42be19fe",5150:"747bbf54",5151:"1f75f8b5",5175:"1f919e03",5186:"55ddd5f7",5194:"6f7dbea2",5253:"9aa561d5",5309:"ee5c02c9",5353:"392cafd9",5364:"d022529f",5367:"12270694",5434:"311d2801",5473:"494a4cc8",5609:"820f8063",5619:"b1a17805",5699:"0e383740",5723:"5d2217e6",5735:"c4634c52",5739:"a8b923d9",5745:"be616051",5800:"31045481",5825:"713c88ec",5828:"f39cf297",5841:"d34acd02",5891:"9b33c7b3",6180:"1f277b15",6246:"6a68f4c8",6260:"ad5be0e5",6265:"6ae84dd3",6414:"765d28cd",6447:"fbef01a2",6476:"efb5787b",6510:"85255618",6605:"023c302e",6610:"697d4e5c",6615:"5ccf55fb",6758:"88b02ada",6764:"6832089b",6809:"9627cf21",6869:"46dada3f",6878:"abee75f2",6883:"ca9e9dc4",6932:"118de4bb",6939:"7ede827d",6966:"56885cd9",6983:"2fdf16cf",7120:"aaad47c5",7131:"eb24278f",7137:"42066542",7143:"7b1161e7",7152:"9412e011",7196:"e9a4f872",7211:"d7957076",7275:"9cd2ea70",7280:"ec4923be",7306:"83001cc5",7328:"ca06db37",7351:"caa7bc4a",7355:"734b6507",7435:"526e890d",7492:"4f11eb58",7513:"c6d36e66",7552:"f2cb0886",7577:"c47e68f1",7637:"b17bda61",7675:"19928a63",7707:"a5937211",7716:"eab2b852",7752:"acbee822",7782:"de422e34",7844:"d0cedf8e",7875:"bff09bee",7886:"8684cc5b",8035:"0b2c8c9e",8067:"7c42c692",8108:"9aea3520",8147:"94a9e038",8169:"c7e92d15",8196:"d145e704",8297:"65a3d4b4",8303:"60fa1438",8443:"ee877e86",8494:"bb35b10a",8518:"2bc9094e",8557:"6871e9c1",8628:"feb712da",8633:"191b61ae",8673:"628b5d2c",8690:"a57eec92",8692:"09608891",8693:"69d97ce5",8725:"1519f4a6",8738:"0c8c5948",8748:"cdf3fc27",8751:"749367ba",8764:"964be329",8768:"df0b14e4",8772:"2737edf9",8773:"9e7a10f4",8777:"62ef669f",8821:"4b3fc8cd",8917:"7a706037",8930:"707a558a",8938:"1b257bc1",8953:"6aa03140",8958:"3f7d38a1",8971:"aaefdc22",8975:"0db9d8fe",9003:"85984736",9115:"a59326df",9119:"a99577ac",9170:"ee4c56a0",9189:"0638b317",9213:"d46435e0",9226:"9a77ad59",9277:"77d4f5cd",9379:"d12e6ca1",9390:"7a848764",9433:"1a3e1619",9475:"20109ba5",9501:"adf53911",9696:"aee9d43c",9744:"2eb699cb",9812:"f78f6ad0",9828:"cab5035c",9901:"d3add08c",9903:"16aee8d9",9943:"746231a1",9982:"9957c4f7",9989:"21b45913"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="gutenberg:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","gutenberg:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();