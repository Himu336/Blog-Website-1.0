require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 5002 || process.env.PORT;

app.get('',(req,res)=>{
    res.send("Hello World");
});

app.listen(PORT,()=>{
    console.log(`app listening on ${PORT}`);
});