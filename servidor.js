var http = require('http');
var url = require('url');
var dt = require('./utils');

http.createServer(function (req, res) {
    //console.log("Req:",req);
    res.writeHead(200, {'Content-Type': 'text/html'});
    var urlAux = url.parse(req.url, true);
    var q = urlAux.query;
    require('./router').get(req, res);
}).listen(8080);
