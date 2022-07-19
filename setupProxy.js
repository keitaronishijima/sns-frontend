const proxy = require('http-proxy-middleware')
module.exports = function(app) {
    const headers  = {
        "Content-Type": "application/json",
        Authorization: "https://keitaro-sns-backend.herokuapp.com/",
    }
    //proxyの第一引数はドメイン以下の部分
    //第二引数のtarget部はドメイン
    app.use(proxy("https://keitaro-sns-backend.herokuapp.com/", { target: "https://keitaro-sns-backend.herokuapp.com/",changeOrigin: true,secure: false,headers: headers}));
};