'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

const productController = require('./controllers/product.js');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/hola/:nbre", (req,res)=>{
    var rta = {
        mensaje: `Hola ${req.params.nbre}!`
    };
    res.status(200).send(rta);
});

app.get("/api/product", productController.get);
app.get("/api/product/:id", productController.getById);
app.post("/api/product", productController.insert);
app.put("/api/product/:id", productController.update);
app.delete("/api/product/:id", productController.delete);

mongoose.connect("mongodb://localhost:27017/shop", { useNewUrlParser: true }, (err,res)=>{
    if(err){
        console.log("Error al conectar a la BD", err);
        throw err;
    }
    console.log("App conectada a la BD");
    app.listen(port, () => {
        console.log(`Servidor arrancado en http://localhost:${port}`);
    });
});