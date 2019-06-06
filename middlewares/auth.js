'use strict'

const service = require("../services");

function isAuth(req, res, next) {
    if(!req.headers.authorization) return res.status(403).send({mensaje: "No tiene autorización"});

    const token = req.headers.authorization.split(" ")[1];//bearer token
    
    service.decodeToken(token)
    .then(response => {
        req.user = response;
        next();
    })
    .catch(response => {
        res.status(response.status).send({mensaje: response.mensaje});
    });
}


module.exports = isAuth;