var mario = document.querySelector(".mario");
var backDrop = document.getElementById("back_drop");

function marioAnimation(){
 mario.classList.toggle("running");
}

var ground1 = document.getElementById("first");
var ground2 = document.getElementById("second");


var ground1_left = 800;
var ground1_left_string = "";
var ground2_left = -52;
var ground2_left_string = "";

function groundAnimation(){
 ground1_left -= 10;
 ground1_left_string = "" + ground1_left + "px";  
 ground1.style.left = ground1_left_string;
 if(ground1_left < 0) {
  ground1_left = 852;
 }  

 ground2_left -= 10;
 ground2_left_string = "" + ground2_left + "px";  
 ground2.style.left = ground2_left_string;   

 if(ground2_left < -852) {
  ground2_left = 0;
 }   
 
}

var groundInterval;
var keyDownFix = false;

function strartAnimation(event){ 
 
 if(event.key === "ArrowRight" && !keyDownFix){
 keyDownFix = true;
 console.log(keyDownFix);
 
 marioAnimation();
 groundInterval = setInterval(groundAnimation, 50)};
}

function stopAnimation(event){
 if(event.key === "ArrowRight"){
 marioAnimation();
 clearInterval(groundInterval);
 keyDownFix = false;}
}

var body = document.querySelector("body");
body.addEventListener("keydown", strartAnimation)
body.addEventListener("keyup", stopAnimation)