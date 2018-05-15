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
            let _this = this;
            this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            this.offlineCtx = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(2, 44100 * 120, 44100);
            this.source = this.offlineCtx.createBufferSource();
            this.video = this.$refs.video;
            this.getData();
        },
        ready() {
            console.log('media ready!');
        },

        btnClick() {
            this.song.start(0, 5, 10);
        },
        btnClick2() {
            this.video.currentTime = 6;
            this.video.play();
        },

        getData() {
            var _this = this;
            var request = new XMLHttpRequest();

            request.open('GET', '220788b1285c6b542a9941cc0d16936fef311528e3f0000ac50542caf77.mp4', true);

            request.responseType = 'arraybuffer';

            request.onload = function () {
                var audioData = request.response;

                _this.audioCtx.decodeAudioData(audioData, function (buffer) {
                    _this.source.buffer = buffer;
                    _this.source.connect(_this.offlineCtx.destination);
                    _this.source.start();
                    //source.loop = true;
                    _this.offlineCtx.startRendering().then(function (renderedBuffer) {
                        console.log('渲染完全成功');
                        _this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                        _this.song = _this.audioCtx.createBufferSource();
                        _this.song.buffer = renderedBuffer;

                        _this.song.connect(_this.audioCtx.destination);


                    }).catch(function (err) {
                        console.log('渲染失败: ' + err);
                        // 注意: 当 OfflineAudioContext 上 startRendering 被立刻调用，Promise 应该被 reject
                    });
                });
            }

            request.send();
        }

    },

});
