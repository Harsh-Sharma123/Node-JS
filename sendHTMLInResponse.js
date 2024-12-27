const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
    
    const data = fs.readFileSync("./Files/home.html", 'utf-8');

    if(req.url === "/"){
        res.end(data.replace("{%Content%}", "Home Page !!"));
    }else if(req.url === "/about"){
        res.end(data.replace("{%Content%}", 'About Page !!'));
    }else{
        res.end(data.replace("{%Content%}", "Error 404 : Page Not Found !!"));
    }
    
})

server.listen(4001, ()=>console.log("Server is listening at port 4001 !!"));