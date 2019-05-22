var template = require('../views/principal');  
exports.get = function(req, res) {  
  res.writeHead(404, {
    'Content-Type': 'text/html'
  });
  res.write(template.build("404 - Página no encontrada", "¡Oh oh! Tenemos un 404", "<p>Este no es el sitio que estaba buscando...</p>"));
  res.end();
};