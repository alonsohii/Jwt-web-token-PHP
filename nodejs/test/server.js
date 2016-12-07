// Forma 1 Usando una funcion Anonima LINEA 4
var http = require("http");

http.createServer(function(request,response)  {
	response.writeHead(200, { "Content-Type":"text/html"});
	response.write("Hola Mundo");
	response.end();
}).listen(8888);

// Forma 2 : factorizando codigo Definiendo la funcion onRequest

/*
var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Mundo");
  response.end();
}

// Por que se usa una funcion anonima?
























http.createServer(onRequest).listen(8888);
*/

// 
/*var http = require("http");
var server = http.createServer();
server.listen(8888);
*/

// ctrl c

// Dato de interes  Pasando funciones  //

/*function decir(palabra) {
  console.log(palabra);
}

function ejecutar(algunaFuncion, valor) {
  algunaFuncion(valor);
}

ejecutar(decir, "Hola");*/