const { createProxyMiddleware } = require('http-proxy-middleware')
 
// eslint-disable-next-line no-undef
module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api1', { 
            target: 'https://cupfox.app',
            changeOrigin: true,
            pathRewrite: { '^/api1': '' }
        }),
         createProxyMiddleware('/api2', { 
            target: 'https://shibe.online/',
            changeOrigin: true,
            pathRewrite: { '^/api2': '' }
        }),
    )
}

