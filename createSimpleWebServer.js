const http = require("http");

const server = http.createServer((req, res) => {
    console.log("A new req received !");
    res.end("Hello from Server !")
});

server.listen(4001, ()=>console.log("Server is Running at 4001"));