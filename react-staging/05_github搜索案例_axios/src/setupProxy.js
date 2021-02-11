/* 引入代理proxy */
const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api1',{
            target: 'http://127.0.0.1:5000',
            pathRewrite: {
                '^/api1': ''
            },
            changeOrigin: true //控制服务器收到的响应头host的信息
        })
    )

}