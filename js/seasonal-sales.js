"use strict";

function showProducts(productArray) {
   console.log("show me some products", productArray);
}

function populatePage(item, index) {
   //make a div to put the rendered html
   let newDiv = document.createElement("div");
   newDiv.innerHTML = itemGrid(item, index);
   document.getElementById("seasonal_products").append(newDiv);
}

function showProductList(val) {
   let output = `<li><a href="${val}">${val}</a></li>`;
   return output;
}

function itemGrid(item, index) {
   console.log("itemGrid");
   let productArray = item.price;
   let productList;

   productArray.forEach((item) => {
    productList = (productList) ? productList + showProductList(item) : showProductList(item); 
   });

   let output =
      `<section id="product--${index}" class="product-wrapper" style="border: 1px dotted">
      
      <p><strong>Name: ${item.name}</strong> ${item.category_id} <span>Price: ${productList} </span></p>
      
      </section>`;
   return output;
}

module.exports = { populatePage };