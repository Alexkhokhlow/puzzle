/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  display: flex;\\n  justify-content: center;\\n  padding: 5px;\\n}\\n\\nbutton {\\n  font-family: sans-serif;\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 21px;\\n  color: white;\\n  background-color: #009999;\\n  border: 2px solid #009999;\\n  border-radius: 5px;\\n  padding: 5px;\\n  margin: 5px;\\n}\\nbutton:active {\\n  opacity: 0.7;\\n}\\n\\n.puzzle {\\n  position: relative;\\n  max-width: 1160px;\\n  width: 100%;\\n  height: 60vh;\\n  background-color: gainsboro;\\n  border: 2px solid grey;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr 1fr;\\n}\\n\\n.item,\\n.selectd-item {\\n  background-color: gray;\\n  border: 1px solid gainsboro;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 20px;\\n  color: white;\\n}\\n\\n.empty-item {\\n  background: gainsboro;\\n}\\n\\n.records-table {\\n  width: 300px;\\n  height: 300px;\\n  border: 2px solid grey;\\n  position: absolute;\\n  top: 20%;\\n  left: 0;\\n  right: 0;\\n  margin: 0 auto;\\n  z-index: 30;\\n  background: #009999;\\n  display: none;\\n  box-shadow: 0 0 0 5000px rgba(0, 0, 0, 0.6);\\n}\\n\\n.win {\\n  width: 300px;\\n  height: 300px;\\n  border: 2px solid grey;\\n  position: absolute;\\n  top: 20%;\\n  left: 0;\\n  right: 0;\\n  margin: 0 auto;\\n  box-shadow: 0 0 0 5000px rgba(0, 0, 0, 0.6);\\n  display: none;\\n  background-color: white;\\n  z-index: 100;\\n}\\n\\n.visibility {\\n  display: block;\\n}\\n\\n.pause, .pause_sound {\\n  background: red;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/classes/button.js":
/*!*******************************!*\
  !*** ./src/classes/button.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* binding */ Button)\n/* harmony export */ });\nclass Button {\r\n  button;\r\n\r\n  constructor(innerHTML) {\r\n    this.button = document.createElement(\"button\");\r\n    this.button.innerHTML = innerHTML;\r\n  }\r\n\r\n  handlerButton(cb) {\r\n    this.button.addEventListener('click',cb);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webpack/./src/classes/button.js?");

/***/ }),

/***/ "./src/classes/frame.js":
/*!******************************!*\
  !*** ./src/classes/frame.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Frame\": () => (/* binding */ Frame)\n/* harmony export */ });\nclass Frame {\r\n  selectedSize;\r\n  frame;\r\n\r\n  constructor(){\r\n    this.frame = document.createElement('div')\r\n    const frameSizeContainer = document.createElement(\"div\");\r\n    const otherSizeContainer = document.createElement(\"div\");\r\n\r\n    frameSizeContainer.append(this.createFrameTextHtml('Frame'));\r\n    frameSizeContainer.append(this.createFrameSizeHtml(4,'span'));\r\n    otherSizeContainer.append(this.createFrameTextHtml('Other'));\r\n\r\n    for (let i = 3; i <= 8; i++) {\r\n      otherSizeContainer.append(this.createFrameSizeHtml(i,'button'));\r\n    }\r\n\r\n    this.frame.append(frameSizeContainer)\r\n    this.frame.append(otherSizeContainer)\r\n  }\r\n\r\n  handlerFrameButton(cb){\r\n    this.frame.addEventListener('click', cb)\r\n  }\r\n\r\n  createFrameSizeHtml(size,type) {\r\n    const item = document.createElement(type);\r\n    item.innerHTML = ` ${size}x${size}`;\r\n    item.setAttribute('data-size', size)\r\n    return item;\r\n  }\r\n\r\n  createFrameTextHtml(text){\r\n    const item = document.createElement('span');\r\n    item.innerText = `${text} size:`\r\n    return item\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webpack/./src/classes/frame.js?");

/***/ }),

