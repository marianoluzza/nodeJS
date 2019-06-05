'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");
const crypto = require("crypto");

const UserSchema = Schema({
    nombre: String,
    email: {type: String, unique: true, lowercase: true},
    password: {type: String, select: false},
    categoria: {type: String, enum: ["Computación", "Telefonía", "Otros"]},
    alta: {type: Date, default: Date.now() },
    ultimoAcceso: Date,
    avatar: String,
});

UserSchema.pre('save', next => {
    let user = this;
    if(!user.isModified('password')) return next();

    bcrypt.genSalt(10, (err, salt)=>{
        if(err) return next();

        bcrypt.hash(user.password,salt, (err, hash)=>{
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.gravatar = ()=>{
    if(!this.email) return "https://gravatar.com/avatar/?s=200&d=retro";

    const md5 = crypto.createHash("md5").update(this.email).digest("hex");
    
};

module.exports = mongoose.model("User", UserSchema);