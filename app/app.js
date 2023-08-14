//모듈
const express = require("express");
const app = express();


// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views" , "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`))
// 디렉토리네임은 현재 app.js 가 있는 위치 안에있는 src 안에있는 public 폴더를 정적 경로로 추가해주겠다는말
//그러면 login.ejs 에서 스크립트태그로 login.js에 접근할 수 있음
app.use("/", home);
//use 는 미들웨어를 등록해주는 메서도

module.exports = app;