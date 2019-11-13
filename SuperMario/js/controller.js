"use strict"
var ButtonInput = function () {
    this.active = false;
    this.getInput = function (down) {
        if (this.active != down) {
            this.active = down
        };
    }
}

var Controller = function () {

    this.down = new ButtonInput();
    this.up = new ButtonInput();
    this.right = new ButtonInput();
    this.left = new ButtonInput();

    this.keyDownUp = function (event) {
        /* console.log(this) */
        var down = (event.type == "keydown") ? true : false;

        switch (event.keyCode) {

            case 37: this.left.getInput(down); break;
            case 38: this.up.getInput(down); break;
            case 39: this.right.getInput(down); break;
            case 40: this.down.getInput(down);

        }

    }
    this.handleKeyDownUp = (event) => { this.keyDownUp(event); };

}

var test = new Controller();



/* window.addEventListener("keydown", test.KeyDownUp); */
window.addEventListener("keydown", test.handleKeyDownUp);
window.addEventListener("keyup", test.handleKeyDownUp);

