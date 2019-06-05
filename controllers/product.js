const Product = require("../model/product");

exports.get = (req, res) => {
    var lista = {
        products: [],
    };
    res.status(200).send(lista);
};

exports.getById = (req, res) => {
    var item = {
        product: {
            id: req.params.id,
        },
    };
    res.status(200).send(item);
};

exports.insert = (req, res) => {
    console.log("Alta producto:", req.body);
    let data = new Product();
    data.nombre = req.body.nombre;
    data.precio = req.body.precio;
    data.foto  = req.body.foto ;
    data.categoria = req.body.categoria;
    data.descripcion = req.body.descripcion;    
    data.save((err,data) => {
        if(err) res.status(500).send({err});
        res.status(200).send({data});
    });
};

exports.update = (req, res) => {
    var id = req.params.id;
    console.log("Mod producto("+id+"):", req.body);
    res.status(200).send(req.body);
};

exports.delete = (req, res) => {
    var id = req.params.id;
    console.log("Del producto ("+id+")");
    res.status(200).send(id);
};