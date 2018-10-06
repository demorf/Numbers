function Tails() {
    this.tails = [];

    for (var y = stage.y; y < (stage.y + stage.h); y += boxHeight) {
        for (var x = stage.x; x < (stage.x + stage.w); x += boxWidth) {
            this.tails.push(new Tail(x, y, boxWidth, boxHeight));
        }
    }

    this.show = function () {
        this.tails.forEach(function (t) {
            t.show();
        });
    };

    this.at = function (x, y) {
        var response = null;
        this.tails.forEach(function (t) {
            if (t.x == x && t.y == y) {
                response = t;
            }
        });
        return response;
    };

    this.reset = function () {
        this.tails.forEach(function (t) {
            t.reset();
        });
    };

    this.checkWin = function () {
        var response = true;
        this.tails.forEach(function (t) {

            if (t.value == targetValue && t.flaged == false) {
                response = false;
            }
        });
        return response;
    };
}