import getProjects from "../api/project";
import { BaseUrl } from "./urlConfig";

export default {
    namespaced: true,
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
        async fetchProjects(ctx) {
            if (ctx.state.data.length) {
                return;
            }
            ctx.commit('setLoading', true);
            const resp = await getProjects();
            for (const item of resp) {
                item.thumb = BaseUrl + item.thumb;
            }
            ctx.commit('setData', resp);
            ctx.commit('setLoading', false);
        }
    }
}