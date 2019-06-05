'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = Schema({
    nombre: String,
    precio: {type: Number, default: 0},
    foto: String,
    categoria: {type: String, enum: ["Computación", "Telefonía", "Otros"]},
    descripcion: String,
});

module.exports = mongoose.model("Product", ProductSchema);