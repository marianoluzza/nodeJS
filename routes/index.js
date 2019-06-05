'use strict'

const express = require('express');
const productController = require('../controllers/product.js');
const api = express.Router();

//product api
api.get("/product", productController.get);
api.get("/product/:id", productController.getById);
api.post("/product", productController.insert);
api.put("/product/:id", productController.update);
api.delete("/product/:id", productController.delete);

module.exports = api;