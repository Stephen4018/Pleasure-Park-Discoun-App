let view = document.getElementById("inner");
let displayName = document.getElementById("ticket-name");
let displayage = document.getElementById("ticket-age");
let displayDiscount = document.getElementById("ticket-discount");
let ticketPrice = document.getElementById("ticket-new");
let popUP = document.getElementById("view-ticket");
popUP.addEventListener("click", displayPopUp);
function displayPopUp() {
  view.style.display = "block";
}
// DOM ELEMENTS
// Get your Dom elements and assign them to a variable.
const fullNameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const passwordInput = document.getElementById("password");
const calculateBtn = document.getElementById("calculate");
const resultInput = document.getElementById("result");
const Form = document.querySelector("form");

// Variables
let result;
let age = 0;
let password;
let fullName;
let discount = 0;
let newPrice = 0;
const costPrice = 1500;
const ticketArray = new Array();

let globalStorage = Object.create({
  fullName,
  age,
  password,
  discount,
  newPrice,
});

// The following events enables the site to capture a user's input
fullNameInput.addEventListener("change", (e) => {
  let newValue = e.target.value;
  fullName = newValue;
});
ageInput.addEventListener("change", (e) => {
  let newValue = e.target.value;
  age = newValue;
});
passwordInput.addEventListener("change", (e) => {
  let newValue = e.target.value;
  password = newValue;
});

const Calculate = () => {
  if (age <= 10) {
    discount = 1 * costPrice;
    newPrice = costPrice - discount;
  } else if (age > 10 && age <= 18) {
    discount = 0.5 * costPrice;
    newPrice = costPrice - discount;
  } else if (age > 18 && age <= 27) {
    discount = 0.2 * costPrice;
    newPrice = costPrice - discount;
  } else if (age > 27 && age <= 46) {
    discount = 0.05 * costPrice;
    newPrice = costPrice - discount;
  } else if (age > 46 && age <= 65) {
    discount = 0.6 * costPrice;
    newPrice = costPrice - discount;
  } else if (age > 65) {
    discount = 1 * costPrice;
    newPrice = costPrice - discount;
  }

  //This adds the users input into an array of objects, each value are all stored in the same object. A single object belongs to a specific user
  //   ticketArray.push({
  //     fullName: fullName,
  //     age: age,
  //     discount: discount,
  //     newPrice: newPrice,
  //   });

  globalStorage = {
    fullName: fullName,
    age: age,
    password: password,
    discount: discount,
    newPrice: newPrice,
  };

  console.log(globalStorage);

  //   localStorage.setItem("tickets", JSON.stringify(ticketArray)); // This stores the list of users to the localstorage
  //   console.log(ticketArray);
  localStorage.setItem("globalStorage", JSON.stringify(globalStorage));
};

Form.addEventListener("submit", (e) => {
  e.preventDefault(); //This prevents the browser from refreshing when the button is clicked so that data would not be lost

  Calculate();
  displayName.innerHTML += fullName;
  displayage.innerHTML += age;
  displayDiscount.innerHTML += discount;
  ticketPrice.innerHTML += newPrice;
  // The following statements sets the inputs to be empty for new entries after a previous entry has been submitted
  resultInput.value = "NGN" + newPrice;
  fullNameInput.value = "";
  ageInput.value = "";
  passwordInput.value = "";
});

// The following statement is a listener which enables to browser to listen to an event when it's loaded

window.addEventListener("DOMContentLoaded", () => {
  // If the browser is loaded and tickets array is empty. This if statement sets the local storage to accept entries into the tickets array
  if (localStorage.getItem("globalStorage") === null) {
    localStorage.setItem("globalStorage", JSON.stringify([]));
  } else {
    // If the browser is loaded and there was or is something in the tickets array. This else statement gets the values of the array
    JSON.parse(localStorage.getItem("globalStorage"));
  }
});

const getLocalStorage = JSON.parse(localStorage.getItem("globalStorage"));
console.log(getLocalStorage);

let ticketFullName;

// fullNameInput.addEventListener("input", UserInput);
function userInput(e) {
  ticketFullName = e.target.value;
  console.log(ticketFullName);
 }
function userage(e) {
  ticketAge = e.target.value;
  console.log(ticketFullName);
 }
fullNameInput.addEventListener("input",(e)=>userInput(e))
ageInput.addEventListener("input",(e)=>userage(e))

