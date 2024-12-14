const fs = require("fs");
fs.readFile("./Files/input.txt", 'utf-8', (err, data) => {
    console.log(data);
    fs.writeFile("./Files/output2.txt", data, (err) => {
        if(err){
            console.log("Error while writing file : ", err);
        }else{
            console.log("File Written Successfully!!");
        }
    });
}
)