const express = require("express");
const app = express();
app.use(express.static("public"));
const session = require("express-session")
const userLoggedMiddleware = require("./middlewares/userLogedMiddleware");
const cookies = require("cookie-parser");

app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(session({secret: "mensaje", resave : false, saveUninitialized: false}))
app.use(cookies());
app.use(userLoggedMiddleware);


//METHOD OVERRIDE
const methodOverride = require("method-override");
app.use(methodOverride("_method"));




//Ejecucion de ejs
app.set('view engine', 'ejs')
//------------------------


// Servidor

//Funcion para ejecutar el servidor en la red local si se especifica la ip luego de ejecutar node app.js
function servidorExterno(ip){
    if(ip =! null){
       return ip
    }
}
//------------------------


app.listen(3000, servidorExterno(process.argv[2]), function(){
    console.log("servidor levantado en el puerto 3000")
});
//------------------------

//Ruteo

const productRoutes = require("./routes/products");
const userRoutes = require("./routes/users");
const mainRoutes = require("./routes/main");
const { urlencoded } = require("express");

app.use("/products", productRoutes);
app.use("/", mainRoutes);
app.use("/user", userRoutes);
app.use(function(req,res,next){
    res.status(404).render("404.ejs")
    next()
})

//------------------------









