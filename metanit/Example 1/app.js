// const http = require("http");

// http.createServer(function (reqiest, response) {
//     response.end("Hello NodeJS!");
// }).listen(3000, "127.0.0.1", function () {
//     console.log("Сервер начал прослушивание запросов на порту 3000");
// });

const http = require("http");
var servRun = console.log("Сервер начал прослушивание запросов на порту 3000");
var forCreateServer = function (reqiest, response) {
    response.end("Hello NodeJS!!!");
}

http.createServer(forCreateServer).listen(3000, "127.0.0.1", function () { servRun });
