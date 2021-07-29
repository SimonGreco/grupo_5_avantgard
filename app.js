const express = require("express");
const path = require("path");
const app = express();
app.use(express.static("public"));

app.listen(3000, function(){
    console.log("servidor levantado en el puerto 3000")
});

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/views/index.html"))
});
app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname, "/views/login.html"))
});

app.get("/carrito", function(req, res){
    res.sendFile(path.join(__dirname, "/views/productCar.html"))
});

app.get("/registro", function(req, res){
    res.sendFile(path.join(__dirname, "/views/register.html"))
});
app.get("/detalle", function(req, res){
    res.sendFile(path.join(__dirname, "/views/productDetail.html"))
});




