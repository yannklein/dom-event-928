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
