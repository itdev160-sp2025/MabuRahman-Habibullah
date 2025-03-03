// Welcome message
var user = "Visitor"; 
var salutation = "Hello and Welcome! ";
var additionalMessage = "We are thrilled to have you here. ";
var purposeMessage = "Take your time to explore our Printer Reviews page, where we’ve gathered honest reviews to help you make informed decisions.";
var greeting = salutation + additionalMessage + purposeMessage;
var greetingEl = document.getElementById("greeting");
greetingEl.textContent = greeting;  // Display Greeting

// Product price and student discount calculation
var productPrice = 200; // Base price of the product
var studentDiscountPercentage = 15; // Discount percentage for students
var studentPrice = productPrice - (productPrice * (studentDiscountPercentage / 100)); // Calculate student price

// Update price and student price in the DOM
var priceEl = document.getElementById("price");
var studentPriceEl = document.getElementById("student-price");

priceEl.textContent = "$" + productPrice.toFixed(2); // Display product price
studentPriceEl.textContent = "$" + studentPrice.toFixed(2); // Display student price