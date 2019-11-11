var field = document.getElementById("field");
var stopBtn = document.getElementById("stop");

var stopped = false;

function stopPlayer() {
 if(stopped){
  stopped = false;
 }else{
  stopped = true;
 }
}
function addPlayer(e) {
  if (!stopped) {
    var player = document.getElementById("player");
    if (player) {
      player.parentNode.removeChild(player);
    }
    var newPlayer = document.createElement("div");
    newPlayer.setAttribute("id", "player");
    field.appendChild(newPlayer);
    var left = "" + e.offsetX + "px";
    newPlayer.style.left = left;
    var top = "" + e.offsetY + "px";
    newPlayer.style.top = top;
  }
}
stopBtn.addEventListener("click", stopPlayer)
field.addEventListener("click", addPlayer);
