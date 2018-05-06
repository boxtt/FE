const Retangle = function (ctx,w, h, x, y) {
    this.ctx = ctx;
    this.w = w;
    this.h = h; // 小红块高度
    this.x = x;
    this.y = y;
    this.jg = 3;
    this.power = 0;
    this.dy = y; // 小红块位置
    this.num = 0;
    this. grd = ctx.createLinearGradient(0, 0, 0, y);
    this.grd.addColorStop(0, "#d7022a");
    this.grd.addColorStop(0.5, "#d7d700");
    this.grd.addColorStop(1, "#00E800");
}

var Rp = Retangle.prototype;

Rp.setPower = function (power) {
    this.power = power/100*this.y;
};
Rp.update = function () {
    this.num = ~~(this.power / this.h + 0.5);

    //更新小红块的位置，如果音频条长度高于红块位置，则红块位置则为音频条高度，否则让小红块下降
    var nh = this.dy + this.h;//小红块当前位置
    if (this.power >= this.y - nh) {
        this.dy = this.y - this.power - this.h - (this.power == 0 ? 0 : 1);
    } else if (nh > this.y) {
        this.dy = this.y - this.h;
    } else {
        this.dy += 1;
    }

    this.draw();
};

Rp.draw = function () {

    this.ctx.fillStyle = this.grd;
    var h = (~~(this.power / (this.h + this.jg))) * (this.h + this.jg);
    this.ctx.fillRect(this.x, this.y - h, this.w, h);
    this.ctx.fillStyle = '#111111';
    for (var i = 0; i < this.num; i++) {
        var y = this.y - i * (this.h + this.jg);

        this.ctx.fillRect(this.x - 1, y, this.w + 2, this.jg);
    }
    this.ctx.fillStyle = "#950000";
    this.ctx.fillRect(this.x, ~~this.dy, this.w, this.h);
};

export default Retangle;