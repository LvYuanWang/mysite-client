import getBanners from "@/api/banner";
import { BaseUrl } from "./urlConfig";

export default {
    namespaced: true,   // 开启命名空间
    state: {
        isLoading: false,
        data: [],
    },
    mutations: {
        setLoading(state, payload) {
            state.isLoading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async fetchBanner(ctx) {
            if (ctx.state.data.length) {
                return;
            }
            ctx.commit('setLoading', true);
            const resp = await getBanners();
            for (const item of resp) {
                item.midImg = BaseUrl + item.midImg;
                item.bigImg = BaseUrl + item.bigImg;
            }
            ctx.commit('setData', resp);
            ctx.commit('setLoading', false);
        }
    }
}