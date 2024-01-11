const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); // body
const port = process.env.PORT || 3000; 
const router = require('./src/router'); 


// Json 형식의 본문을 처리하기 위한 미들웨어
app.use(bodyParser.json());

// URL 인코딩된 본문을 처리하기 위한 미들웨어 (폼 데이터)
app.use(bodyParser.urlencoded({extended : true}));

// 정적 파일 (public 디렉토리를 서버의 정적파일 디렉토리로 쓰겠다)
app.use(express.static('public'))

app.use('/', router); 

app.listen(port, () => { 
 console.log(`${port}번 포트의 서버가 돌아가고있어요 >_<`); 
});