/***/ "./src/classes/game.js":
/*!*****************************!*\
  !*** ./src/classes/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ \"./src/classes/button.js\");\n/* harmony import */ var _puzzle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./puzzle */ \"./src/classes/puzzle.js\");\n/* harmony import */ var _frame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frame */ \"./src/classes/frame.js\");\n/* harmony import */ var _moves__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moves */ \"./src/classes/moves.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timer */ \"./src/classes/timer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Game {\r\n  shuffleButton;\r\n  stopButton;\r\n  saveButton;\r\n  resultButton;\r\n  soundButton;\r\n  main;\r\n  puzzleContainer;\r\n  puzzleSize = 4;\r\n  frame;\r\n\r\n  constructor() {\r\n    this.shuffleButton = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(\"shuffle\");\r\n    this.stopButton = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(\"stop\");\r\n    this.saveButton = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(\"save\");\r\n    this.lastGameButton = new _button__WEBPACK_IMPORTED_MODULE_0__.Button('last game')\r\n    this.resultButton = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(\"results\");\r\n    this.soundButton = new _button__WEBPACK_IMPORTED_MODULE_0__.Button('sound')\r\n    this.puzzleContainer = new _puzzle__WEBPACK_IMPORTED_MODULE_1__.Puzzle();\r\n    this.frame = new _frame__WEBPACK_IMPORTED_MODULE_2__.Frame();\r\n    this.main = document.createElement(\"section\");\r\n  }\r\n\r\n  init() {\r\n    this.initButtons();\r\n    this.initPuzzle();\r\n    this.main.appendChild(this.lastGameButton.button)\r\n    this.main.appendChild(this.shuffleButton.button);\r\n    this.main.appendChild(this.stopButton.button);\r\n    this.main.appendChild(this.saveButton.button);\r\n    this.main.appendChild(this.resultButton.button);\r\n    this.main.appendChild(this.soundButton.button)\r\n    this.main.appendChild(this.puzzleContainer.puzzleContainer);\r\n    this.main.appendChild(this.frame.frame);\r\n  }\r\n\r\n  initButtons() {\r\n    this.lastGameButton.handlerButton(this.getSaveGame.bind(this))\r\n    this.shuffleButton.handlerButton(this.shufflePuzzle.bind(this));\r\n    this.saveButton.handlerButton(this.savePuzzle.bind(this));\r\n    this.resultButton.handlerButton(this.getResult.bind(this));\r\n    this.stopButton.handlerButton(this.stopTimer.bind(this))\r\n    this.soundButton.handlerButton(this.changeSound.bind(this))\r\n    this.frame.handlerFrameButton(this.reloadPuzzle.bind(this));\r\n  }\r\n\r\n  getSaveGame(){\r\n    this.puzzleContainer.getSaveGame()\r\n  }\r\n\r\n  changeSound(){\r\n    this.soundButton.button.classList.toggle('pause_sound')\r\n    this.puzzleContainer.changeSound()\r\n  }\r\n\r\n  stopTimer(){\r\n    this.stopButton.button.classList.toggle('pause')\r\n    this.puzzleContainer.pauseButtonClick()\r\n  }\r\n\r\n  initPuzzle() {\r\n    this.puzzleContainer.initPuzzle(this.puzzleSize);\r\n  }\r\n\r\n  reloadPuzzle(event) {\r\n    if (event.target.dataset.size)\r\n    this.puzzleContainer.createConfigPuzzle(event.target.dataset.size);\r\n    this.puzzleContainer.clear()\r\n  }\r\n\r\n  shufflePuzzle() {\r\n    this.puzzleContainer.createConfigPuzzle(this.puzzleContainer.size);\r\n    this.puzzleContainer.clear()\r\n  }\r\n\r\n  savePuzzle() {\r\n    this.puzzleContainer.savePuzzle.apply(this.puzzleContainer)\r\n  }\r\n\r\n  getResult() {\r\n    this.puzzleContainer.openRecordsTable()\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://webpack/./src/classes/game.js?");

/***/ }),

