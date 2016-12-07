// Creando servidor continua despues de haberlo creado , sin ninuna peticion HTTP

var http = require("http");
var url = require("url");

function iniciar(){
	function onRequest(request,response) {
		console.log("Pteicion recibida.");
		response.writeHead(200, {"Content-Type": "text/html" });
		response.write("Hola Mundo");
		response.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log("Servidor Iniciado");
}


exports.iniciar = iniciar;
