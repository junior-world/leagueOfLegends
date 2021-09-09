const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = (app) =>{
   
    app.use(
        createProxyMiddleware('/lol/match/',{
            target: 'https://asia.api.riotgames.com',
            changeOrigin:true
        })
    )
}