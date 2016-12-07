var server = require("./servidor2");
var router = require("./router");

server.iniciar(router.route);