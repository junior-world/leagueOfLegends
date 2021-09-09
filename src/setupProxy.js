// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = (app) => {
    // auth 포함 하위 route에 대해서는 localhost:5000/v1을 domain으로 하여 proxy설정
    // app.use(
    //     '/lol/match',
    //     createProxyMiddleware({
    //         target: 'https://asia.api.riotgames.com',
    //         changeOrigin: true,
    //     }),
    // );
    // dummy 포함 하위 route에 대해서는 localhost:6000/v1을 domain으로 하여 proxy설정
    app.use(
        '/lol',
        createProxyMiddleware({
            target: 'https://kr.api.riotgames.com',
            changeOrigin: true,
        }),
    );
};
