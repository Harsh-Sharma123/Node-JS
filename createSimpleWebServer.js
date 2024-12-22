const http = require("http");

const server = http.createServer((req, res) => {
    console.log("A new req received !");
    // res.end("Hello from Server !")

    console.log(req.url);

    if(req.url === "/") res.statusCode(200).end("Home Page !!");
    else res.statusCode(404).end("Not Home Page !!");
});

server.listen(4001, ()=>console.log("Server is Running at 4001"));