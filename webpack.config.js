const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;    // 引入分析插件
// process.env.NODE_ENV: 环境变量，用来区分是开发环境还是生产环境
// production: 生产环境
// development: 开发环境
if (process.env.NODE_ENV === 'production') {
    // 为生产环境修改配置...
    module.exports = {
        devtool: 'none',    // 不生成source-map
        plugins: [
            new BundleAnalyzerPlugin(),   // 使用分析插件
        ],
        externals: {
            vue: 'Vue',     // 配置使用CDN
            vuex: 'Vuex',   // 配置使用CDN
            'vue-router': 'VueRouter',     // 配置使用CDN
            axios: 'axios',     // 配置使用CDN
        }
    };
} else {
    // 为开发环境修改配置...
    module.exports = {};
}