/***/ "./src/classes/moves.js":
/*!******************************!*\
  !*** ./src/classes/moves.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Moves\": () => (/* binding */ Moves)\n/* harmony export */ });\nclass Moves {\r\n  moves;\r\n  item;\r\n\r\n  constructor() {\r\n\r\n    this.moves = document.createElement(\"div\");\r\n    this.moves.innerText = \"Moves: \";\r\n    this.item = document.createElement(\"span\");\r\n    this.item.setAttribute(\"data-moves\", 0);\r\n    this.item.innerHTML = 0\r\n    this.item.classList.add(\"moves\");\r\n    this.moves.appendChild(this.item);\r\n    this.item.addEventListener(\"moves\", this.changeMoves.bind(this));\r\n  }\r\n\r\n  changeMoves() {   \r\n    this.item.innerHTML = ++this.item.dataset.moves;\r\n  }\r\n\r\n\r\n}\r\n\n\n//# sourceURL=webpack://webpack/./src/classes/moves.js?");

/***/ }),

/***/ "./src/classes/puzzle.js":
/*!*******************************!*\
  !*** ./src/classes/puzzle.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Puzzle\": () => (/* binding */ Puzzle)\n/* harmony export */ });\n/* harmony import */ var _click_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./click.mp3 */ \"./src/classes/click.mp3\");\n/* harmony import */ var _moves__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moves */ \"./src/classes/moves.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer */ \"./src/classes/timer.js\");\n\r\n\r\n\r\n\r\nclass Puzzle {\r\n  size;\r\n  puzzleContainer;\r\n  emptyItemPosition;\r\n  config = [];\r\n  moves;\r\n  eventMoves;\r\n  item;\r\n  recordsTable;\r\n  timer;\r\n  message;\r\n  winMessage;\r\n  pauseMusic;\r\n\r\n  constructor() {\r\n    this.puzzleContainer = document.createElement(\"div\");\r\n    this.eventMoves = new Event(\"moves\");\r\n    this.message = document.createElement(\"div\");\r\n    this.message.classList.add(\"win\");\r\n    this.timer = new _timer__WEBPACK_IMPORTED_MODULE_2__.Timer();\r\n    this.moves = new _moves__WEBPACK_IMPORTED_MODULE_1__.Moves();\r\n\r\n    this.initResordsTable();\r\n    this.initClickHandler();\r\n    this.puzzleContainer.appendChild(this.moves.moves);\r\n    this.puzzleContainer.appendChild(this.timer.timer);\r\n    this.puzzleContainer.appendChild(this.message);\r\n    this.message.addEventListener(\"click\", this.hiddenMessage.bind(this));\r\n    this.recordsTable.addEventListener(\r\n      \"click\",\r\n      this.hidenPositionTable.bind(this)\r\n    );\r\n    this.timerFlag = true;\r\n    this.pauseMusic = false;\r\n  }\r\n\r\n  getSaveGame() {\r\n    if (localStorage.getItem(\"puzzle\")) {\r\n      this.config = JSON.parse(localStorage.getItem(\"puzzle\"));\r\n      let moves = localStorage.getItem(\"moves\");\r\n\r\n      this.moves.item.innerHTML = moves;\r\n      this.moves.item.dataset.moves = moves;\r\n      let timerData = localStorage.getItem(\"timer\");\r\n      this.timer.item.innerHTML = this.timer.timeChanger(timerData);\r\n      this.timer.item.dataset.timer = timerData;\r\n      this.size = Math.sqrt(this.config.length);\r\n      this.createPuzzle();\r\n    } else {\r\n      alert(\"Нет сохраненной игры\");\r\n    }\r\n  }\r\n\r\n  initPuzzle(size) {\r\n    this.createConfigPuzzle(size);\r\n    this.timer.startTimer();\r\n  }\r\n\r\n  createConfigPuzzle(size) {\r\n    this.size = size;\r\n\r\n    do {\r\n      this.config = [];\r\n\r\n      this.emptyItemPosition =\r\n        Math.floor(Math.random() * Math.pow(this.size, 2)) + 1;\r\n\r\n      for (let i = 1; i < Math.pow(this.size, 2); i++) {\r\n        if (i == this.emptyItemPosition) {\r\n          this.config.push(\"\");\r\n        }\r\n        this.config.push(i);\r\n      }\r\n      if (this.emptyItemPosition == Math.pow(this.size, 2))\r\n        this.config.push(\"\");\r\n\r\n      this.config.sort(() => Math.random() - 0.5);\r\n    } while (this.checkConfig());\r\n    this.createPuzzle();\r\n  }\r\n\r\n  checkConfig() {\r\n    return (\r\n      this.config.reduce((acc, item, index) => {\r\n        for (let i = index; i < this.config.length; i++) {\r\n          if (item > this.config[i] && item != \"\" && this.config[i] != \"\") {\r\n            acc += 1;\r\n          }\r\n        }\r\n        return acc;\r\n      }, 0) % 2\r\n    );\r\n  }\r\n\r\n  createPuzzle() {\r\n    const puzzle = document.createElement(\"div\");\r\n\r\n    puzzle.classList.add(\"puzzle\");\r\n    puzzle.style.gridTemplateColumns = `repeat(${this.size},1fr)`;\r\n    puzzle.setAttribute(\"data-size\", this.size);\r\n    this.config.forEach((item, index) =>\r\n      puzzle.append(this.createPuzzleItem(index + 1, item))\r\n    );\r\n\r\n    if (this.checkIfPuzzleExsist()) {\r\n      this.puzzleContainer.replaceChild(\r\n        puzzle,\r\n        document.getElementsByClassName(\"puzzle\")[0]\r\n      );\r\n    } else {\r\n      this.puzzleContainer.append(puzzle);\r\n    }\r\n  }\r\n\r\n  initClickHandler() {\r\n    this.puzzleContainer.addEventListener(\r\n      \"mousedown\",\r\n      this.changePosition.bind(this)\r\n    );\r\n  }\r\n\r\n  changePosition(event) {\r\n    const targetPosition = event.target.dataset.position;\r\n    const emptyItem = document.getElementsByClassName(\"empty-item\")[0];\r\n\r\n    if (\r\n      Math.abs(targetPosition - this.emptyItemPosition) == this.size ||\r\n      (this.emptyItemPosition % this.size != 0 &&\r\n        targetPosition - this.emptyItemPosition == 1) ||\r\n      (this.emptyItemPosition % this.size != 1 &&\r\n        targetPosition - this.emptyItemPosition == -1)\r\n    ) {\r\n      let item = event.target.cloneNode(true);\r\n      item.classList.add(\"item\");\r\n      item.style.zIndex = 20;\r\n      item.style.width = event.target.offsetWidth + \"px\";\r\n      item.style.height = event.target.offsetHeight + \"px\";\r\n\r\n      item.style.position = \"absolute\";\r\n      let shiftX = event.clientX - event.target.getBoundingClientRect().left;\r\n      let shiftY = event.clientY - event.target.getBoundingClientRect().top;\r\n      item.style.top =\r\n        event.target.offsetTop +\r\n        +document.getElementsByClassName(\"puzzle\")[0].offsetTop +\r\n        \"px\";\r\n      item.style.left =\r\n        event.target.offsetLeft + this.puzzleContainer.offsetLeft + \"px\";\r\n      this.puzzleContainer.appendChild(item);\r\n      event.target.style.opacity = 0.5;\r\n      document.addEventListener(\"mousemove\", onMouseMove);\r\n      function moveAt(pageX, pageY) {\r\n        item.style.left = pageX - shiftX + \"px\";\r\n        item.style.top = pageY - shiftY + \"px\";\r\n      }\r\n\r\n      function onMouseMove(event) {\r\n        moveAt(event.pageX, event.pageY);\r\n      }\r\n\r\n      this.puzzleContainer.onmouseup = function () {\r\n        document.removeEventListener(\"mousemove\", onMouseMove);\r\n        this.puzzleContainer.onmouseup = null;\r\n        event.target.style.opacity = 1;\r\n\r\n        this.clickItem(event);\r\n        this.puzzleContainer.removeChild(item);\r\n      }.bind(this);\r\n    }\r\n  }\r\n\r\n  clickItem(event) {\r\n    this.timer.playTimer();\r\n    const targetPosition = event.target.dataset.position;\r\n    const emptyItem = document.getElementsByClassName(\"empty-item\")[0];\r\n\r\n    let configItem = this.config[targetPosition - 1];\r\n\r\n    event.target.style.order = this.emptyItemPosition;\r\n    event.target.dataset.position = this.emptyItemPosition;\r\n    this.config[targetPosition - 1] = this.config[this.emptyItemPosition - 1];\r\n    emptyItem.style.order = targetPosition;\r\n    emptyItem.dataset.position = targetPosition;\r\n    this.config[this.emptyItemPosition - 1] = configItem;\r\n    this.emptyItemPosition = targetPosition;\r\n\r\n    this.moves.item.dispatchEvent(this.eventMoves);\r\n\r\n    if (this.emptyItemPosition == this.config.length) {\r\n      this.checkWinerPosition();\r\n    }\r\n    this.playSound();\r\n  }\r\n\r\n  playSound() {\r\n    if (!this.pauseMusic) {\r\n      let audio = new Audio(_click_mp3__WEBPACK_IMPORTED_MODULE_0__);\r\n      audio.autoplay = true;\r\n    }\r\n  }\r\n\r\n  checkWinerPosition() {\r\n    for (let i = 0; i < this.config.length - 1; i++) {\r\n      if (this.config[i] != i + 1) {\r\n        return;\r\n      }\r\n    }\r\n    console.log(\"you win\");\r\n    this.saveRecord(this.moves.item.innerHTML, this.timer.item.innerHTML);\r\n    this.initResordsTable();\r\n  }\r\n\r\n  createPuzzleItem(order, innerHTML = \"\") {\r\n    const item = document.createElement(\"div\");\r\n\r\n    item.classList.add(\"item\");\r\n    item.innerHTML = innerHTML;\r\n    item.style.order = order;\r\n    item.setAttribute(\"data-position\", order);\r\n    if (innerHTML == \"\") {\r\n      item.classList.add(\"empty-item\");\r\n      this.emptyItemPosition = order;\r\n    }\r\n\r\n    return item;\r\n  }\r\n\r\n  checkIfPuzzleExsist() {\r\n    return Boolean(document.getElementsByClassName(\"puzzle\").length);\r\n  }\r\n\r\n  initResordsTable() {\r\n    this.recordsTable = document.createElement(\"div\");\r\n    this.recordsTable.classList.add(\"records-table\");\r\n    this.recordsTable.innerHTML = \"Таблица рекордов\";\r\n    this.puzzleContainer.appendChild(this.recordsTable);\r\n    let records = this.getRecords();\r\n    for (let i = 3; i <= 30; i = i + 3) {\r\n      let item = document.createElement(\"div\");\r\n      if (records.length >= i) {\r\n        let sizePlace = localStorage.getItem('size')\r\n        item.innerHTML = `${i / 3} moves: ${records[i - 3]} times: ${\r\n          records[i - 2]\r\n        } ${records[i-1]}x${records[i-1]}`;\r\n      } else {\r\n        item.innerHTML = `${i / 3} ---`;\r\n      }\r\n      this.recordsTable.appendChild(item);\r\n    }\r\n  }\r\n\r\n  openRecordsTable() {\r\n    this.recordsTable.classList.toggle(\"visibility\");\r\n  }\r\n\r\n  savePuzzle() {\r\n    localStorage.setItem(\"puzzle\", JSON.stringify(this.config));\r\n    localStorage.setItem(\"moves\", this.moves.item.dataset.moves);\r\n    localStorage.setItem(\"timer\", this.timer.item.dataset.timer);\r\n    \r\n  }\r\n\r\n  getRecords() {\r\n    let records = localStorage.getItem(\"records\");\r\n    records = records ? records.split(\",\") : [];\r\n    return records;\r\n  }\r\n\r\n  saveRecord(moves, timer,size) {\r\n    const records = this.getRecords();\r\n    this.winMessage = `Ура! Вы решили головоломку за ${timer}  и ${moves} ходов!`;\r\n\r\n    if (records.length != 0) {\r\n      for (let i = 0; i <= 30; i = i + 3) {\r\n        if (records.length <= i) break;\r\n        if (+records[i] >= moves) {\r\n          records.splice(i, 0, moves, timer, size);\r\n          break;\r\n        } else {\r\n          records.splice(records.length, 0, moves, timer);\r\n          break;\r\n        }\r\n      }\r\n    } else {\r\n      records.push(moves);\r\n      records.push(timer);\r\n      records.push(this.size)\r\n    }\r\n    localStorage.setItem(\"records\", records);\r\n    this.clear();\r\n    this.showMessage();\r\n  }\r\n\r\n  clear() {\r\n    this.moves.item.innerHTML = 0;\r\n    this.timer.item.innerHTML = \"00:00\";\r\n    this.moves.item.dataset.moves = 0;\r\n    this.timer.item.dataset.timer = 0;\r\n    this.timer.pauseTimer();\r\n  }\r\n\r\n  showMessage() {\r\n    this.message.classList.toggle(\"visibility\");\r\n    this.message.innerHTML = this.winMessage;\r\n  }\r\n\r\n  hiddenMessage() {\r\n    this.message.classList.toggle(\"visibility\");\r\n    this.createConfigPuzzle(this.size);\r\n  }\r\n\r\n  hidenPositionTable() {\r\n    this.recordsTable.classList.toggle(\"visibility\");\r\n  }\r\n\r\n  pauseTimer() {\r\n    this.timer.pauseTimer();\r\n  }\r\n\r\n  pauseButtonClick() {\r\n    this.timer.pause = !this.timer.pause;\r\n  }\r\n\r\n  changeSound() {\r\n    this.pauseMusic = !this.pauseMusic;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webpack/./src/classes/puzzle.js?");

