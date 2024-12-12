const fs = require("fs");
fs.readFile("./Files/input.txt", 'utf-8', (err, data) => {
    console.log(data);
})