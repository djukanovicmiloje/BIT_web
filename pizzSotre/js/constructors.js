"use strict"
function Product(name, price, pictureLocation){
 this.name = name;
 this.price = price;
 this.pictureLocation = pictureLocation;
 this.getInfo = function (){
  return this.name + ", " + this.price;
 }
}

function ShoppingBag(){
 this.listOfProducts = [];
 this.addProduct = function(product){
  if(product instanceof Product){
   this.listOfProducts.push(product);
  }
 };
 this.getTotal = function(){
  var total = 0;
  for(var i = 0; i < this.listOfProducts.length; i++){
   total += this.listOfProducts[i].price;
  }
  return total;
 };
}

