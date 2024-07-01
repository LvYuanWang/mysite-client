import axios from 'axios';
import showMessage from '../utils/showMessage';

// 创建axios实例,拦截请求和响应
const ins = axios.create();
ins.interceptors.response.use(function (resp) {
    if (resp.data.code !== 0) {
        showMessage({
            content: resp.data.msg,
            type: "error",
            duration: 1500,
        })
        return null;
    }
    return resp.data.data;
})

export default ins;