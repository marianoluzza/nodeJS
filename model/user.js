'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");
const crypto = require("crypto");

const UserSchema = Schema({
    nombre: String,
    email: {type: String, unique: true, lowercase: true},
    password: {type: String, select: false},
    alta: {type: Date, default: Date.now() },
    ultimoAcceso: Date,
    avatar: String,
});

UserSchema.pre('save', function (next) {
    let user = this;
    if(!user.isModified('password')) return next();

    console.log("genSalt:");
    bcrypt.genSalt(10, function(err, salt){
        if(err) return next(err);

        console.log("hash:");
        bcrypt.hash(user.password,salt,null, function(err, hash){
            if(err) return next(err);

            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.gravatarSize = function (size) {
    if (!size) {
      size = 200;
    }
    if (!this.email) return `https:/gravatar.com/avatar/?s${size}&d=retro`
    const md5 = crypto.createHash('md5').update(this.email).digest('hex')
    return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`
}

UserSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        callback(err, isMatch)
    });
}

module.exports = mongoose.model("User", UserSchema);