/***/ }),

/***/ "./src/classes/timer.js":
/*!******************************!*\
  !*** ./src/classes/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Timer\": () => (/* binding */ Timer)\n/* harmony export */ });\nclass Timer {\r\n  timer;\r\n  item;\r\n  pause;\r\n\r\n  constructor() {\r\n    this.timer = document.createElement(\"div\");\r\n    this.item = document.createElement(\"span\");\r\n\r\n    this.timer.innerText = \"Timer: \";\r\n    this.item.innerHTML = \"0\";\r\n    this.item.setAttribute(\"timer\", 0);\r\n    this.pause = false;\r\n    this.timer.appendChild(this.item);\r\n    this.item.innerHTML = \"00:00\";\r\n    this.item.dataset.timer = 0;\r\n  }\r\n\r\n  startTimer() {\r\n    setInterval(() => {\r\n      if (this.pause) {\r\n          this.item.innerHTML = this.timeChanger(this.item.dataset.timer)\r\n          this.item.dataset.timer = +this.item.dataset.timer + 1\r\n      }\r\n    }, 1000);\r\n  }\r\n\r\n  pauseTimer() {\r\n    this.pause = false;\r\n  }\r\n\r\n  timeChanger(time) {\r\n    let item = time;\r\n    if (item < 10) {\r\n      return `00:0${item}`;\r\n    } else if (item < 60) {\r\n      return `00:${item}`;\r\n    } else if (Math.floor(item / 60) < 10) {\r\n      if (item % 60 < 10) {\r\n        return `0${Math.floor(item / 60)}:0${item % 60}`;\r\n      } else {\r\n        return `0${Math.floor(item / 60)}:${item % 60}`;\r\n      }\r\n    } else {\r\n      if (item % 60 < 10) {\r\n        return `${Math.floor(item / 60)}:0${item % 60}`;\r\n      } else {\r\n        return `${Math.floor(item / 60)}:${item % 60}`;\r\n      }\r\n    }\r\n  }\r\n\r\n  playTimer() {\r\n    if (document.getElementsByClassName(\"pause\")[0])\r\n      document.getElementsByClassName(\"pause\")[0].classList.remove(\"pause\");\r\n    this.pause = true;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webpack/./src/classes/timer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/game */ \"./src/classes/game.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\r\n \r\nconst body = document.getElementsByTagName('body')[0]\r\n\r\nconst game = new _classes_game__WEBPACK_IMPORTED_MODULE_0__.Game()\r\ngame.init()\r\n\r\nbody.appendChild(game.main)\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/classes/click.mp3":
/*!*******************************!*\
  !*** ./src/classes/click.mp3 ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0b3e6a1d25558aa24008.mp3\";\n\n//# sourceURL=webpack://webpack/./src/classes/click.mp3?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;