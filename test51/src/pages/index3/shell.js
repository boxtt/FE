import Vue from 'vue';
import {
    Shell,
} from '@fes/mkv-frame'; // 固定
import Demo from 'components/demo';
import '@fes/mo-static/css/ui.reset.css'; // 可引入static静态资源

Vue.use(Shell); // 固定

// html基本组件、data
const shell = new Shell({
    el: '#root',
    components: {
        Demo,
    },
    data: {
    },
});

export default shell;
