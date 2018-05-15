import FesAudio from 'fes-audio'; // 固定，引入shell
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
            let fesAudio = new FesAudio();
            fesAudio.on('success', function () {
                setInterval(()=>{
                    console.log(fesAudio.getPitch())
                    console.log(fesAudio.getLoudness())
                },500)
            })
            fesAudio.start();
        },

    },

});
