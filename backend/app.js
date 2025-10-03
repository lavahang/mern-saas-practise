let express =require('express') //import express from 'express'
let app = express()


app.get('/',(req,res)=>{
    res.send('Hello World22')
})

app.get('/about',(req,res)=>{
  res.send('About Page')
})

app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000')
})