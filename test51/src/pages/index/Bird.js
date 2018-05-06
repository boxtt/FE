import Item from './Item.js'
let image = document.getElementById('atlas');
let atlas = {};
atlas.bird = [
    { sx: 0, sy: 970, sw: 48, sh: 48 },
    { sx: 56, sy: 970, sw: 48, sh: 48 },
    { sx: 112, sy: 970, sw: 48, sh: 48 },
    { sx: 168, sy: 970, sw: 48, sh: 48 },
];

const Bird = function (ctx, x, y, g, type) {
    this.ctx = ctx;
    this.debounce = false;
    this.gravity = g || 0;
    this.pos = {
        x: x || 0,
        y: y || 0,
    };
    this.depos = {
        x: x || 0, // default position for reset
        y: y || 0,
    };
    this.speed = {
        x: 0,
        y: 0,
    };
    this.width = atlas.bird[0].sw || 0;
    this.height = atlas.bird[0].sh || 0;

    this.pixelMap = null; // pixel map for 'pixel collistion detection'
    this.type = type; // image type, 0: falling down, 1: sliding, 2: raising up
    this.rdeg = 0; // rotate angle, changed along with speed.y
    this.stay = false;

    this.draw = function drawPoint() {
        let ctx = this.ctx;
        // ctx.clearRect(this.pos.x, this.pos.y, this.width, this.height);

        ctx.drawImage(
            image,
            atlas.bird[this.type].sx,
            atlas.bird[this.type].sy,
            this.width,
            this.height,
            this.pos.x,
            this.pos.y,
            this.width,
            this.height,
        ); // draw the image
    };
    return this;
};
Bird.prototype = new Item();

Bird.prototype.fly = function () {
    this.stay = false;
    this.setSpeed(0, -5);
    console.log('fly');
};
Bird.prototype.change = function () {
    this.stay = false;
    if (!this.debounce) {
        this.debounce = true;
        this.type == 1 ? (this.type = 3) : (this.type = 1);
        setTimeout(
            () => {
                this.debounce = false;
            },
            500,
        );
    }
};
// reset the position and speed
Bird.prototype.reset = function () {
    this.setPos(this.depos);
    this.setSpeed(0, 0);
};

// update the bird state and image
Bird.prototype.update = function () {
    if (!this.stay) {
        this.setSpeed(null, this.speed.y + this.gravity);
    } else {
        this.setSpeed(null, 0);
    }
    this.setPos(this.pos.x + this.speed.x, this.pos.y + this.speed.y); // update position
    this.draw();
};

export default Bird;