const express = require("express")
const app = express()

app.get("/",(req, res)=>{
    res.send("<h1>Esto es <strong>Express.js</strong>")
})

app.listen(3000, ()=>{
    console.log("Se ha Iniciado el Servidor")
})