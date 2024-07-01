import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routers";
import { titleController } from '@/utils';

if (!window.VueRouter) {
    Vue.use(VueRouter);    // 使用一个vue插件
}

const router = new VueRouter({
    // 配置路由规则
    routes,
    // 改变路由模式
    mode: "history",
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        titleController.setControllTitle(to.meta.title);
    }
    next();
})

export default router;