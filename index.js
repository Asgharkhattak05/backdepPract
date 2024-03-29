require('dotenv').config()
const express = require('express'); 
const app = express();

const  port= 4000
app.get("/", (req, res)=>{
    res.send("Welcome to Hello World!");
})

app.get("/students" , (req, res)=>{
    res.send("Hello Students!")
})

app.get("/head" , (req, res)=>{
    res.send("<h1>This is the first Head!</h1>")
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${port}`)
})