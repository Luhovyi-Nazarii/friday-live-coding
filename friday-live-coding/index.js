/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/image/employees/aleksandra.png":
/*!********************************************!*\
  !*** ./src/image/employees/aleksandra.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "image/aleksandra.png";

/***/ }),

/***/ "./src/image/employees/kathy.png":
/*!***************************************!*\
  !*** ./src/image/employees/kathy.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "image/kathy.png";

/***/ }),

/***/ "./src/image/employees/melani.png":
/*!****************************************!*\
  !*** ./src/image/employees/melani.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "image/melani.png";

/***/ }),

/***/ "./src/image/logo.svg":
/*!****************************!*\
  !*** ./src/image/logo.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "image/logo.svg";

/***/ }),

/***/ "./src/image/promo/promo-image.jpg":
/*!*****************************************!*\
  !*** ./src/image/promo/promo-image.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "image/promo-image.jpg";

/***/ }),

/***/ "./src/image/strategies/1.jpg":
/*!************************************!*\
  !*** ./src/image/strategies/1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "image/1.jpg";

/***/ }),

/***/ "./src/image/strategies/2.jpg":
/*!************************************!*\
  !*** ./src/image/strategies/2.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "image/2.jpg";

/***/ }),

/***/ "./src/image/strategies/3.jpg":
/*!************************************!*\
  !*** ./src/image/strategies/3.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "image/3.jpg";

/***/ }),

/***/ "./src/image/strategies/4.jpg":
/*!************************************!*\
  !*** ./src/image/strategies/4.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "image/4.jpg";

/***/ }),

