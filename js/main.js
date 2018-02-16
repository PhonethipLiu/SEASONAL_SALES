"use strict";

console.log("Testing Seasonal Sales");

let products = require("./seasonal-sales");

let button = document.getElementById("seasonal_discount_select");
button.addEventListener("select", products.product_calls.getAllProducts);





