
Ball.prototype.collisionTop = function(element){
    if(this.position.x > element.position.x && this.position.x < element.position.x + element.width && (this.position.y - element.position.y) < this.height && (this.position.y - element.position.y) > 0){
        return true;
    }
    return false;
}
