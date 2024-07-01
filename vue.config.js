// vue的配置文件
module.exports = {
    devServer: {
        proxy: {
            // '/api': {
            //     target: 'http://study.duyiedu.com',
            // },
            '/api': {
                target: 'http://127.0.0.1:7001',
            }
        }
    },
    configureWebpack: require('./webpack.config.js'),   // 引入webpack配置文件
}