const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express(); // app객체 생성
dotenv.config();
const PORT = 4000;
const HOST = '';

//미들웨어 등록
// app.use('/example',express.static('upload')) //특정 path 
app.use('/uploads',express.static(path.join(__dirname,'../upload'))); //절대 경로 처리
app.use(cors());
app.use(express.json());
// mongoose.connect(process.env.DATABASE_SET_URI)
//     .then(()=> {
//    console.log('연결')
//     })
//     .catch((err)=> {console.log(err)})

app.get('/',(req,res)=> {
    res.send('<h2>Node</h2>');
})
app.post('/',(req,res)=> {
    console.log(req.body);
    res.json(req.body);
})
app.listen(PORT,()=> {
    console.log('is hosting 4000');
}); // port번호