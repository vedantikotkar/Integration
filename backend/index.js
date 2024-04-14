const express=require('express');
const app=express();
const cors = require('cors'); 
app.use(cors());

const bodyParser=require ('body-parser');
app.use(bodyParser.json());
const port=2000;
const Authroute=require ('./route/route');

app.use('/Auth',Authroute);

app.listen(port,()=>{
    console.log("server is running");
})