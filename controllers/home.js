var template = require('../views/principal');  
var test_data = require('../model/datos');  
exports.get = function(req, res) {  
  var teamlist = test_data.teamlist;
  var strTeam = "", i = 0;
  for (i = 0; i < teamlist.count;) {
    strTeam = strTeam + "<li>" + teamlist.teams[i].country + "</li>";
    i = i + 1;
  }
  strTeam = "<ul>" + strTeam + "</ul>";
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write(template.build("Prueba de Node.js", "Bienvenido", "<p>Los equipos en el grupo " + teamlist.GroupName + " para Euro 2012 son:</p>" + strTeam));
  res.end();
};