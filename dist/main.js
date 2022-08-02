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

// console.log("Hi Batch #928!!!!");

// ////////
// Select DOM elements
// ////////

// with its ID (Yaya)
// const yaya = document.querySelector("#yaya");
// console.log(yaya);

// // with its tag type (h2)
// const h2 = document.querySelector("h2");
// console.log(h2);

// // with its class (group)
// const group = document.querySelector(".group");
// console.log(group);

// // by nest selection (ul of the group)
// const ul = group.querySelector("ul");
// console.log(ul);

// // select multiple elements (all the card)
// const cards = document.querySelectorAll(".card");
// console.log(cards);


// ////////
// Modify the DOM
// ////////

// add an HTML element (Jobs United ⚙️)
const teamListUl = document.querySelector(".group ul");
teamListUl.insertAdjacentHTML("beforeend", "<li>Jobs <em>United</em> ⚙️</li>");

// same but more complex (add Josh!!!)
const susthamUl = document.querySelector("#sustham ul");
susthamUl.insertAdjacentHTML(
  "afterbegin",
  `<li>
    <img src="https://avatars.githubusercontent.com/u/104883545?v=4" alt="">
    <p>Josh</p>
  </li>`
);

// change the element style (group background to green)
// Careful! background-color => backgroundColor
const group = document.querySelector(".group");
group.style.backgroundColor = "darkgreen";

// add a class to the element (add text-white to group)
// Careful! no DOT for classList
group.classList.add("text-white");

// remove it
group.classList.remove("text-white");

// add/remove every 1sec
// setInterval(() => {
//   group.classList.toggle("text-white");
// }, 3000);

// Read/Write for inputs (change the value in the email input)
const mail = document.querySelector("#email");
console.log(mail.value);

mail.value = "yann@lewagon.org";

// Read/Write the (inner) text and HTML content (FF Healthish title)
const healthish = document.querySelector("#ff-healthish h3");
console.log(healthish.value); // NOT WORKING except for inputs!
console.log(healthish.innerHTML);
console.log(healthish.innerText);

// healthish.innerText = "Hi <strong>everyone</strong>"; // SHOWS HTML CODE AS A TEXT
healthish.innerHTML = "Hi <strong>everyone</strong>";

// ////////
// Add event listeners
// ////////

// 1. Select an element (yaya picture)
// const yaya = document.querySelector("#yaya");

// // 2. Listen to an event (click on yaya picture)
// yaya.addEventListener("click", (event) => {
//   console.log(event);
//   // 3. Change the DOM (add a .selected class to yaya pic)
//   // event.currentTarget represents the clicked element, in our case yaya's picture
//   const clickedElement = event.currentTarget;
//   clickedElement.classList.toggle("selected");
// });

// 1. Select elements (all the pictures)

const pictures = document.querySelectorAll(".card img");
pictures.forEach((picture) => {
  picture.addEventListener("click", (event) => {
    console.log(event);
    // 3. Change the DOM (add a .selected class to yaya pic)
    // event.currentTarget represents the clicked element, in our case yaya's picture
    const clickedElement = event.currentTarget;
    clickedElement.classList.toggle("selected");
  });
});


/***/ })

/******/ });
//# sourceMappingURL=main.js.map