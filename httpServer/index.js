// http服务端
const http = require("http");
const util = require("util");
const url = require("url")
const ip = require("ip");
const fs = require("fs");
const querystring = require("querystring");

const host = ip.address();
const port = 3000;

const httpServer = http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    // 输出请求的文件名
    console.log("Request for " + pathname.substr(1) + " received.");
    fs.readFile(pathname.substr(1), (err, data) => {
        if (err) {
            console.log(err);
            // HTTP 状态码: 404 : NOT FOUND
            // Content Type: text/plain
            res.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            // HTTP 状态码: 200 : OK
            // Content Type: text/plain
            res.writeHead(200, { 'Content-Type': 'text/html' });

            // 响应文件内容
            res.write(data.toString());
        }
        //  发送响应数据
        res.end();
    })
})

httpServer.listen(port, host);
console.log(`Http Server running at http://${host}:${port}/index.html`)
