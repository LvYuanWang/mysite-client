import "nprogress/nprogress.css";
import NotFound from "@/views/NotFound.vue";
import { start, done, configure } from "nprogress";

configure({
    trickleSpeed: 15,
    showSpinner: false
})

function delay(duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, duration);
    })
}

function getComponent(compName) {
    return async () => {
        start();
        if (process.env.NODE_ENV === 'development') {
            await delay(2000);
        }
        const comp = await compName();
        done();
        return comp;
    }
}

export default [
    {
        name: "Home",
        path: '/',
        component: getComponent(() => import(/* webpackChunkName: "home" */ "@/views/Home")),
        meta: { title: '首页' }
    },
    {
        name: "Blog",
        path: '/article',
        component: getComponent(() => import(/* webpackChunkName: "blog" */ "@/views/Blog")),
        meta: { title: '文章' }
    },
    {
        name: "CategoryBlog",
        path: '/article/cate/:categoryId',
        component: getComponent(() => import(/* webpackChunkName: "blog" */ "@/views/Blog")),
        meta: { title: '文章分类' }
    },
    {
        name: "BlogDetail",
        path: '/article/detail/:id',
        component: getComponent(() => import(/* webpackChunkName: "blodDetail" */ "@/views/Blog/Detail")),
        meta: { title: '文章详情' }
    },
    {
        name: "About",
        path: '/about',
        component: getComponent(() => import(/* webpackChunkName: "about" */ "@/views/About")),
        meta: { title: '关于我' }
    },
    {
        name: "Project",
        path: '/project',
        component: getComponent(() => import(/* webpackChunkName: "project" */ "@/views/Project")),
        meta: { title: '项目&效果' }
    },
    {
        name: "Message",
        path: '/message',
        component: getComponent(() => import(/* webpackChunkName: "message" */ "@/views/Message")),
        meta: { title: '留言板' }
    },
    {
        name: "NotFound",
        path: '*',
        component: NotFound,
    }
];