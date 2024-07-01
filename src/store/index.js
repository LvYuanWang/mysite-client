// 数据仓库模块
import Vue from "vue";
import { Store, install } from "vuex";
if (!window.Vuex) {
    install(Vue);  // 使用Vuex插件
}

import banner from './banner';
import setting from './setting';
import about from './about';
import project from './project';

const store = new Store({
    strict: true, // 严格模式
    modules: {
        banner,
        setting,
        about,
        project
    }
})

export default store;