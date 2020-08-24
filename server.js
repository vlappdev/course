const express  = require('express');

const app = express();

app.use(express.json());

app.get('/data', (req, res)=>{
    res.send("Works fine !!!")
});

app.post('/register', (req,res) =>{
    //save new user
    res.send("ok")
});

app.post('/login', (req, res) => {
    res.send({
        name: "Danilo",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    })
});

app.listen(9000, ()=>{
    console.log('Server running on port 9000')
});