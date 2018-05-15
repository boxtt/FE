import shell from './shell.js'; // 固定，引入shell
import Item from './Item.js'; // 固定，引入shell
import Bird from './Bird.js'; // 固定，引入shell
import Retangle from './Retangle.js'; // 固定，引入shell
import {
    App,
} from '@fes/mkv-frame'; // 固定
import mm from '@fes/mo-bridge';
import mk from '@fes/mo-mock';
import mma from '@fes/mo-mma';
import './app.scss';

new App({
    shell,
    components: {},
    created() {
        this.init();
        // 发送请求
    },
    methods: {
        init() {
            let _this = this;
            this.audioCtxStream = new (window.AudioContext || window.webkitAudioContext)();
            this.audioCtxMedia = new (window.AudioContext || window.webkitAudioContext)();
            this.myMedia = this.$refs.video;
            this.myStream = this.$refs.stream;
            this.analyserStream = this.audioCtxStream.createAnalyser();
            this.analyserMedia = this.audioCtxMedia.createAnalyser();
            this.analyserStream.fftSize = 1024;
            this.analyserMedia.fftSize = 1024;
            this.currentSourceElement = this.myStream;
            this.currentAnalyser = this.analyserStream;
            if (!this.canvas) {
                this.canvas = this.$refs.canvas;
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;
            }
            this.initSource();
            this.initCanvas();
            this.draw();

        },
        ready() {
            // this.isReady = true;
            console.log('media ready!');
            this.sourceMedia = this.audioCtxMedia.createMediaElementSource(this.myMedia);
            this.sourceMedia.connect(this.analyserMedia);
            this.analyserMedia.connect(this.audioCtxMedia.destination);
            this.currentSourceElement.play();
        },
        initSource() {
            this.getStream().then(
                (stream) => {
                    console.log(stream);
                    console.log('stream ready!');
                    this.myStream.srcObject = stream;
                    // this.myStream.setAttribute("muted",true);
                    this.myStream.muted = "muted";
                    this.sourceStream = this.audioCtxStream.createMediaStreamSource(stream);
                    this.sourceStream.connect(this.analyserStream);
                },
            ).catch(e => console.log(e),
            );

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
                this.currentAnalyser = this.analyserMedia;

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
        getVocalSum(array) {//求和函数
            var num = 0;
            for (var i = 6; i < 48; i++) {
                num = num + array[i];
            }
            return num;
        },
        getSoundFreqArray(baseNode) {
            let a = [];
            for (let i = 0; i < 9; i++) {
                a.push(baseNode * Math.pow(2, i));
            }
            return a;
        },
        getBar(nodes) {
            let b = [];
            for (let i = 0; i < 9; i++) {
                b.push(Math.ceil(nodes[i] / 21.5));
            }
            return b;

        },
        //计算该node基波和谐波的和
        sumCurrentNodes(nodes, freqByteData) {
            let values = [];
            let max = 0;
            let sum = 0;
            let maxIndex = 0;
            for (let i = 0; i < nodes.length; i++) {
                const cc = freqByteData[nodes[i]];
                if (cc > max) {
                    max = cc;
                    maxIndex = i;
                }
                sum = sum + cc;
                values.push(cc);
            }

            return {sum: sum, maxIndex: maxIndex, values: values};
        },
        checkNote(freqByteData) {
            let sums = [];
            let results = [];

            for (var i = 0; i < this.baseNodes.length; i++) {
                let c = this.getBar(this.getSoundFreqArray(this.baseNodes[i]));
                let result = this.sumCurrentNodes(c, freqByteData);
                sums.push(result.sum);
                results.push(result);
            }
            let max = Math.max(...sums);
            let maxIndex = sums.indexOf(max);
            if (max > 400) {
                this.currentNode = this.baseNodesNames[maxIndex] + "" + results[maxIndex].maxIndex;
                console.log(maxIndex, max);
                return maxIndex;

            }else {return -1}

        },

        draw() {
            // requestAnimationFrame(draw);
            setTimeout(this.draw, 50);
            let bufferLength = this.currentAnalyser.frequencyBinCount;
            let dataArray = new Uint8Array(bufferLength);
            this.currentAnalyser.getByteFrequencyData(dataArray);
            // console.log(dataArray);
            const power = Math.floor((this.getVocalSum(dataArray)) / 42 / 255 * 100);

            this.msg = `${power  } ${  this.sourceFrom}`;
            var flyIndex=this.checkNote(dataArray);
            flyIndex==-1?'':this.birds[flyIndex].fly();
            this.rt_array[0].setPower(power);

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
                    video: {width: 640, height: 480, facingMode: "user"},
                    audio: true
                });
            } else if (navigator.getUserMedia) {
                console.log("navigator.getUserMedia");
                return new Promise((resolve, reject) => {
                    navigator.getUserMedia({video: true, audio: true}, resolve, reject);
                });
            }
            alert(
                'Your browser does not seem to support getUserMedia, using a fallback video instead.'
            );

        },


        initCanvas() {
            this.atlas = this.$refs.atlas;
            var theCanvas = this.canvas;
            this.ctx = theCanvas.getContext('2d');
            this.width = theCanvas.width;
            this.height = theCanvas.height;
            this.rt_array = [],	//用于存储柱形条对象
                this.rt_array.push(new Retangle(this.ctx, 30, this.height / 100, this.width - 30, this.height))
            this.birds = [];
            // this.bird = new Bird(this.ctx, this.width / 10, this.height / 2, 0.15);
            for (var i = 0; i < 7; i++) {
                this.birds.push(
                    new Bird(this.ctx, this.width / 10 + 40 * i, this.height / 2, 0.15, 0)
                );
            }


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
        animationLoop() {
            // this.actionByAudio();
            // scroll the video background
            this.paintVideo();

            // detect elements which is out of boundary
            this.boundDectect();

            // update the elements
            this.ctx.fillStyle = '#111111';
            this.ctx.fillRect(this.canvas.width - 31, 0, 31, this.canvas.height);

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
            this.canvas.getContext('2d').fillStyle = "#000000";   // 填充黑色
            this.canvas.getContext('2d').fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.canvas.getContext('2d').drawImage(this.currentSourceElement, 0, 0, this.currentSourceElement.videoWidth, this.currentSourceElement.videoHeight);
            // if (!this.currentSourceElement.paused)
            // requestAnimationFrame(this.paintVideo);
        },
        // 边界检测
        boundDectect() {
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
        isBirdOutOfBound(bird, callback) {
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
        elementsUpdate() {
            // update the pipes
            var i;
            for (i in this.items) {
                this.items[i].update();
            }
            for (i in this.birds) {
                this.birds[i].update();
            }
            for (i in this.rt_array) {
                var rt = this.rt_array[i];
                //根据比例计算应该获取第几个频率值，并且缓存起来减少计算
                // rt.index = ('index' in rt) ? rt.index : ~~(rt.x * bili);
                rt.update();
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
