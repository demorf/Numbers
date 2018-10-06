function Tail(x, y, w, h) {

    this.flaged = false;
    this.error = 0;
    this.value = "0";
    this.fontSize = 20;

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.fontSize = h * 2 / 5;//Magic

    this.resetValue = function () {
        this.value = randomValue();
    };

    this.resetValue();

    this.reset = function () {
        this.resetValue();
        this.flaged = false;
        this.error = 0;
    };

    this.hit = function(){
        if(targetValue == this.value){
            this.flaged = true;

            this.show();
        }else{
            this.error = 10;
        }
    };

    this.show = function () {
        stroke(224);
        strokeWeight(2);
        if(this.flaged){
            fill(0, 255, 0);
            rect(x, y , w, h);
        }
        if(this.error-- > 0){
            fill(255, 0, 0);
            rect(x, y , w, h);
        }

        fill(0);
        textAlign(CENTER);
        textSize(this.fontSize);
        text(this.value, this.x, this.y + this.fontSize/1.5, this.w, this.h);
    };
}

