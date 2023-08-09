const express = require("express")
const app = express();
const path = require("path");

app.use(express.static("./public")) //express sabe donde se encuentran archivos estaticos

app.listen(3030, () => console.log("servidor corriendo"));

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "./views/home.html"));
})

app.get("/register.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/register.html"))
    })

app.get("/login.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"))
    })