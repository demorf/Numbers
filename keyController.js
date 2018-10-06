var left = false;
var right = false;
var up = false;
var down = false;
var action = false;
var clickX = -1;
var clickY = -1;

function keyPressed(){
    switch(keyCode) {
        case UP_ARROW:
            up = true;
            break;
        case DOWN_ARROW:
            down = true;
            break;
        case RIGHT_ARROW:
            right = true;
            break;
        case LEFT_ARROW:
            left = true;
            break;
    }
    switch(key){
        case 'W':
        case 'w':
            up = true;
            break;
        case 'S':
        case 's':
            down = true;
            break;
        case 'D':
        case 'd':
            right = true;
            break;
        case 'A':
        case 'a':
            left = true;
            break;
        case ' ':
            action = true;
            break;
    }

    hero.update();
}


function keyReleased(){
    switch(keyCode) {
        case UP_ARROW:
            up = false;
            break;
        case DOWN_ARROW:
            down = false;
            break;
        case RIGHT_ARROW:
            right = false;
            break;
        case LEFT_ARROW:
            left = false;
            break;
    }
    switch(key){

        case 'W':
        case 'w':
            up = false;
            break;
        case 'S':
        case 's':
            down = false;
            break;
        case 'D':
        case 'd':
            right = false;
            break;
        case 'A':
        case 'a':
            left = false;
            break;
        case ' ':
            action = false;
            break;
    }

    hero.update();
}

function mouseClicked(){
    clickX = pmouseX;
    clickY = pmouseY;
    hero.update();
}
