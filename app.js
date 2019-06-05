'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require("./routes");

const productController = require('./controllers/product.js');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/api", api);

app.get("/hola/:nbre", (req,res)=>{
    var rta = {
        mensaje: `Hola ${req.params.nbre}!`
    };
    res.status(200).send(rta);
});


module.exports = app;