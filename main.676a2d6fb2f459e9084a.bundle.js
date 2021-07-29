/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 553:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/7617acf68ddcfe5d63bd.png";

/***/ }),

/***/ 625:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/8953ee5cd28a291f701f.jpg";

/***/ }),

/***/ 121:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/dcd2a2b97aaa4ba6b869.jpg";

/***/ }),

/***/ 19:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/4a11f18be318de413597.png";

/***/ }),

/***/ 374:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/e602a9705b9fe0032910.jpg";

/***/ }),

/***/ 647:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/6801f917689fc5fb5cbf.jpg";

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: ./src/page-load.js
function pageLoad() {
   //dom
      const content = document.getElementById("content");
      const titles = ["About Us", "Menu", "Contact Us"];

   //Create Elements
      for(let i=0; i < 3; i++){
         let e = document.createElement("div");
         e.classList.add("menu-tab");
         e.dataset.section = titles[i];
         e.innerHTML = titles[i];
         content.appendChild(e);
      }
}


// EXTERNAL MODULE: ./src/assets/Sanji_and_Zeff.png
var Sanji_and_Zeff = __webpack_require__(553);
;// CONCATENATED MODULE: ./src/about.js


function aboutTab() {
    const body = document.getElementById("tabs");

    const about = document.createElement("div");
    about.classList.add("about");

    let imagen = new Image();
    imagen.src = Sanji_and_Zeff;

    about.appendChild(createParagraph("I wanted to create the perfect food."));
    about.appendChild(imagen);
    about.appendChild(createParagraph("Thats why in dont believe in biology, I believe in Love"));
    body.appendChild(about);
}

function createParagraph(text){
    let e = document.createElement("p");
    e.textContent = text;
    e.classList.add("about");

    return e;
}

// EXTERNAL MODULE: ./src/assets/argollinas.jpg
var argollinas = __webpack_require__(625);
// EXTERNAL MODULE: ./src/assets/penneringo.jpg
var penneringo = __webpack_require__(121);
// EXTERNAL MODULE: ./src/assets/testicutoros.jpg
var testicutoros = __webpack_require__(374);
// EXTERNAL MODULE: ./src/assets/tetasmonja.jpg
var tetasmonja = __webpack_require__(647);
;// CONCATENATED MODULE: ./src/menu.js





function menuTab() {
    const body = document.getElementById("tabs");
    const menu = document.createElement("div");

    menu.classList.add("menu");

    //imgs
    menu.appendChild(createImage("Argollinas", "Shells with delicious whale vaginal flux"));
    menu.appendChild(createImage("Penneringo","House specialty. An orgasmic volcano of flavours"));
    menu.appendChild(createImage("Testicutoros", "Big Balls from a Big Bull, with lots of Semen inside"));
    menu.appendChild(createImage("Tetasmonja", "God´s breast, filled with lot of milk"));

    body.appendChild(menu);
}

function createImage(name,description){
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    let foodImg = new Image();
    switch (name) {
        case "Argollinas": foodImg.src = argollinas;
            break;
            case "Penneringo": foodImg.src = penneringo;
            break;
            case "Testicutoros": foodImg.src = testicutoros;
            break;
            case "Tetasmonja": foodImg.src = tetasmonja;
            break;
        default:
            break;
    }

    menuItem.appendChild(foodImg);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}
// EXTERNAL MODULE: ./src/assets/templo.png
var templo = __webpack_require__(19);
;// CONCATENATED MODULE: ./src/contact.js


function contactTab() {
    const body = document.getElementById("tabs");
    const contact = document.createElement("div");

    contact.classList.add("contact");

    let reservation = document.createElement("h2");
    reservation.innerText = "Make your reservation to Puttanesca@morinigo.com";

    let imagen = new Image();
    imagen.src = templo;

    body.appendChild(contact);
    contact.appendChild(reservation);
    contact.appendChild(imagen);
}
;// CONCATENATED MODULE: ./src/index.js






pageLoad()
aboutTab();

// Menu Evt List
const content = [...document.getElementById("content").childNodes];
content.forEach(e => {
    e.addEventListener("click", (i) => {
        sectionManager(i.target.dataset.section);
    });
});

function sectionManager(option) {
    const tab = [...document.getElementById("tabs").childNodes];
     tab[0].parentNode.removeChild(tab[0]);
 
     switch (option) {
         case "About Us": aboutTab()
         break;
         case "Menu": menuTab()
         break;
         case "Contact Us": contactTab()
         break;
         default:aboutTab()
         break;
     }
 }


})();

/******/ })()
;