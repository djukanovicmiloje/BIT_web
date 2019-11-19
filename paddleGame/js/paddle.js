const GAME_WIDTH = 800;
const GAME_HEIGHT = 800;

var Paddle = function(gameWidth, gameHeight){
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.width = 150;
    this.height = 20;
    
    this.position = {
        x: this.gameWidth/2 - this.width/2,
        y: this.gameHeight - 2*this.height
    }

    this.maxSpeed = 5;
    this.speed = 0;
}
Paddle.prototype.draw = function(ctx){
    ctx.fillStyle = "#010038";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
}
Paddle.prototype.moveRight = function(){
    if(this.position.x + this.width > this.gameWidth){
        return;
    }
    this.position.x += 10;
}
Paddle.prototype.moveLeft = function(){
    if(this.position.x < 0) {
        return;
    }
    this.position.x -= 10;
}

var Ball = function(gameWidth, gameHeight){
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.width = 25;
    this.height = 25;
    this.position = {
        x: 600,
        y: 400
    }
    this.speed = {
        x: 20,
        y: 20
    }
    this.image = document.getElementById('ballImg');

}
Ball.prototype.draw = function(ctx){
    ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
}
Ball.prototype.updatePosition = function(dt){
    this.position.x += this.speed.x * dt;
    this.position.y += this.speed.y * dt;
}

Ball.prototype.collisionTop = function(element){
    if(this.position.x > element.position.x && this.position.x < element.position.x + element.width && (element.position.y - this.position.y) < this.height && (element.position.y - this.position.y ) > 0){
        return true;
    }
    return false;
}
Ball.prototype.collisionBottom = function(element){
    if(this.position.x > element.position.x && this.position.x < element.position.x + element.width && (this.position.y - element.position.y) < element.height && (this.position.y - element.position.y) > 0 ){
        return true;
    }
    return false;
}
Ball.prototype.collisionLeft = function(element){
    if(this.position.y + this.height > element.position.y && this.position.y < element.position.y + element.height && (element.position.x - this.position.x) < this.width && (element.position.x - this.position.x ) > 0){
        return true;
    }
    return false;
}
Ball.prototype.collisionRight = function(element){
    if(this.position.y + this.height > element.position.y && this.position.y < element.position.y + element.height && (this.position.x - element.position.x - element.width) < this.width && (this.position.x - element.position.x - element.width) > 0){
        return true;
    }
    return false;
}
Ball.prototype.collisionDetection = function(paddle, bricks){


    if(this.position.x < 0 || this.position.x + this.width > this.gameWidth){
        this.speed.x = - this.speed.x;
    }
    if(this.position.y < 0 || this.position.y + this.height > this.gameHeight){
        this.speed.y = - this.speed.y;
    }
    if(this.collisionTop(paddle)){
        this.speed.y = - this.speed.y;
    }
    for(var i = 0; i < bricks.length; i++){
        if(this.collisionBottom(bricks[i]) || this.collisionTop(bricks[i])){
            this.speed.y = - this.speed.y;
            bricks.splice(i, 1);
            
        }
        if(this.collisionLeft(bricks[i]) || this.collisionRight(bricks[i])){
            this.speed.x = - this.speed.x;
            bricks.splice(i, 1);
            
        }

    }
}
var Brick = function(x, y){
    this.width = 50;
    this.height = 40;
    this.alive = true;
    this.position = {
        x: x,
        y: y
    }
}
Brick.prototype.draw = function(ctx) {
    ctx.fillStyle = `"#${parseInt(Math.random()*100)}${parseInt(Math.random()*100)}${parseInt(Math.random()*100)}"`;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    console.log(ctx.fillStyle)
}

var bricks = [];

for(var i = 0; i < 4; i++){
    for(var j = 0; j < 6; j++){
        bricks.push(new Brick(120 + j*100, 100 + i*60));
    }
}



var cnavas = document.getElementById('gameScreen');
var ctx = cnavas.getContext('2d');

var paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
paddle.draw(ctx);

for(var i = 0; i < bricks.length; i++){
    bricks[i].draw(ctx);
}

var ball = new Ball(GAME_WIDTH, GAME_HEIGHT);


var gameLoop = function(){
    if(crtl.left.active){
        paddle.moveLeft();
    }
    if(crtl.right.active){
        paddle.moveRight();
    }
    ctx.clearRect(0,0,800,800)
    ball.updatePosition(0.1);
    ball.collisionDetection(paddle, bricks);
    for(var i = 0; i < bricks.length; i++){
        bricks[i].draw(ctx);
    }
    ball.draw(ctx);
    paddle.draw(ctx);
    
}

setInterval(gameLoop, 10);
