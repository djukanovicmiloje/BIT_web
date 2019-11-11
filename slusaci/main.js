/* var parent = document.querySelector("body");
function addDiv(){
 var div = document.createElement("div");
 var text = document.createTextNode("some random text");
 div.appendChild(text);
 div.setAttribute("class","text_box");
 parent.appendChild(div);
}

 */

var parent = document.querySelector("body");
function changeColor(){
 if(parent.classList.contains("red")){
  parent.classList.remove("red");
  parent.classList.add("blue");
 }else{
  parent.classList.remove("blue");
  parent.classList.add("red");  
 }
}
var toggle;
function startToggle(){
 toggle = setInterval(changeColor, 500)
}
function stopToggle(){
 clearInterval(toggle); 
}

var chat = document.getElementById("chat");
console.log(chat);

var sendBtn = document.getElementById("send_btn");
var msg_input = document.getElementById("msg_box")

function addMessage(){
 var div = document.createElement("div");
 var text = document.createTextNode(msg_input.value);
 div.appendChild(text);
 div.setAttribute("class","msg");
 chat.appendChild(div);
 msg_input.value = ""; 
}
