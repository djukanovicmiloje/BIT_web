//Funkcija koja od product objekta generise node obj
function generateProductElement(product){
  var productElement = document.createElement("div");
  productElement.setAttribute("class", "product_card");

  var productPicture = document.createElement("img");
  productPicture.setAttribute("src",product.pictureLocation);
  productElement.appendChild(productPicture);

  var priceTag = document.createElement("div");
  priceTag.setAttribute("class","price");
  priceTag.textContent = "Price: " + product.price;
  productElement.appendChild(priceTag);

  var addToCart = document.createElement("div");
  addToCart.setAttribute("class","add");
  addToCart.textContent = "Add to cart";
  productElement.appendChild(addToCart);

  productElement.product = product;

  return productElement;
}

var pizzaList = ["pizza1,100,./imgs/pizza1.jpeg", "pizza2,200,./imgs/pizza2.jpeg", "pizza3,300,./imgs/pizza3.jpeg"]
var pizzaProducts = [];

for(var i = 0; i < pizzaList.length; i++){
 var pizzaInfoArray = pizzaList[i].split(",");
 pizzaProducts.push(new Product(pizzaInfoArray[0],pizzaInfoArray[1],pizzaInfoArray[2]))
}

var parent = document.querySelector("#products");

for(var i = 0; i < pizzaProducts.length; i++){
 parent.appendChild(generateProductElement(pizzaProducts[i]))
}



var korpa = new ShoppingBag();

var addBtns = document.querySelectorAll(".add");

/*  for(var i = 0; i < addBtns.length; i++){
 var product = addBtns[i].parentNode.product;  //Zasto UNDEFINED
 console.log(product);
 addBtns[i].addEventListener("click", () => {korpa.addProduct(addBtns[parseInt(i)].parentNode.product); console.log(korpa);
 });
}
console.log(i);
console.log(product);
  */
 
addBtns[0].addEventListener("click", () => {korpa.addProduct(addBtns[0].parentNode.product); updateKorpa()});
addBtns[1].addEventListener("click", () => {korpa.addProduct(addBtns[1].parentNode.product); updateKorpa()});
addBtns[2].addEventListener("click", () => {korpa.addProduct(addBtns[2].parentNode.product); updateKorpa()});




var korpaElement = document.createElement("div");
var body = document.querySelector("body");
body.appendChild(korpaElement);


Array.prototype.last = function(){
 return this[this.length - 1];
}

function updateKorpa(){

 var item = document.createElement("div");
 item.setAttribute("class","item");
 item.textContent = korpa.listOfProducts.last().name + "-" + korpa.listOfProducts.last().price;
 korpaElement.appendChild(item);
}






/* testDugme.addEventListener("click",() => {korpa.addProduct(pizza); console.log(korpa); */
