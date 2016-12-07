// Creando servidor continua despues de haberlo creado , sin ninuna peticion HTTP

var http = require("http");
var url = require("url");
const util = require('util')
//var router = require("./router");

function iniciar(route) {
  function onRequest(request, response) {
    var path = url.parse(request.url).pathname;
   // var demo = request.url;
  //  console.log("Peticion para " + path + " recibida.");
    //console.log(route);
   //console.log(util.inspect( url.parse(request.url).pathname, false, null));
    route(path);

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hola Mundo");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;