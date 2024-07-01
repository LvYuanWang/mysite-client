import getSetting from '@/api/setting'
import { titleController } from '@/utils';
import { BaseUrl } from "./urlConfig";

export default {
    namespaced: true,
    status: {
        data: {},
    },
    mutations: {
        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async fetchSetting(ctx) {
            const resp = await getSetting();
            resp.avatar = BaseUrl + resp.avatar;
            resp.qqQrCode = BaseUrl + resp.qqQrCode;
            resp.weixinQrCode = BaseUrl + resp.weixinQrCode;
            ctx.commit("setData", resp);
            if (resp.favicon) {
                // <link rel="shortcut icon " type="images/x-icon" href="./favicon.ico">
                let link = document.querySelector("link[rel='shortcut icon']");
                if (link) {
                    return;
                }
                link = document.createElement('link');
                link.rel = "shortcut icon";
                link.type = "images/x-icon";
                link.href = resp.favicon;
                document.head.appendChild(link);
            }
            if (titleController.setSiteTitle && resp.siteTitle) {
                titleController.setSiteTitle(resp.siteTitle);
            }
        }
    }
}