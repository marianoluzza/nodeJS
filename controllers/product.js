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
    res.status(200).send(req.body);
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