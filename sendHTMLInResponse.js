const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        const file = fs.readFile("./Files/home.html", 'utf-8', (err, data)=>{
            res.end(data);
        })
    }
})

server.listen(4001, ()=>console.log("Server is listening at port 4001 !!"));