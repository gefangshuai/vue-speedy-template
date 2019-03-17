module.exports = require('vue-speedy/conf')({
    title: 'Speedy Demo',
    baseUrl: '/',
    devServer: {
        port: 6060,
        proxy: {
            '/api': {
                target: "http://localhost:8081",
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    }
})
