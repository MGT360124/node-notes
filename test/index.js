const path = require("path");
let url = path.join("http://127.0.0.1:3000",
    "static",
    "49363f50027211e9a29425a2c00ee4ac",
    "633565d0029411e98bff4d2574b6779e");
console.log("url", url.replace(/\\/g,"/").replace(/\//,"//"));