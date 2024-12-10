// Read Files Synchronously

const { time } = require("console");
const fs = require("fs");

const data = fs.readFileSync("./Files/input.txt", 'utf-8');

console.log(data);

fs.writeFileSync("./Files/output.txt", `${data} \n\nCreated At : ${new Date()}`, 'utf-8')