/***/ "./src/image/strategies/5.jpg":
/*!************************************!*\
  !*** ./src/image/strategies/5.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "image/5.jpg";

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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./image/logo.svg */ "./src/image/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./image/promo/promo-image.jpg */ "./src/image/promo/promo-image.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./image/strategies/1.jpg */ "./src/image/strategies/1.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./image/strategies/2.jpg */ "./src/image/strategies/2.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./image/strategies/3.jpg */ "./src/image/strategies/3.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./image/strategies/4.jpg */ "./src/image/strategies/4.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./image/strategies/5.jpg */ "./src/image/strategies/5.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./image/employees/kathy.png */ "./src/image/employees/kathy.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./image/employees/aleksandra.png */ "./src/image/employees/aleksandra.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./image/employees/melani.png */ "./src/image/employees/melani.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Friday live coding</title>\r\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n<link href=\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@400;700&display=swap\" rel=\"stylesheet\">\r\n</head>\r\n<body>\r\n  <header class=\"header\">\r\n    <div class=\"wrapper header__wrapper\">\r\n      <div class=\"header__logo-line\">\r\n        <span class=\"hamburger\">\r\n          <span class=\"hamburger__line\"></span>\r\n        </span>\r\n        <a href=\"#\" class=\"logo\">\r\n          <object data=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/svg+xml\" class=\"logo-object\">\r\n          </object>\r\n        </a>\r\n      </div>\r\n      <nav class=\"header__navigation\">\r\n        <ul class=\"navigation\">\r\n          <li class=\"navigation__link\">Home</li>\r\n          <li class=\"navigation__link\">Services</li>\r\n          <li class=\"navigation__link\">About</li>\r\n          <li class=\"navigation__link\">Product</li>\r\n        </ul>\r\n      </nav>\r\n      <div class=\"header__buttons\">\r\n        <button class=\"button button_bordered\">Sing In</button>\r\n        <button class=\"button button_colored\">Sing Up</button>\r\n      </div>\r\n    </div>\r\n  </header>\r\n  <section class=\"promo\">\r\n    <div class=\"wrapper promo__wrapper\">\r\n      <div class=\"promo__content\">\r\n        <h1 class=\"promo__title\">The Design Thinking superpowers</h1>\r\n        <p class=\"promo__text\">Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>\r\n        <div class=\"promo__buttons\">\r\n          <button class=\"button button_colored\">Get started</button>\r\n          <a href=\"#\" class=\"link-button\">\r\n            <span class=\"ico ico_play\"></span>\r\n            <span class=\"link-button__text\">Watch the Video</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <img class=\"promo__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"The Design Thinking superpowers\">\r\n    </div>\r\n  </section>\r\n  <section class=\"tools\">\r\n    <div class=\"wrapper tools__wrapper\">\r\n      <h2 class=\"tools__title\">We design tools to unveil your superpowers</h2>\r\n      <div class=\"layout-4-column\">\r\n        <div class=\"tool\">\r\n          <div class=\"tool__icon\">\r\n            <span class=\"icon-square icon-square_violet\">\r\n              <span class=\"ico ico_arrow\"></span>\r\n            </span>\r\n          </div>\r\n          <h4 class=\"tool__title\">First click tests</h4>\r\n          <p class=\"tool__text\">While most people enjoy casino gambling,</p>\r\n        </div>\r\n        <div class=\"tool\">\r\n          <div class=\"tool__icon\">\r\n            <span class=\"icon-square icon-square_yellow\">\r\n              <span class=\"ico ico_design\"></span>\r\n            </span>\r\n          </div>\r\n          <h4 class=\"tool__title\">Design surveys</h4>\r\n          <p class=\"tool__text\">Sports betting, lottery and bingo playing for the fun</p>\r\n        </div>\r\n        <div class=\"tool\">\r\n          <div class=\"tool__icon\">\r\n            <span class=\"icon-square icon-square_red\">\r\n              <span class=\"ico ico_heart\"></span>\r\n            </span>\r\n          </div>\r\n          <h4 class=\"tool__title\">Preference tests</h4>\r\n          <p class=\"tool__text\">The Myspace page defines the individual.</p>\r\n        </div>\r\n        <div class=\"tool\">\r\n          <div class=\"tool__icon\">\r\n            <span class=\"icon-square icon-square_blue\">\r\n              <span class=\"ico ico_watch\"></span>\r\n            </span>\r\n          </div>\r\n          <h4 class=\"tool__title\">Five second tests</h4>\r\n          <p class=\"tool__text\">Personal choices and the overall personality of the person.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"tools__button\">\r\n        <button class=\"button button_colored\">Sign Up now</button>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"strategies\">\r\n    <div class=\"wrapper\">\r\n      <h2 class=\"strategies__title\">Marketing Strategies</h2>\r\n      <p class=\"strategies__description\">Join 40,000+ other marketers and get proven strategies on email marketing</p>\r\n      <div class=\"strategies__tags tags\">\r\n        <span class=\"tag tag_selected\">All</span>\r\n        <span class=\"tag tag_bordered\">Art</span>\r\n        <span class=\"tag tag_bordered\">Culture</span>\r\n        <span class=\"tag tag_bordered\">Design</span>\r\n      </div>\r\n      <div class=\"layout-3-column strategy-wrapper\">\r\n        <article class=\"strategy block-shadowed\">\r\n          <img class=\"strategy_image\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"strategy\">\r\n          <div class=\"strategy__content\">\r\n            <h3 class=\"strategy__name\">Increasing Prosperity With Positive Thinking</h3>\r\n            <div class=\"strategy__tags tags\">\r\n              <span class=\"tag tag_colored\">Art</span>\r\n              <span class=\"tag tag_colored\">Design</span>\r\n            </div>\r\n          </div>\r\n        </article>\r\n        <article class=\"strategy block-shadowed\">\r\n          <img class=\"strategy_image\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"strategy\">\r\n          <div class=\"strategy__content\">\r\n            <h3 class=\"strategy__name\">Motivation Is The First Step To Success</h3>\r\n            <div class=\"strategy__tags tags\">\r\n              <span class=\"tag tag_colored\">Art</span>\r\n              <span class=\"tag tag_colored\">Design</span>\r\n            </div>\r\n          </div>\r\n        </article>\r\n        <article class=\"strategy block-shadowed\">\r\n          <img class=\"strategy_image\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"strategy\">\r\n          <div class=\"strategy__content\">\r\n            <h3 class=\"strategy__name\">Success Steps For Your Personal Or Business Life</h3>\r\n            <div class=\"strategy__tags tags\">\r\n              <span class=\"tag tag_colored\">Art</span>\r\n              <span class=\"tag tag_colored\">Design</span>\r\n            </div>\r\n          </div>\r\n        </article>\r\n        <article class=\"strategy block-shadowed\">\r\n          <img class=\"strategy_image\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"strategy\">\r\n          <div class=\"strategy__content\">\r\n            <h3 class=\"strategy__name\">Success Steps For Your Personal Or Business Life Plus Funny Image on the Back</h3>\r\n            <div class=\"strategy__tags tags\">\r\n              <span class=\"tag tag_colored\">Art</span>\r\n              <span class=\"tag tag_colored\">Design</span>\r\n            </div>\r\n          </div>\r\n        </article>\r\n        <article class=\"strategy block-shadowed\">\r\n          <img class=\"strategy_image\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"strategy\">\r\n          <div class=\"strategy__content\">\r\n            <h3 class=\"strategy__name\">Increasing Prosperity With Positive Thinking</h3>\r\n            <div class=\"strategy__tags tags\">\r\n              <span class=\"tag tag_colored\">Art</span>\r\n              <span class=\"tag tag_colored\">Design</span>\r\n            </div>\r\n          </div>\r\n        </article>\r\n        <article class=\"strategy block-shadowed\">\r\n          <img class=\"strategy_image\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"strategy\">\r\n          <div class=\"strategy__content\">\r\n            <h3 class=\"strategy__name\">Increasing Prosperity With Positive Thinking</h3>\r\n            <div class=\"strategy__tags tags\">\r\n              <span class=\"tag tag_colored\">Art</span>\r\n              <span class=\"tag tag_colored\">Design</span>\r\n            </div>\r\n          </div>\r\n        </article>\r\n        <article class=\"strategy block-shadowed\">\r\n          <img class=\"strategy_image\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"strategy\">\r\n          <div class=\"strategy__content\">\r\n            <h3 class=\"strategy__name\">Motivation Is The First Step To Success</h3>\r\n            <div class=\"strategy__tags tags\">\r\n              <span class=\"tag tag_colored\">Art</span>\r\n              <span class=\"tag tag_colored\">Design</span>\r\n            </div>\r\n          </div>\r\n        </article>\r\n        <article class=\"strategy block-shadowed\">\r\n          <img class=\"strategy_image\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"strategy\">\r\n          <div class=\"strategy__content\">\r\n            <h3 class=\"strategy__name\">Success Steps For Your Personal Or Business Life</h3>\r\n            <div class=\"strategy__tags tags\">\r\n              <span class=\"tag tag_colored\">Art</span>\r\n              <span class=\"tag tag_colored\">Design</span>\r\n            </div>\r\n          </div>\r\n        </article>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"about-us\">\r\n    <div class=\"wrapper\">\r\n      <h2 class=\"about-us__title\">About Us</h2>\r\n      <p class=\"about-us__description\">Your About Us page is vital. It’s often the first stop in any user’s journey through a website or blog. It also shouldn’t be their last, because first impressions count online just as much as they do in the real world. If your visitors aren’t impressed, you can expect them to leave without reading your awesome content or completing a conversion action (e.g., signing up for your newsletter, making a purchase).</p>\r\n      <div class=\"layout-3-column employee-container\">\r\n        <div class=\"employee block-shadowed\">\r\n          <div class=\"employee__content\">\r\n            <h5 class=\"employee__name\">Kathy Rosenberg</h5>\r\n            <p class=\"employee__title\">Product Manager</p>\r\n            <a class=\"employee__contact\" href=\"mailto:kathyr@gmail.com\">kathyr@gmail.com</a>\r\n          </div>\r\n          <img class=\"employee__photo\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Kathy Rosenberg\">\r\n        </div>\r\n        <div class=\"employee block-shadowed\">\r\n          <div class=\"employee__content\">\r\n            <h5 class=\"employee__name\">Alexandra Boyarskaya</h5>\r\n            <p class=\"employee__title\">Support Marketing Specialist</p>\r\n            <a class=\"employee__contact\" href=\"mailto:alexandrab@gmail.com\">alexandrab@gmail.com</a>\r\n          </div>\r\n          <img class=\"employee__photo\" src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Alexandra Boyarskaya\">\r\n        </div>\r\n        <div class=\"employee block-shadowed\">\r\n          <div class=\"employee__content\">\r\n            <h5 class=\"employee__name\">Melani Amini</h5>\r\n            <p class=\"employee__title\">Photographer</p>\r\n            <a class=\"employee__contact\" href=\"mailto:melania@gmail.com\">melania@gmail.com</a>\r\n          </div>\r\n          <img class=\"employee__photo\" src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Melani Amini\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"contact-us\">\r\n    <div class=\"wrapper\">\r\n      <h2 class=\"contact-us__title\">Contact Us</h2>\r\n      <div class=\"layout-2-column\">\r\n        <div class=\"contact-us__content\">\r\n          <p>Your About Us page is vital. It’s often the first stop in any user’s journey through a website or blog. It also shouldn’t be their last, because first impressions count online just as much as they do in the real world. If your visitors aren’t impressed, you can expect them to leave without reading your awesome content or completing a conversion action (e.g., signing up for your newsletter, making a purchase).</p>\r\n          <p>\r\n            <span class=\"icon__contact-us\">\r\n              <span class=\"ico ico_phone\"></span>\r\n            </span>\r\n             <a href=\"tel:+375111111111\" class=\"contact-us__links\">+375 (22) 345-00-99</a>\r\n          </p>\r\n          <p>\r\n            <span class=\"icon__contact-us\">\r\n              <span class=\"ico ico_lettr\"></span>\r\n            </span>\r\n             <a href=\"mailto:emailname@gmail.com\" class=\"contact-us__links\">emailname@gmail.com</a>\r\n          </p>\r\n        </div>\r\n        <div class=\"contact-us__form\">\r\n          <form action method=\"POST\">\r\n            <div class=\"layout-2-column contact-us__line\">\r\n              <input type=\"text\" name=\"name\" placeholder=\"Your name\">\r\n              <input type=\"email\" name=\"email\" placeholder=\"Your email\">\r\n            </div>\r\n            <textarea name=\"question\" placeholder=\"What do you want to ask?\" class=\"contact-us__line\" ></textarea>\r\n            <div class=\"contact-us__button\">\r\n              <button type=\"submit\" class=\"button button_colored\">Send</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <footer class=\"footer\">\r\n    <div class=\"wrapper footer__wrapper\">\r\n      <a href=\"#\" class=\"logo\">\r\n        <object data=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/svg+xml\" class=\"logo-object\">\r\n        </object>\r\n      </a>\r\n      <div class=\"footer-navigation layout-3-column\">\r\n        <div class=\"footer-navigation__column\">\r\n          <h4 class=\"footer-navigation__title\">Quick Links</h4>\r\n          <ul class=\"footer-navigation__links\">\r\n            <li><a href=\"#\">About Us</a></li>\r\n            <li><a href=\"#\">Blog</a></li>\r\n            <li><a href=\"#\">Contact</a></li>\r\n            <li><a href=\"#\">FAQ</a></li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"footer-navigation__column\">\r\n          <h4 class=\"footer-navigation__title\">Legal Stuff</h4>\r\n          <ul class=\"footer-navigation__links\">\r\n            <li><a href=\"#\">Disclaimer</a></li>\r\n            <li><a href=\"#\">Financing</a></li>\r\n            <li><a href=\"#\">Privacy Policy</a></li>\r\n            <li><a href=\"#\">Terms of Service</a></li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"footer-navigation__column\">\r\n          <h4 class=\"footer-navigation__title\">Quick Links</h4>\r\n          <ul class=\"footer-navigation__links\">\r\n            <li><a href=\"#\">About Us</a></li>\r\n            <li><a href=\"#\">Blog</a></li>\r\n            <li><a href=\"#\">Contact</a></li>\r\n            <li><a href=\"#\">FAQ</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</body>\r\n</html>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map