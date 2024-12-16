const http = require("http");

const server = http.createServer((req, res) => {
    console.log("A new req required !");
});

server.listen(4001, ()=>console.log("Server is Running at 4001"));