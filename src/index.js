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
