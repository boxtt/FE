import shell from './shell.js'; // 固定，引入shell
import {
    App,
} from '@fes/mkv-frame'; // 固定
import mm from '@fes/mo-bridge';
import mk from '@fes/mo-mock';
import mma from '@fes/mo-mma';
import './app.scss';

function extend(Child, Parent) {
    var F = function () {
    };
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;
}

var image = document.getElementById('atlas');
var atlas = {};
atlas.bird = [
    {sx: 0, sy: 970, sw: 48, sh: 48},
    {sx: 56, sy: 970, sw: 48, sh: 48},
    {sx: 112, sy: 970, sw: 48, sh: 48},
    {sx: 168, sy: 970, sw: 48, sh: 48}
];


var Item = function (draw, ctx, x, y, w, h, g) {
    this.ctx = ctx;
    this.gravity = g || 0;
    this.pos = {
        x: x || 0,
        y: y || 0
    };
    this.speed = {
        x: 0, // moving speed of the item
        y: 0
    };
    this.width = w;
    this.height = h;
    this.draw = typeof draw == 'function' ? draw : function () {
    };
    return this;
};

Item.prototype = {
    // set up the 'draw' function
    setDraw: function (draw) {
        this.draw = typeof draw == 'function' ? draw : function () {
        };
    },

    // set up the position
    setPos: function (x, y) {
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
    setSpeed: function (x, y) {
        this.speed.x = typeof x == 'number' ? x : this.speed.x;
        this.speed.y = typeof y == 'number' ? y : this.speed.y;
    },

    // set the size
    setSize: function (w, h) {
        this.width = typeof width == 'number' ? w : this.width;
        this.height = typeof height == 'number' ? h : this.height;
    },

    // update function which ran by the animation loop
    update: function () {
        this.setSpeed(null, this.speed.y + this.gravity);
        this.setPos(this.pos.x + this.speed.x, this.pos.y + this.speed.y);
        this.draw(this.ctx);
    },

    // generate the pixel map for 'pixel collision dectection'
    generateRenderMap: function (image, resolution) {
    }
};

var Bird = function (ctx, x, y, g, type) {
    this.ctx = ctx;
    this.debounce = false;
    this.gravity = g || 0;
    this.pos = {
        x: x || 0,
        y: y || 0
    };
    this.depos = {
        x: x || 0, // default position for reset
        y: y || 0
    };
    this.speed = {
        x: 0,
        y: 0
    };
    this.width = atlas.bird[0].sw || 0;
    this.height = atlas.bird[0].sh || 0;

    this.pixelMap = null; // pixel map for 'pixel collistion detection'
    this.type = type; // image type, 0: falling down, 1: sliding, 2: raising up
    this.rdeg = 0; // rotate angle, changed along with speed.y
    this.stay = false;

    this.draw = function drawPoint() {
        var ctx = this.ctx;
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
            this.height
        ); // draw the image
    };
    return this;
};
extend(Bird, Item);
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
            function () {
                this.debounce = false;
            }.bind(this),
            500
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


