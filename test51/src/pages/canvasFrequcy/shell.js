import Vue from 'vue';
import {
    Shell,
} from '@fes/mkv-frame'; // 固定
import Demo from 'components/demo';
import '@fes/mo-static/css/ui.reset.css'; // 可引入static静态资源
import './shell.scss';

Vue.use(Shell); // 固定

// html基本组件、data
const shell = new Shell({
    el: '#root',

    data: {
        audioContext: null,
        analyserNode: null,
        analyserContext: null,
        baseNodes: [16.352, 18.354, 20.602, 21.827, 24.500, 27.500, 30.868],
        baseNodesNames: ['C','D','E','F','G','A','B'],
        currentNode:'-'
    },
});

export default shell;
