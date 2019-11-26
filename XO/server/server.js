const http = require('http');
const hostname = '127.0.0.1';
const port = 3005;

class Player{
    constructor(char){
        this.value = char; //"X" or "O"
    }
}
class Field{
    constructor(x, y){
        this.position = {
            x,
            y
        }
        this.value = "" //"X" or "O"
    }
}
    let players = [];

    let fields = [];
    const gameState = {
        players: players,
        fields: fields,
        victory: ""
    }
    
    function generateFields(){
        gameState.victory.length = 0;        
        fields.length = 0;
        console.log(gameState);
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                const field = new Field(i, j);
                fields.push(field);
            }
        }
    }

    generateFields();

    function checkForVictory(){
        let victory = false;

        function vic(condition){
            if(condition){
                victory = true;
            }
        }
        //diagonals
        vic(fields[0].value === fields[4].value && fields[4].value ===fields[8].value && fields[0].value !== '');
        vic(fields[2].value === fields[4].value && fields[4].value ===fields[6].value && fields[2].value !== '');
        //horizontal and vertical
        for(let i = 0; i < 3; i++){
            vic(fields[i].value === fields[i + 3].value && fields[i + 3].value ===fields[i + 6].value && fields[i].value !== '');
            vic(fields[i].value === fields[i + 1].value && fields[i + 1].value ===fields[i + 2].value && fields[i].value !== '');
        }

        if(victory){
            return true;
        } else {
            return false;
        } 
    }

    function onFieldClick(query){  //query = /x=1$y=2?X or O
        const eventX = parseInt(query[3]);
        const eventY = parseInt(query[7]);
        const eventValue = query.split("?")[1];

        const eventPosition = {
            x: eventX,
            y: eventY
        }        

        fields.forEach( field => {
            const position = field.position;            
            if(position.x === eventPosition.x && position.y === eventPosition.y){
                field.value = eventValue;                
            }
        })

        if(eventValue === "X" || eventValue === "O"){
            if(checkForVictory()){
                gameState.victory = eventValue;
            }
        }
        console.log(gameState);
        
        
    }
    

    let counter = 1;
    function createPlayer(){        
        if(counter === 1){
            const player = new Player("X");
            players.length = 0;
            players.push(player);
            
        }
        if(counter === 2){
            const player = new Player("O");
            players.push(player);
            generateFields();             
            counter = 0;
        }
        counter++;
    }

    





const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if(req.url === '/start'){
      createPlayer();
      if(counter === 2){
        res.end(JSON.stringify(['X']));
      } else {
        res.end(JSON.stringify(['O']));
      }
  }
  if(req.url === '/gamestate'){
    res.end(JSON.stringify(gameState));
  }

  if(req.url[1] !== 's'){
      onFieldClick(req.url);    
  } 

  res.end(JSON.stringify(gameState));
});

server.listen(port, hostname, () => {
  console.log('IDE GAS');
});



