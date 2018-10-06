var canvas;
var hero;
var tails;
var stage;

var boxWidth = 0;
var boxHeight = 0;
var boxRows = 6;
var boxColumns = 4;
var targetValue = "2";


function setup() {
    var canvas = createCanvas(windowWidth * 0.95, windowHeight * 0.95);

    var maxWidth = width/boxColumns;
    var maxHeight = height/boxRows;
    var boxSize =  (maxHeight < maxWidth)? maxHeight :  maxWidth;
    var stageWidth = boxSize * boxColumns;
    var stageHeight = boxSize * boxRows;

    stage = new Stage((width-stageWidth)/2, 0, stageWidth, stageHeight);
    boxWidth = boxSize;
    boxHeight = boxSize;

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



