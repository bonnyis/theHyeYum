const express = require('express');

const app = express(); // app객체 생성

const PORT = 4000;
const HOST = '';

app.get('/',(req,res)=> {
    res.send('<h2>안녕하세요</h2>');
})

app.listen(PORT,()=> {
    console.log('is hosting 4000');
}); // port번호