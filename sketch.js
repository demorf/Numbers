var canvas;
var hero;
var tails;
var stage;

var boxWidth = 0;
var boxHeight = 0;
var boxRows = 8;
var boxColumns = 4;
var targetValue = "2";


function setup() {
    var canvas = createCanvas(windowWidth * 0.95, windowHeight * 0.95);

    stage = new Stage(width/3, 0, width/3, height);
    boxWidth = stage.w / boxColumns;
    boxHeight = stage.h / boxRows;

    tails = new Tails();
    hero = new Hero(stage.x, (stage.h - boxHeight), boxWidth, boxHeight);
    //
    targetValue = randomValue();
}


function update(){
    if(tails.checkWin()){
        reset();
    }
}

function randomValue(){
    return (Math.floor(Math.random() * 5) + 1).toString();
}

function reset(){
    targetValue = randomValue();

    tails.reset();
    hero.reset();
}

function draw() {
    update();
    background(255);
    tails.show();
    hero.show();
}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }



