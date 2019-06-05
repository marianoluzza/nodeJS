const Product = require("../model/product");

exports.get = (req, res) => {
    Product.find({}, (err, data) => {
        if(err) res.status(500).send({mensaje: "Error al recuperar productos"});
        if(!data) res.status(404).send({mensaje: "No existen productos"});
        res.status(200).send(data);
    });
};

exports.getById = (req, res) => {
    let id = req.params.id;
    Product.findById(id, (err, data) => {
        if(err) res.status(404).send({mensaje: "El producto no existe"});
        res.status(200).send(data);
    });
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
    var nuevo = req.body;
    Product.findByIdAndUpdate(id, nuevo, (err, data)=>{
        if(err) res.status(500).send({mensaje: `Error al actualizar el producto: ${err}`});
        if(!data) res.status(404).send({mensaje: "El producto no existe"});
        res.status(200).send(data);
    });
};

exports.delete = (req, res) => {
    let id = req.params.id;
    Product.findByIdAndDelete(id, (err, data) => {
        if(err) res.status(500).send({mensaje: `Error al eliminar el producto: ${err}`});
        if(!data) res.status(404).send({mensaje: "El producto no existe"});
        res.status(200).send(data);
    });
};