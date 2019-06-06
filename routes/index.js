'use strict'

const express = require('express');
const productController = require('../controllers/product.js');
const userController = require('../controllers/user.js');
const auth = require('../middlewares/auth');
const api = express.Router();

//product api
api.get("/product", productController.get);
api.get("/product/:id", productController.getById);
api.post("/product", productController.insert);
api.put("/product/:id", productController.update);
api.delete("/product/:id", productController.delete);

//private
api.post("/signUp", userController.signUp);
api.post("/signIn", userController.signIn);
api.get("/private", auth, (req, res) => {
    res.status(200).send({mensaje: "tienes acceso", data: req.user});
});

module.exports = api;