const express = require('express')
const app = express()
const port = 3200



app.get('/home' , (req,res) =>{
    res.sendFile('tes.html' , { root : __dirname})
})  
app.get('/about' , (req,res) =>{
    res.send('MY ABOUT PAGE')
})  
app.get('/style.css' , (req,res) => { 
    res.sendFile('style.css' , { root : __dirname})
})
app.get('/' , (req,res) =>{
    res.sendFile('./coba.html' , { root : __dirname})
}) 


app.use('/' , (req,res) =>{
    res.status(404)
    res.sendFile('error.html' , { root : __dirname})
})  





app.listen(port, () => {
    console.log(`Listening in Port ${port}`);
})

