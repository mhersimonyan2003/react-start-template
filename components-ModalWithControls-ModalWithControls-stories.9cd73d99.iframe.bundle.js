"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[690],{"./src/components/ModalWithControls/ModalWithControls.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MainModalWithControls:()=>MainModalWithControls,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ModalWithControls_stories});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),Button=__webpack_require__("./src/components/Button/index.tsx"),Modal=__webpack_require__("./src/components/Modal/index.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),index_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/ModalWithControls/index.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(index_module.Z,options);const ModalWithControls_index_module=index_module.Z&&index_module.Z.locals?index_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var _MainModalWithControl,_MainModalWithControl2,ModalWithControls=function ModalWithControls(){var t=(0,es.$G)().t,_useState2=_slicedToArray((0,react.useState)(!1),2),modalVisible=_useState2[0],setModalVisible=_useState2[1],_useState4=_slicedToArray((0,react.useState)(""),2),modalText=_useState4[0],setModalText=_useState4[1];return(0,jsx_runtime.jsxs)("div",{className:ModalWithControls_index_module["modal-with-controls"],children:[(0,jsx_runtime.jsx)(Button.z,{variant:Button.W.primary,onClick:function toggleModalVisible(){setModalVisible(!modalVisible)},children:t("global.openModal")}),(0,jsx_runtime.jsx)("input",{placeholder:t("global.modalInput.placeholder"),value:modalText,onChange:function onModalTextChange(event){setModalText(event.target.value)}}),(0,jsx_runtime.jsx)(Modal.u,{visible:modalVisible,setVisible:setModalVisible,children:modalText})]})};function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}ModalWithControls.displayName="ModalWithControls";const ModalWithControls_stories={title:"Example/ModalWithControls",component:ModalWithControls,tags:["autodocs"],argTypes:{visible:{control:"boolean"},children:{control:"text"}}};var MainModalWithControls={args:{visible:!1,children:"ModalText"}};MainModalWithControls.parameters=_objectSpread(_objectSpread({},MainModalWithControls.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_MainModalWithControl=MainModalWithControls.parameters)||void 0===_MainModalWithControl?void 0:_MainModalWithControl.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    visible: false,\n    children: 'ModalText'\n  }\n}"},null===(_MainModalWithControl2=MainModalWithControls.parameters)||void 0===_MainModalWithControl2||null===(_MainModalWithControl2=_MainModalWithControl2.docs)||void 0===_MainModalWithControl2?void 0:_MainModalWithControl2.source)})});var __namedExportsOrder=["MainModalWithControls"]},"./src/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button,W:()=>ButtonVariant});__webpack_require__("./node_modules/react/index.js");var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),index_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/index.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(index_module.Z,options);const Button_index_module=index_module.Z&&index_module.Z.locals?index_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["variant","children","className"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var ButtonVariant=function(ButtonVariant){return ButtonVariant.primary="primary",ButtonVariant}({}),Button=function Button(_ref){var variant=_ref.variant,children=_ref.children,className=_ref.className,props=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({className:(0,clsx.Z)(className,Button_index_module.button,Button_index_module["button-".concat(variant)])},props),{},{children}))};Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"ButtonVariant"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Modal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Modal});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),index_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Modal/index.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(index_module.Z,options);const Modal_index_module=index_module.Z&&index_module.Z.locals?index_module.Z.locals:void 0;var react_dom=__webpack_require__("./node_modules/react-dom/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Modal=function Modal(_ref){var _ref$container=_ref.container,container=void 0===_ref$container?document.body:_ref$container,visible=_ref.visible,setVisible=_ref.setVisible,children=_ref.children;(0,react.useEffect)((function(){return function(){document.body.style.overflow="unset"}}),[]),(0,react.useEffect)((function(){document.body.style.overflow=visible?"hidden":"unset"}),[visible]);return(0,react_dom.createPortal)((0,jsx_runtime.jsxs)("div",{className:Modal_index_module.modal,hidden:!visible,children:[(0,jsx_runtime.jsx)("div",{className:Modal_index_module.modal__backdrop}),(0,jsx_runtime.jsxs)("div",{className:Modal_index_module.modal__card,children:[(0,jsx_runtime.jsx)("div",{className:Modal_index_module.modal__card__close,onClick:function closeModal(){setVisible(!1)}}),children]})]}),container)};try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{container:{defaultValue:{value:"document.body"},description:"",name:"container",required:!1,type:{name:"HTMLElement"}},visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},setVisible:{defaultValue:null,description:"",name:"setVisible",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/index.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/Modal/index.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/index.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".index-module__button--PkVLc{cursor:pointer;outline:none;padding:5px 10px;border:none;border-radius:3px;background-color:unset}.index-module__button-primary--PrVYi{background-color:#007bff;color:#fff}","",{version:3,sources:["webpack://./src/components/Button/index.module.scss"],names:[],mappings:"AAAA,6BACE,cAAA,CACA,YAAA,CACA,gBAAA,CACA,WAAA,CACA,iBAAA,CACA,sBAAA,CAGF,qCACE,wBAAA,CACA,UAAA",sourcesContent:[".button {\n  cursor: pointer;\n  outline: none;\n  padding: 5px 10px;\n  border: none;\n  border-radius: 3px;\n  background-color: unset;\n}\n\n.button-primary {\n  background-color: #007bff;\n  color: #fff;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={button:"index-module__button--PkVLc","button-primary":"index-module__button-primary--PrVYi"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Modal/index.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.index-module__modal--FUz_H{position:fixed;z-index:1;top:0;left:0;right:0;bottom:0}.index-module__modal__backdrop--QA0GG{position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.23)}.index-module__modal__card--AqBL1{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:400px;height:450px;max-height:100%;padding:15px;border-radius:8px;background-color:#fff}.index-module__modal__card__close--VqLZT{cursor:pointer;width:25px;height:25px;display:flex;justify-content:center;position:relative;margin-left:auto}.index-module__modal__card__close--VqLZT:before,.index-module__modal__card__close--VqLZT:after{position:absolute;content:"";height:25px;width:2px;background-color:#333}.index-module__modal__card__close--VqLZT:before{transform:rotate(45deg)}.index-module__modal__card__close--VqLZT:after{transform:rotate(-45deg)}',"",{version:3,sources:["webpack://./src/components/Modal/index.module.scss"],names:[],mappings:"AAAA,4BACE,cAAA,CACA,SAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CAGF,sCACE,iBAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,gCAAA,CAGF,kCACE,iBAAA,CACA,OAAA,CACA,QAAA,CACA,+BAAA,CACA,WAAA,CACA,YAAA,CACA,eAAA,CACA,YAAA,CACA,iBAAA,CACA,qBAAA,CAGF,yCACE,cAAA,CACA,UAAA,CACA,WAAA,CACA,YAAA,CACA,sBAAA,CACA,iBAAA,CACA,gBAAA,CAGF,+FAEE,iBAAA,CACA,UAAA,CACA,WAAA,CACA,SAAA,CACA,qBAAA,CAEF,gDACE,uBAAA,CAEF,+CACE,wBAAA",sourcesContent:[".modal {\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.modal__backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.23);\n}\n\n.modal__card {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 400px;\n  height: 450px;\n  max-height: 100%;\n  padding: 15px;\n  border-radius: 8px;\n  background-color: #fff;\n}\n\n.modal__card__close {\n  cursor: pointer;\n  width: 25px;\n  height: 25px;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  margin-left: auto;\n}\n\n.modal__card__close:before,\n.modal__card__close:after {\n  position: absolute;\n  content: '';\n  height: 25px;\n  width: 2px;\n  background-color: #333;\n}\n.modal__card__close:before {\n  transform: rotate(45deg);\n}\n.modal__card__close:after {\n  transform: rotate(-45deg);\n}\n\n.modal__card__content {\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={modal:"index-module__modal--FUz_H",modal__backdrop:"index-module__modal__backdrop--QA0GG",modal__card:"index-module__modal__card--AqBL1",modal__card__close:"index-module__modal__card__close--VqLZT"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/ModalWithControls/index.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".index-module__modal-with-controls--DQeMj{display:flex;flex-direction:column;align-items:flex-start;padding:20px;gap:15px}","",{version:3,sources:["webpack://./src/components/ModalWithControls/index.module.scss"],names:[],mappings:"AAAA,0CACE,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,YAAA,CACA,QAAA",sourcesContent:[".modal-with-controls {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 20px;\n  gap: 15px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"modal-with-controls":"index-module__modal-with-controls--DQeMj"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);