// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://sample.bmaster.kro.kr",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};

// 개발용 서버에 /api/contacts로 요청하면
// http://sample.bmaster.kro.kr/contacts로 요청 전달 (/api 경로로의 요청을 target으로 전달)
// 만일 서비스 제공자가 제공하는 서비스 API에서 CORS같은 기법을 제공하면
// Consumer에 프록시를 만들지 않아도 직접 이용 가능
