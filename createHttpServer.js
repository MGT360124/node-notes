
const http = require("http");
const querystring = require("querystring");

const httpServer = http.createServer((req, res) => {
    req.on("data", (chunk) => {
        console.log("chunk is: ", chunk)
    })
    req.on("end", () => {

    })
    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    })
    res.end("hello world\n");
})
httpServer.on("clientError", (err, socket) => {
    socket.end("HTTP/1.1 400 Bad Request\r\n\r\n")
})

httpServer.on("request", (req, res) => {
    console.log(`req is ${req}, res is ${res}`)
})

httpServer.on("connection", (socket) => {
    console.log(`socket is ${socket}`)
})

httpServer.listen(3000, "localhost");


console.log("Http Server running at http://localhost:3000")
console.log("this", this)
console.log("=============================================")


const postData = querystring.stringify({
    "name": "maoguotao"
})
const options = {
    protocol: "http:",
    hostname: "www.baidu.com",
    port: 80,
    path: "/upload",
    method: "POST",
    headers: {
        "Content-Type": "text/plain",
        "Content-Length": Buffer.byteLength(postData)
    }
}
let req = http.request(options, (res) => {
    console.log(`状态码：${res.statusCode}`);
    console.log(`响应头: ${JSON.stringify(res.headers)}`);
    res.setEncoding("utf8");
    res.on("data", (chunk) => {
        console.log(`响应体: ${chunk}`);
    });
    res.on("end", () => {
        console.log(`响应中已无数据`)
    })
})

req.on("error", (e) => {
    console.error(`请求遇到问题: ${e.message}`)
})

req.write(postData);
req.end();