import Observer from './Observer'

class FesAudio extends Observer {


    constructor(input) {
        super(); // 调用父类的constructor(x, y)
        this.input = input;
        this.stream = null;
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        this.audioContext = new AudioContext();
        this.FREQBINCOUNT = 2048;
        this.freqByteData = new Uint8Array(this.FREQBINCOUNT);
        this.analyserNode = null;
        this.baseNodes = [16.352, 18.354, 20.602, 21.827, 24.500, 27.500, 30.868];
        this.baseNodesNames = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
        this.currentNode = '-';
        this.dispatchEvent('success');
        this.dispatchEvent('failed');

        if (this.input && typeof this.input === 'object') {
            this._initMediaElement();
        } else {
            // this._initStream();
        }
    }

    start() {
        if (this.input && typeof this.input === 'object') {
            console.log('media begin to play')
            this.input.play();
        } else {
            this._initStream();
        }

    }

    pause() {
        if (this.input && typeof this.input === 'object') {
            this.input.pause();
        } else {
            var track = this.stream.getTracks()[0];  // if only one media track
            track.stop();
        }

    }

    getPitch(args) {
        this.analyserNode.getByteFrequencyData(this.freqByteData);
        return this._checkNote(this.freqByteData);
    }

    getLoudness(args) {
        this.analyserNode.getByteFrequencyData(this.freqByteData);
        var num = 0;
        for (var i = 6; i < 48; i++) {
            num = num + this.freqByteData[i];
        }
        var loudness = Math.floor((num) / 42 / 255 * 100);
        return loudness;

    }

    _initMediaElement() {
        this.input.onloadeddata = () => {
            var _this = this;
            this.analyserNode = this.audioContext.createAnalyser();
            var sourceMedia = this.audioContext.createMediaElementSource(this.input);
            sourceMedia.connect(this.analyserNode);
            this.analyserNode.connect(this.audioContext.destination);
            this.freqByteData = new Uint8Array(this.analyserNode.frequencyBinCount);

            this.fireEvent('success');

        }
        this.input.onerror = () => {
            this.fireEvent('failed');

        }

    }


    _initStream() {
        var _this = this;
        if (!navigator.getUserMedia)
            navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

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
            }, this._gotStream.bind(this), function (e) {
                _this.fireEvent('failed', e);
            });
    }

    _gotStream(stream) {
        this.stream = stream;
        var inputPoint = this.audioContext.createGain();
        this.biquadFilter = this.audioContext.createBiquadFilter();
        this.biquadFilter.type = "highpass";
        this.biquadFilter.frequency.setValueAtTime(100, this.audioContext.currentTime);
        this.biquadFilter.gain.setValueAtTime(25, this.audioContext.currentTime);
        // Create an AudioNode from the stream.
        var audioInput = this.audioContext.createMediaStreamSource(stream);
        audioInput.connect(inputPoint);
        this.analyserNode = this.audioContext.createAnalyser();
        this.analyserNode.fftSize = this.FREQBINCOUNT;
        inputPoint.connect(this.biquadFilter);
        this.biquadFilter.connect(this.analyserNode);
        var zeroGain = this.audioContext.createGain();
        zeroGain.gain.value = 0.0;
        inputPoint.connect(zeroGain);
        zeroGain.connect(this.audioContext.destination);
        this.freqByteData = new Uint8Array(this.analyserNode.frequencyBinCount);
        this.fireEvent('success');
    }


    _getSoundFreqArray(baseNode) {
        let a = [];
        for (let i = 0; i < 9; i++) {
            a.push(baseNode * Math.pow(2, i));
        }
        return a;
    }

    _getBar(nodes) {
        let b = [];
        for (let i = 0; i < 9; i++) {
            b.push(Math.ceil(nodes[i] / 21.5));
        }
        return b;

    }

    //计算该node基波和谐波的和
    _sumCurrentNodes(nodes, freqByteData) {
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
    }

    _checkNote(freqByteData) {
        let sums = [];
        let results = [];

        for (var i = 0; i < this.baseNodes.length; i++) {
            let c = this._getBar(this._getSoundFreqArray(this.baseNodes[i]));
            let result = this._sumCurrentNodes(c, freqByteData);
            sums.push(result.sum);
            results.push(result);
        }
        let max = Math.max(...sums);
        let maxIndex = sums.indexOf(max);
        if (max > 300) {
            this.currentNode = this.baseNodesNames[maxIndex] + "" + results[maxIndex].maxIndex;
        }
        return this.currentNode;

    }


    getInput() {
        console.log(this.input);
    }

}

export default FesAudio;