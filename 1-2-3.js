// Reading input from terminal or console

const { stdin, stdout } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

rl.question("What is your name ?", (name) => {
    console.log(name);
    rl.close();
});

rl.on('close', ()=>{
    console.log("Interface Closed !!");
    process.exit();
});