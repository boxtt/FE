import shell from './shell.js'; // 固定，引入shell
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
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audioContext = new AudioContext();
            this.initAudio();
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
            let sum=0;
            let maxIndex = 0;
            for (let i = 0; i < nodes.length; i++) {
                const cc = freqByteData[nodes[i]];
                if (cc > max) {
                    max = cc;
                    maxIndex = i;
                }
                sum=sum+cc;
                values.push(cc);
            }

            return {sum:sum,maxIndex:maxIndex,values:values};
        },
        checkNote(freqByteData) {
            let sums = [];
            let results = [];

            for (var i = 0; i < this.baseNodes.length; i++) {
                let c = this.getBar(this.getSoundFreqArray(this.baseNodes[i]));
                let result=this.sumCurrentNodes(c, freqByteData);
                sums.push(result.sum);
                results.push(result);
            }
            let max = Math.max(...sums);
            let maxIndex = sums.indexOf(max);
            if (max > 300) {
                this.currentNode = this.baseNodesNames[maxIndex]+""+results[maxIndex].maxIndex;
                console.log(maxIndex, max);
            }
            return maxIndex;

        },

        updateAnalysers(time) {
            if (!this.analyserContext) {
                var canvas = document.getElementById("analyser");
                this.canvasWidth = canvas.width;
                this.canvasHeight = canvas.height;
                this.analyserContext = canvas.getContext('2d');
            }

            // analyzer draw code here
            {
                var SPACING = 3;
                var BAR_WIDTH = 1;
                var numBars = Math.round(this.canvasWidth / SPACING);
                var freqByteData = new Uint8Array(this.analyserNode.frequencyBinCount);

                this.analyserNode.getByteFrequencyData(freqByteData);
                this.analyserContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
                this.analyserContext.fillStyle = '#F6D565';
                this.analyserContext.lineCap = 'round';
                var multiplier = this.analyserNode.frequencyBinCount / numBars;

                // Draw rectangle for each frequency bin.
                for (var i = 0; i < numBars; ++i) {
                    var magnitude = 0;
                    var offset = Math.floor(i * multiplier);
                    // gotta sum/average the block, or we miss narrow-bandwidth spikes
                    for (var j = 0; j < multiplier; j++)
                        magnitude += freqByteData[offset + j];
                    magnitude = magnitude / multiplier;
                    var magnitude2 = freqByteData[i * multiplier];
                    if (i == 8) {
                        this.analyserContext.fillStyle = "hsl( " + Math.round((i * 360) / numBars) + ", 50%, 100%)";

                    } else {
                        this.analyserContext.fillStyle = "hsl( " + Math.round((i * 360) / numBars) + ", 100%, 50%)";

                    }
                    this.analyserContext.fillRect(i * SPACING, this.canvasHeight, BAR_WIDTH, -magnitude);
                }
            }
            this.checkNote(freqByteData);
            window.requestAnimationFrame(this.updateAnalysers);
        }
        ,
        gotStream(stream) {
            console.log("got stream!")
            var inputPoint = this.audioContext.createGain();
            this.biquadFilter = this.audioContext.createBiquadFilter();
            this.biquadFilter.type = "highpass";
            this.biquadFilter.frequency.setValueAtTime(100, this.audioContext.currentTime);
            this.biquadFilter.gain.setValueAtTime(25, this.audioContext.currentTime);
            // Create an AudioNode from the stream.
            var realAudioInput = this.audioContext.createMediaStreamSource(stream);
            var audioInput = realAudioInput;
            audioInput.connect(inputPoint);

//    audioInput = convertToMono( input );

            this.analyserNode = this.audioContext.createAnalyser();
            this.analyserNode.fftSize = 2048;
            inputPoint.connect(this.biquadFilter);
            this.biquadFilter.connect(this.analyserNode);

            // audioRecorder = new Recorder(inputPoint);

            var zeroGain = this.audioContext.createGain();
            zeroGain.gain.value = 0.0;
            inputPoint.connect(zeroGain);
            zeroGain.connect(this.audioContext.destination);
            this.updateAnalysers();
        }
        ,
        initAudio() {
            if (!navigator.getUserMedia)
                navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
            if (!navigator.cancelAnimationFrame)
                navigator.cancelAnimationFrame = navigator.webkitCancelAnimationFrame || navigator.mozCancelAnimationFrame;
            if (!navigator.requestAnimationFrame)
                navigator.requestAnimationFrame = navigator.webkitRequestAnimationFrame || navigator.mozRequestAnimationFrame;

            navigator.getUserMedia(
                {
                    "audio": {
                        "mandatory": {
                            "googEchoCancellation": "false",
                            "googAutoGainControl": "false",
                            "googNoiseSuppression": "false",
                            "googHighpassFilter": "false"
                        },
                        "optional": []
                    },
                }, this.gotStream, function (e) {
                    alert('Error getting audio');
                    console.log(e);
                });
        }


    }

})
;
