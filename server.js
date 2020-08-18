const express  = require('express');

const app = express();

app.get('/data', (req, res)=>{
    res.send("Works fine !!!")
});

app.post('/register', (req,res) =>{
    res.send("sve ok")
});

app.listen(9000, ()=>{
    console.log('Server running on port 9000')
});