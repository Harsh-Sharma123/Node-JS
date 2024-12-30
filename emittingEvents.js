const user = require("./User");

const emitter = new user();

emitter.on("user-created", (id, name) => {
    console.log(`${id} - ${name} User Created !!`);
});

emitter.on("user-modified", (id, name) => {
    console.log(`${id} - ${name} User Modified !!`);
});

emitter.emit("user-created", 1, 'ABC')