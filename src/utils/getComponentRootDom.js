import Vue from 'vue';
/**
 * 得到某个组件渲染的Dom根元素
 * @param {String} comp 
 * @param {Object} props 
 */
export default function (comp, props) {
    const vm = new Vue({
        render: h => h(comp, { props })
    })
    vm.$mount();
    return vm.$el;
}