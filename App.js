const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.set('port', process.env.PORT);

app.listen(app.get('port'),()=>{
    console.log("server in port"+process.env.PORT);
});

app.get('/',(req, res)=>{
    res.send('servidor online')
});