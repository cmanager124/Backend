const express=require('express');
const dotenv = require('dotenv');
const mongoose=require('mongoose')
const cors=require('cors')
dotenv.config();
const port=process.env.PORT
const app=express()
const user=require('./routes/user');
const router = require('./routes/user');
app.use(cors())
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Database connected')
    }
})
app.use('/',user)




app.get('*',(req,res)=>{
    res.status(404).send("404 Page Not Found")
})



app.listen (port,()=>{console.log(`server started on port : http://localhost:8080/`)})