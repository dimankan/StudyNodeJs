const http = require("http");
var infoRunServer = console.log("Сервер начал прослушивание запросов на порту 3000");
var forCreateServer = function (reqiest, response) {
    response.end("Hello NodeJS!!!");
}
http.createServer(forCreateServer).listen(3000, "127.0.0.1", function () { infoRunServer });

const os = require("os");
const greeting = require("./greeting");
let userName = os.userInfo().username;

console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));

const User = require("./user.js");

let dima = new User("Dima", 28);
dima.sayHi();
dima.displayInfo();