new App({
    shell,
    components: {},
    created() {
        this.init();
        // 发送请求
    },
    methods: {
        init() {
            var _this = this;
            this.audioCtxStream = new (window.AudioContext || window.webkitAudioContext)();
            this.audioCtxMedia = new (window.AudioContext || window.webkitAudioContext)();
            this.myMedia = this.$refs.video;
            this.myStream = this.$refs.stream;
            this.analyserStream = this.audioCtxStream.createAnalyser();
            this.analyserMedia = this.audioCtxMedia.createAnalyser();
            this.analyserStream.fftSize = 128;
            this.analyserMedia.fftSize = 128;
            this.currentSourceElement = this.myStream;
            this.currentAnalyser = this.analyserStream;
            if (!this.canvas) {
                this.canvas = this.$refs.canvas;
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;
            }
            this.initSource();
            this.draw();
            this.initCanvas();


        },
        ready() {
            // this.isReady = true;
            console.log("media ready!");
            this.sourceMedia = this.audioCtxMedia.createMediaElementSource(this.myMedia);
            this.sourceMedia.connect(this.analyserMedia);
            this.analyserMedia.connect(this.audioCtxMedia.destination);
                this.currentSourceElement.play();

        },
        initSource() {
            this.getStream().then(
                (stream) => {

                    console.log(stream);
                    console.log("stream ready!");
                    this.myStream.srcObject = stream;
                    // this.myStream.setAttribute("muted",true);
                    this.myStream.muted="muted";
                    this.sourceStream = this.audioCtxStream.createMediaStreamSource(stream);
                    this.sourceStream.connect(this.analyserStream);

                }
            ).catch(e => console.log(e)
            )

        },
        setSource() {
            if (this.sourceFrom == 'stream') {
                this.currentSourceElement = this.myStream;

            } else {
                this.currentSourceElement = this.myMedia;
            }
        },

        btnClick() {
            this.currentSourceElement.play();
        },
        changeSource() {
            this.currentSourceElement.pause();
            if (this.sourceFrom == 'stream') {
                this.audioCtxStream.suspend();
                this.audioCtxMedia.resume();
                this.sourceFrom = 'media';
                this.currentSourceElement = this.myMedia;
                this.currentAnalyser = this.analyserMedia

            } else {
                this.audioCtxMedia.suspend();
                this.audioCtxStream.resume();
                this.sourceFrom = 'stream';
                this.currentSourceElement = this.myStream;
                this.currentAnalyser = this.analyserStream;


            }
            this.setSource();
            this.currentSourceElement.play();

        },
        draw() {
            // requestAnimationFrame(draw);
            setTimeout(this.draw, 200);
            var bufferLength = this.currentAnalyser.frequencyBinCount;
            var dataArray = new Uint8Array(bufferLength);
            this.currentAnalyser.getByteTimeDomainData(dataArray);
            // console.log(dataArray);
            let count = Math.max(...dataArray) - Math.min(...dataArray);
            this.msg = (count) + ' ' + this.sourceFrom;
            if (count > 10) {
                this.birds[0].fly();
            }
            if (count > 20) {
                this.birds[1].fly();
            }

            // canvasCtx.fillStyle = 'rgb(200, 200, 200)';
            // canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
            //
            // canvasCtx.lineWidth = 2;
            // canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
            //
            // canvasCtx.beginPath();
            //
            // var sliceWidth = canvas.width * 1.0 / bufferLength;
            // var x = 0;
            //
            // for (var i = 0; i < bufferLength; i++) {
            //     var v = dataArray[i] / 128.0;
            //     var y = v * canvas.height / 2;
            //
            //     if (i === 0) {
            //         canvasCtx.moveTo(x, y);
            //     } else {
            //         canvasCtx.lineTo(x, y);
            //     }
            //
            //     x += sliceWidth;
            // }
            //
            // canvasCtx.lineTo(canvas.width, canvas.height / 2);
            // canvasCtx.stroke();
        },

        getStream() {
            navigator.getUserMedia =
                navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia ||
                navigator.msGetUserMedia;


            if (navigator.mediaDevices) {
                console.log("navigator.mediaDevices");
                return navigator.mediaDevices.getUserMedia({
                    video: {width:640,height:480,facingMode:"user"},
                    audio: true
                });
            } else if (navigator.getUserMedia) {
                console.log("navigator.getUserMedia");
                return new Promise((resolve, reject) => {
                    navigator.getUserMedia({video: true, audio: true}, resolve, reject);
                });
            } else {
                alert(
                    'Your browser does not seem to support getUserMedia, using a fallback video instead.'
                );
            }
        },


        initCanvas: function () {
            this.atlas = this.$refs.atlas;
            var theCanvas = this.canvas;
            this.ctx = theCanvas.getContext('2d');
            this.width = theCanvas.width;
            this.height = theCanvas.height;
            this.birds = [];
            // this.bird = new Bird(this.ctx, this.width / 10, this.height / 2, 0.15);
            this.birds.push(
                new Bird(this.ctx, this.width / 10, this.height / 2, 0.15, 0)
            );
            this.birds.push(
                new Bird(this.ctx, this.width / 10 + 40, this.height / 2, 0.15, 3)
            );
            this.items = [];

            var item = new Item(
                function (ctx) {
                    ctx.fillStyle = '#111111';
                    ctx.beginPath();
                    ctx.arc(
                        this.pos.x,
                        this.pos.y,
                        this.width / 2,
                        0,
                        Math.PI * 2,
                        true
                    );
                    ctx.closePath();
                    ctx.fill();
                },
                this.ctx,
                50,
                50,
                10,
                10,
                0.16
            );
            // this.items.push(item); // 将元素放入到管理列表中
            // (function(that) {
            //     document.onkeydown = function(e) {
            //         that.bird.fly();
            //     };
            // })(this);


            this.animationLoop();


        },
        // 动画循环
        animationLoop: function () {
            // this.actionByAudio();
            // scroll the video background
            this.paintVideo();

            // detect elements which is out of boundary
            this.boundDectect();

            // update the elements
            this.elementsUpdate();

            // next frame
            // if (!this.pause) {
            //     setTimeout(function() {
            //         World.animationLoop();
            //     }, 16.7);
            // }
            requestAnimationFrame(this.animationLoop);

        },

        paintVideo() {
            // console.log(this.currentSourceElement);
                this.canvas.getContext('2d').fillStyle="#000000";   //填充黑色
                this.canvas.getContext('2d').fillRect(0, 0,this.canvas.width,this.canvas.height);
                this.canvas.getContext('2d').drawImage(this.currentSourceElement, 0, 0,this.currentSourceElement.videoWidth,this.currentSourceElement.videoHeight);
            // if (!this.currentSourceElement.paused)
            // requestAnimationFrame(this.paintVideo);
        },
        // 边界检测
        boundDectect: function () {
            for (var i = 0; i < this.birds.length; i++) {
                var bird = this.birds[i];
                if (this.isBirdOutOfBound(bird)) {
                    if (bird.pos.y < 100) {
                        bird.setPos(bird.pos.x, bird.pos.y + 1);
                    } else {
                        bird.setPos(bird.pos.x, bird.pos.y - 10);
                        bird.stay = true;
                    }

                    bird.setSpeed(0, 0);
                    this.items = [];
                }
            }
        },
        // 小鸟出界检测
        isBirdOutOfBound: function (bird, callback) {
            if (bird.pos.y + bird.height + 5 > this.height) {
                // the bird reach the bottom of the world
                return true;
            }
            if (bird.pos.y < 0) {
                // the bird reach the bottom of the world
                return true;
            }
            return false;
        },
        // 更新元素
        elementsUpdate: function () {
            // update the pipes
            var i;
            for (i in this.items) {
                this.items[i].update();
            }
            for (i in this.birds) {
                this.birds[i].update();
            }
            // this.bird.update();
        },

        // actionByAudio: function() {
        //     var array = this.webaudio.getAudio();
        //     var smallArray = array.slice(0, 100);
        //     // var maxValue = Math.max(...smallArray);
        //     // var maxIndex = smallArray.indexOf(maxValue);
        //     // if (maxValue > 160) {
        //     // console.log(maxIndex, maxValue);
        //     // }
        //
        // },

    },

});
