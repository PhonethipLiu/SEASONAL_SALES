"use strict";

let dom = require("./seasonal-sales");// no need to add js extension
let product_calls = {};
let base = "json/catergories.json"; // link to the base api you want to access
let products = [];

// setter: sets value 
product_calls.getAllProducts = () => {
    console.log("happy to get all planets");
    
    let productsXHR = new XMLHttpRequest(); 
    // makes a request to get api data and is expecting an action 

    productsXHR.addEventListener("load", function(){
        let data = JSON.parse(this.responseText); // parse into a JS object; responseText is property of the XMLHttpRequest method
        console.log("data in call", data);
        products = data.results; // copy of the results are in this variable
        // show the planets require some dom-stuff.js
        // dom.showPlanets(planets);
        products.map(dom.populatePage); //array method
    });

    // setter?
    productsXHR.addEventListener("error", function(){
        console.log("you have and error with the XHR call - check spelling");
    });

    // getter
    productsXHR.open("GET", "json/products.json");
    productsXHR.send();
};
 // this method returns the variable; it gets the data
 product_calls.getProducts = () => {
    return products;
};

module.exports = { product_calls };


