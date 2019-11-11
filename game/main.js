var welcomeScreen = document.getElementById("welcomeScreen");
welcomeScreen.addEventListener("click", startGame);

function startGame() {
  welcomeScreen.style.zIndex = 0;
  var gameScreen = document.getElementById("gameScreen");

  function positionString(n) {
    return "" + n + "px";
  }

  function addTarget(X, Y) {   
    var oldTarget = document.getElementById("target");
    if (oldTarget) {
      oldTarget.parentNode.removeChild(oldTarget);
    }
    var target = document.createElement("div");
    target.setAttribute("id", "target");
    target.style.bottom = positionString(Y);
    target.style.left = positionString(X);
    gameScreen.appendChild(target);
  }

  var x = 400;
  var y = 400;
  

  function updateX() {
    x += Math.floor(Math.random() * -100 + 50);
    if( 150 > x || x > 650){
     x = 400;
    }
  }

  function updateY() {
    y += Math.floor(Math.random() * -100 + 50);
    if( 150 > y || y > 650){
     y = 400;
    }
  }

  var scoreScreen = document.getElementById("score");

  function motion() {
    updateX();
    updateY();
    addTarget(x, y);
    if (score.length === 5) {
      clearInterval(startMotion);
      calculateScore();
      scoreScreen.style.zIndex = 200;
    }
  }

  function calculateScore() {
    var total = document.createElement("div");
    var result = 0;
    for (var i = 0; i < score.length; i++) {
      result += score[i];
    }
    score.push(result);
    total.setAttribute("class", "total")
    total.textContent = "Your total is: " + result;
    scoreScreen.appendChild(total);
  }

  var startMotion = setInterval(motion, 20);

  var scoreBoard = document.getElementById("score_board");

  function upadteScore() {
    var scoreBullet = document.createElement("div");
    scoreBullet.setAttribute("class","liveScore");
    scoreBullet.textContent =
      "Shot " + score.length + ": " + score[score.length - 1] + "pts";
    scoreBoard.appendChild(scoreBullet);
  }

  var score = [];

  function getScore() {
    var distance = Math.sqrt((x - 400) * (x - 400) + (y - 400) * (y - 400));
    var shotScore;
    if (distance < 50) {
      shotScore = 10;
    } else if (distance < 150) {
      shotScore = 5;
    } else if (distance < 250) {
      shotScore = 1;
    } else {
      shotScore = 0;
    }
    score.push(shotScore);
    upadteScore();

    var shot = document.createElement("div");
    shot.setAttribute("class", "shot");
    shot.style.bottom = positionString(y);
    shot.style.left = positionString(x);
    gameScreen.appendChild(shot);
  }
  gameScreen.addEventListener("click", getScore);

  var nameInput = document.getElementById("name");
  var addBtn = document.getElementById("addToHighScore");
  var highScoreBtn = document.getElementById("highScoreBtn")
  function addToHighScoreList() {
    var name = nameInput.value;
    if (!localStorage.getItem("list")) {
      localStorage.setItem("list", "");
    }

    var scoreText = localStorage.getItem("list");

    scoreText += name + " ";
    for (var i = 0; i < score.length; i++) {
      scoreText += score[i] + " ";
    }
    localStorage.setItem("list", scoreText); 
    nameInput.value = "";    
  }
  addBtn.addEventListener("click", addToHighScoreList);
  highScoreBtn.addEventListener("click",generateHighScoreScreen);

  function replay(){
   location = location;
  }
  var again = document.getElementById("again");
  again.addEventListener("click",replay)

  function clearScores(){
   localStorage.clear();
  }

  var reset = document.getElementById("reset");
  reset.addEventListener("click", clearScores);

  var again2 = document.getElementById("again2");
  again2.addEventListener("click",replay)
}


function generateHighScoreScreen() {
  var scoresString = localStorage.getItem("list").split(" ");
  var names = [];
  var shots = [];
  var total = [];

  for (var i = 0; i <= scoresString.length - 7; i += 7) {
    names.push(scoresString[i]);
    shots[i / 7] = [];
    for (var j = 1; j < 6; j++) {
      shots[i / 7].push(scoresString[i + j]);
    }
    total.push(scoresString[i + 6]);
  }

  var scoreMatrix = [];

  for (var i = 0; i < names.length; i++) {
    scoreMatrix[i] = [];
    scoreMatrix[i].push(names[i]);
    scoreMatrix[i].push(shots[i]);
    scoreMatrix[i].push(total[i]);
  }

  (function sortScores() {})();

  var highScoreScreen = document.getElementById("highScoreScreen");
  var table = document.createElement("table");

  var row = document.createElement("tr");
  var highScoreName = document.createElement("td")
  highScoreName.textContent = "NAME";
  row.appendChild(highScoreName);
  var scoreShots = document.createElement("td")
  scoreShots.textContent = "SHOTS";
  row.appendChild(scoreShots);
  var totalScore = document.createElement("td")
  totalScore.textContent = "TOTAL";
  row.appendChild(totalScore);
  table.appendChild(row);

  for (var i = 0; i < scoreMatrix.length && i < 5; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < 3; j++) {
      var cell = document.createElement("td");
      if (j === 1) {
        cell.textContent = scoreMatrix[i][j].join(" ");
        cell.setAttribute("class", "single_shot")
      } else {
        cell.textContent = scoreMatrix[i][j];
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  highScoreScreen.appendChild(table);
  highScoreScreen.style.zIndex = 5000;
}


