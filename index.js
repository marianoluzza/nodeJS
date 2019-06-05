'use strict'

const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config");

mongoose.connect(config.db, { useNewUrlParser: true }, (err,res)=>{
    if(err){
        console.log("Error al conectar a la BD", err);
        throw err;
    }
    console.log("App conectada a la BD");
    app.listen(config.port, () => {
        console.log(`Servidor arrancado en http://localhost:${config.port}`);
    });
});