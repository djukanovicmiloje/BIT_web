"use strict"

const screenWidth = 852;
const screenHeight = 480; 

const Player = function(id){
 this.nodePlayer = document.querySelector(id);
 this.positionX = 100;
 this.positionY = 100;
 this.updatePlayerPosition = function(){

 if(this.positionX > -50 && this.positionX < 640){
  this.nodePlayer.style.left = this.positionX + "px";   
 }else{
  this.positionX = parseInt(this.nodePlayer.style.left);} 

 if(this.positionY > 0 && this.positionY < 250){
  
  this.nodePlayer.style.bottom = this.positionY + "px";  
 }else{  
  this.positionY = parseInt(this.nodePlayer.style.bottom);
 } 
 }
}

let mario = new Player("#player");
/* mario.positionY = 50;
mario.updatePlayerPosition();
console.log(mario); */

const incerement = 20;

const motion = function(){
 if(test.down.active){
  mario.positionY -= incerement;
 }
 if(test.up.active){
  mario.positionY += incerement;
 }
 if(test.left.active){
  mario.positionX -= incerement;
 }
 if(test.right.active){
  mario.positionX += incerement;
 }
 mario.updatePlayerPosition();
}

setInterval(motion, 30)
