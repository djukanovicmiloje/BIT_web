"use strict"
const ButtonInput = function (){
 this.active = false; 
 this.getInput = function(down) {
  if(this.active != down) this.active = down;  
 } 
} 

const Controller = function() {

 this.down  = new ButtonInput();
 this.up    = new ButtonInput();
 this.right = new ButtonInput();
 this.left  = new ButtonInput();
 
 this.keyDownUp = function (event) {  
  /* console.log(this) */
  var down = (event.type == "keydown") ? true : false;
   
  switch(event.keyCode){
   
   case 37: this.left.getInput(down); break;    //left
   case 38: this.up.getInput(down); break;      //up
   case 39: this.right.getInput(down); break;   //right
   case 40: this.down.getInput(down);           //down
   
  } 
  /* alert(event.keyCode); */
  console.log(this.up, this.down);
 }
 this.handleKeyDownUp = (event) => {this.keyDownUp(event);};

}

let test = new Controller();



window.addEventListener("keydown", test.handleKeyDownUp);
window.addEventListener("keyup", test.handleKeyDownUp);

 