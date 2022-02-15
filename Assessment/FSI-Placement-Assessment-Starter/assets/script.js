// HINT: You can delete this console.log after you no longer need it!
console.log("JavaScript code has loaded!");
// First, tell us your name
let yourName = "Dimitri"; // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0; // Gingerbread
let cc = 0; // Chocolate Chip
let sugar = 0; // Sugar Sprinkle
let total = 0;
let gbqty = document.querySelector("#qty-gb");
let ccqty = document.querySelector("#qty-cc");
let sugerqty = document.querySelector("#qty-sugar");
let totalqty = document.querySelector("#qty-total");

// selecting the element with an id of credit
const credit = document.querySelector("#credit");
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector("#add-gb");

// Code to update name display
credit.textContent = `Created by ${yourName}`;

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener("click", function () {
  // HINT: You can delete this console.log after you no longer need it!
  console.log("Gingerbread + button was clicked!");

  // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
});

//TODO: Hook up event listeners for the rest of the button

document.getElementById("add-gb").addEventListener("click", function () {
  gb++;

  console.log(gb);

  document.querySelector("#qty-gb").textContent = gb;
});

document.getElementById("minus-gb").addEventListener("click", function () {
  gb--;

  console.log(gb);

  document.querySelector("#qty-gb").textContent = gb;
});

document.getElementById("add-cc").addEventListener("click", function () {
  cc++;
  console.log(cc);

  document.querySelector("#qty-cc").textContent = cc;
});

document.getElementById("minus-cc").addEventListener("click", function () {
  cc--;

  console.log(cc);

  document.querySelector("#qty-cc").textContent = cc;
});

document.getElementById("add-sugar").addEventListener("click", function () {
  sugar++;
  console.log(sugar);

  document.querySelector("#qty-sugar").textContent = sugar;
});

document.getElementById("minus-sugar").addEventListener("click", function () {
  sugar--;

  console.log(sugar);

  document.querySelector("#qty-sugar").textContent = sugar;
});

document.getElementById("add-gb").addEventListener("click", function () {
  total++;

  console.log(total);

  document.querySelector("#qty-total").textContent = total;
});

document.getElementById("add-sugar").addEventListener("click", function () {
  total++;

  console.log(total);

  document.querySelector("#qty-total").textContent = total;
});

document.getElementById("add-cc").addEventListener("click", function () {
  total++;

  console.log(total);

  document.querySelector("#qty-total").textContent = total;
});

document.getElementById("minus-gb").addEventListener("click", function () {
  total--;

  console.log(total);

  document.querySelector("#qty-total").textContent = total;
});

document.getElementById("minus-sugar").addEventListener("click", function () {
  total--;

  console.log(total);

  document.querySelector("#qty-total").textContent = total;
});

document.getElementById("minus-cc").addEventListener("click", function () {
  total--;

  console.log(total);

  document.querySelector("#qty-total").textContent = total;
});
