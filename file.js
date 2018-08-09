const fs = require("fs");
const url = require("./url");
const path = require("path")
let filePath =path.resolve(__dirname,"file1.txt");
fs.readFile(url.txt.txt3,"utf8",(err,data) => {
    if(err){
        throw err;
    }
    console.log("data: ", typeof JSON.parse(data).member[0].age);
});
let txt = fs.readFileSync(path.resolve(__dirname, filePath),{encoding:"utf-8"})
let reg = /@import '..\/..\/src\/theme.less\';/g
fs.writeFileSync(path.resolve(__dirname, filePath), txt.replace(reg,""))
fs.appendFileSync(path.resolve(__dirname, filePath), "\r\n@import './httpclient/index.js';")
console.log("=========================")
console.log(txt)
console.log("=========================")