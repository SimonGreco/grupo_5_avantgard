const express = require("express");
const app = express();
app.use(express.static("public"));





//Ejecucion de ejs
app.set('view engine', 'ejs')
//------------------------


// Servidor
app.listen(3000, function(){
    console.log("servidor levantado en el puerto 3000")
});
//------------------------

//Ruteo

const productRoutes = require("./routes/products");
const userRoutes = require("./routes/users");
const mainRoutes = require("./routes/main");

app.use("/product", productRoutes);
app.use("/", mainRoutes);
app.use("/user", userRoutes);

//------------------------









