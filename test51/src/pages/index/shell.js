import Vue from 'vue';
import {
    Shell
} from '@fes/mkv-frame'; // 固定
import Demo from 'components/demo';
import '@fes/mo-static/css/ui.reset.css'; // 可引入static静态资源
import './shell.scss';

Vue.use(Shell); // 固定

// html基本组件、data
var shell = new Shell({
    el: '#root',
    components: {
        Demo
    },
    data: {
        atlas:null,
        birds:[],
        sourceFrom:'stream',
        msg:'',
        isReady: false,
        audioCtx1: null,
        audioCtx2: null,
        myMedia:null,
        myStream:null,
        currentSourceElement:null,
        source: null,
        analyser: null,
        canvas: null
    }
});

export default shell;