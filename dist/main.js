/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

console.log("Hi Batch #858!!!!");

// ////////
// Select DOM elements
// ////////

// with its ID (Shinji)
const shinji = document.querySelector("#shinji");
console.log(shinji);

// with its tag type (h2)
const h2 = document.querySelector("h2");
console.log(h2);

// with its class (group)
const group = document.querySelector(".group");
console.log(group);

// by nest selection (ul of the group)
const ul = group.querySelector("ul");
console.log(ul);

// select multiple elements (all the card)
const cardList = document.querySelectorAll(".card");
console.log(cardList);

// ////////
// Modify the DOM
// ////////

// add an HTML element (Juventus de MediRechi)
const list = document.querySelector(".group ul");
console.log(list);
list.insertAdjacentHTML(
  "beforeend",
  "<li><em>Juventus</em> de MediRechi 🇮🇹</li>"
);

// same but more complex (add James!!!)
const nurtureCard = document.querySelector("#nurture ul");
nurtureCard.insertAdjacentHTML(
  "beforeend",
  `<li>
    <img src="https://avatars.githubusercontent.com/u/74216026?v=4" alt="">
    <p>James</p>
  </li>`
);

// change the element style (group background to green)
// Careful! background-color => backgroundColor
group.style.backgroundColor = "green";

// add a class to the element (add text-white to group)
// Careful! no DOT for classList
group.classList.add("text-white");

// remove it
group.classList.remove("text-white");

// add/remove every 1sec
// setInterval(() => {
//   group.classList.toggle("text-white");
// }, 1000);

// Read/Write for inputs (change the value in the email input)
const emailInput = document.querySelector("#email");
console.log(emailInput.value);
emailInput.value = "yann@lewagon.org";

// Read/Write the (inner) text and HTML content (FF Ronin 🥷 title)
const roninTitle = document.querySelector("#ff-ronin h3");
// console.log(roninTitle);
// console.log(roninTitle.innerText);
// console.log(roninTitle.innerHTML);
// console.log(group.innerHTML);
// group.innerHTML = ""; // to remove everythjing in the div group
// group.remove() // remove the  whole div group
roninTitle.innerHTML = "Hello <strong>everyone</strong>";

// ////////
// Add event listeners
// ////////

// // 1. Select elements (Shinji's picture)
// const shinjiPic = document.querySelector("#shinji");

// // 2. Listen to an event (a click on Shinji's picture)
// shinjiPic.addEventListener("click", (event) => {
//   // this is a callback function
//   // it is called only when the user click
//   console.log(event);
//   console.log(event.currentTarget); // the element we clicked
//   // 3. Change the DOM (add the .selected class top Shinji's picture)
//   event.currentTarget.classList.toggle("selected");
// });

// 1. Select elements (Shinji's picture)
const pictures = document.querySelectorAll(".card img");

pictures.forEach((picture) => {
  // 2. Listen to an event (a click on Shinji's picture)
  picture.addEventListener("click", (event) => {
    // this is a callback function
    // it is called only when the user click
    console.log(event);
    // debugger
    console.log(event.currentTarget); // the element we clicked
    // 3. Change the DOM (add the .selected class top Shinji's picture)
    event.currentTarget.classList.toggle("selected");
  });
});


/***/ })

/******/ });
//# sourceMappingURL=main.js.map