const fs = require("fs");
const http = require("http");
const url = require("./url");

http.get({ host: url.host[0] }, (res) => {
    console.log(`Got a response from ${url.host[0]}`);
}).on("error", (e) => {
    console.log(`There was an error from ${url.host[0]}`);
});

fs.readFile(url.txt.txt1, "utf8", (err, data) => {
    if (err) throw err;
    console.log("File 1 read!");
});

http.get({ host: url.host[1] }, (res) => {
    console.log("Got a response from bbc.co.uk");
}).on("error", (e) => {
    console.log(`There was an error ${url.host[1]}`);
});

fs.readFile(url.txt.txt2, "utf8", (err, data) => {
    if (err) throw err;
    console.log(`File 2 read!`)
})