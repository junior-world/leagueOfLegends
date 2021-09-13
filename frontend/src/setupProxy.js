// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        createProxyMiddleware('/lol/match/', {
            target: 'https://asia.api.riotgames.com',
            changeOrigin: true,
        }),
    );
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://61.84.24.210',
            changeOrigin: true,
        }),
    );
};
