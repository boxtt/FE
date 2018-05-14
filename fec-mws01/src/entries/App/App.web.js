import Vue from 'vue/dist/vue.runtime.common'
import mws from '@fes/mws-vue-loader/lib/profiler/core.js'
import weex from 'weex-vue-render'
import moBridge from '@fes/mo-bridge'
weex.init(Vue)
Vue.use(moBridge)
Vue.use(mws)
import App from '../../pages/App.vue'
App.el = '#root'
new Vue(App)
