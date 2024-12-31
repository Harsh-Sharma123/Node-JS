const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    let rs = fs.createReadStream("./Files/input.txt");
    rs.pipe(res);  
}) ;


