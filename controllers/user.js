'use strict'

const User = require("../model/user");
const jwt = require("jwt-simple");
const service = require("../services");

exports.signUp = (req, res) => {
    const user = new User({
        email: req.body.email,
        nombre: req.body.nombre,
        password: req.body.password,
    });

    user.avatar = user.gravatar();

    user.save((err, data) => {
        console.log("User:", data);
        if(err) res.status(500).send({mensaje: `Error al crear usuario. Err: ${err}`});
        res.status(200).send({token: service.createToken(data)});
    });
};

exports.signIn = (req, res) => {
    /*User.findOne({email: req.body.email}, (err, data) => {
        if(err) res.status(500).send({mensaje: `Error al ingresar. Err: ${err}`});
        if(!data) res.status(404).send({mensaje: "Error al ingresar"});
        req.user = data;
        data.mensaje = "Ingreso OK";
        data.token = service.createToken(data);
        res.status(200).send(data);
    });*/
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) return res.status(500).send({ mensaje: `Error al ingresar: ${err}` })
        if (!user) return res.status(404).send({ mensaje: `no existe el usuario: ${req.body.email}` })
    
        return user.comparePassword(req.body.password, (err, isMatch) => {
          if (err) return res.status(500).send({ mensaje: `Error al ingresar: ${err}` })
          if (!isMatch) return res.status(404).send({ mensaje: `Error de contraseña: ${req.body.email}` })
    
          req.user = user;
          return res.status(200).send({ mensaje: 'Te has logueado correctamente', token: service.createToken(user) })
        });
    
    }).select('_id email +password');
};