function Hero(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.attack = false;

    this.reset = function () {
        this.x = stage.x;
        this.y = stage.h - boxHeight;
    };

    this.show = function () {
        stroke(255);

        if (this.attack) {
            stroke(128, 0, 0);
            noFill();
        } else {
            stroke(255, 0, 0);
            noFill();
        }

        strokeWeight(2);
        rect(this.x, this.y, this.w, this.h);
    };

    this.update = function () {
        if (right) {
            this.x += this.w;
        }
        if (left) {
            this.x -= this.w;
        }
        if (up) {
            this.y -= this.h;
        }
        if (down) {
            this.y += this.h;
        }
        if (action) {
            this.attack = true;
        } else {
            this.attack = false;
        }

        if (clickX > -1) {
            this.x = int((clickX - stage.x) / this.w) * this.w + stage.x;
            this.y = int((clickY - stage.y) / this.h) * this.h + stage.y;
            clickX = -1;
            clickY = -1;
            this.attack = true;
        }

        this.collisionTest();
    };

    this.collisionTest = function () {
        this.stageCollision();
        this.attackCollision();
    };

    this.stageCollision = function () {
        if (this.x < stage.x) {
            this.x = stage.x;
        }
        if (this.x > stage.x + stage.w - boxWidth) {
            this.x = stage.x + stage.w - boxWidth;
        }

        if (this.y < stage.y) {
            this.y = stage.y;
        }
        if (this.y > stage.y + stage.h - boxHeight) {
            this.y = stage.y + stage.h - boxHeight;
        }
    };

    this.attackCollision = function () {
        if (!this.attack) {
            return;
        }

        var tail = tails.at(this.x, this.y);
        if(tail != null){
            tail.hit();
        }
    };
}
