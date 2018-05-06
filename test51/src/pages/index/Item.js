
const  Item = function (draw, ctx, x, y, w, h, g) {
    this.ctx = ctx;
    this.gravity = g || 0;
    this.pos = {
        x: x || 0,
        y: y || 0,
    };
    this.speed = {
        x: 0, // moving speed of the item
        y: 0,
    };
    this.width = w;
    this.height = h;
    this.draw = typeof draw === 'function' ? draw : function () {
    };
    return this;
};

Item.prototype = {
    // set up the 'draw' function
    setDraw (draw) {
        this.draw = typeof draw == 'function' ? draw : function () {
        };
    },

    // set up the position
    setPos (x, y) {
        // Handle: setPos({x: x, y: y});
        if (typeof x == 'object') {
            this.pos.x = typeof x.x == 'number' ? x.x : this.pos.x;
            this.pos.y = typeof x.y == 'number' ? x.y : this.pos.y;
            // Handle: setPos(x, y);
        } else {
            this.pos.x = typeof x == 'number' ? x : this.pos.x;
            this.pos.y = typeof y == 'number' ? y : this.pos.y;
        }
    },

    // set up the speed
    setSpeed (x, y) {
        this.speed.x = typeof x == 'number' ? x : this.speed.x;
        this.speed.y = typeof y == 'number' ? y : this.speed.y;
    },

    // set the size
    setSize (w, h) {
        this.width = typeof width == 'number' ? w : this.width;
        this.height = typeof height == 'number' ? h : this.height;
    },

    // update function which ran by the animation loop
    update () {
        this.setSpeed(null, this.speed.y + this.gravity);
        this.setPos(this.pos.x + this.speed.x, this.pos.y + this.speed.y);
        this.draw(this.ctx);
    },

    // generate the pixel map for 'pixel collision dectection'
    generateRenderMap (image, resolution) {
    }
};

export default Item;
