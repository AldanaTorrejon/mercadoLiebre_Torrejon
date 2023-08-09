const express = require("express")
const app = express();
const path = require("path");

app.use(express.static("./public")) //express sabe donde se encuentran archivos estaticos

const port= process.env.PORT || 3030;
app.listen(port,()=>console.log(`Servidor corriendo en el puerto${port}`));cle

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "./views/home.html"));
})

app.get("/register.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/register.html"))
    })

app.get("/login.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"))
    })