// http服务端
const http = require("http");
const util = require("util");
const url = require("url")
const ip = require("ip");
const querystring = require("querystring");
const process = require("process")
const host = ip.address();
const port = 3000;
// console.log("process.argv");
// console.log(process.argv);
const httpServer = http.createServer((req, res) => {
    res.writeHead(200, {
        "content-type": "text/plain",
        "Access-Control-Allow-Origin":"*",
    });
    res.write("<h1>Node.js</h1>");
    //http服务器处理get请求时
    // res.end(`<p>${util.inspect(url.parse(req.url, true))}</p>`);
    //http服务器处理post请求时
    let post = "";
    req.on("data", (chunk) => {
        console.log(`chunk is ${chunk}`)
        post += chunk;
    });
    req.on("end",()=>{
        post = querystring.parse(req.url);
        res.end(`${util.inspect(post)}`)
        console.log(`字符穿行形式： ${ util.inspect(post)}`)
    });
})

httpServer.on("request", (req, res) => {
    // console.log(`req is ${req}, res is ${res}`,req,res)
    //也可以写在http.createServer的req.on("data",callback)中
    // req.on("data", (chunk) => {
    //     console.log(`chunk is ${chunk}`);
    // });

    // req.on("end", () => {
    //     console.log("请求结束");
    // });
})

httpServer.on("connection", (socket) => {
    // console.log(`socket is ${socket}`,socket)
})

httpServer.listen(port, host);
console.log(`Http Server running at http://${host}:${port}`)


// http.createServer(function(){req,res}) == http.Server().on("request",callback(req,res))




// http server 端的两种写法

// const http = require("http");

// const httpServer= http.createServer((req,res)=>{
//     let post = "";
//     req.on("data",(chunk) =>{
//         post += "chunk";
//     })
//     req.on("end",()=>{
//         res.writeHead("Content-Type","text/plain");
//         res.write("<h2>http server 端");
//         res.end("的一种写法</h2>")
//     })
// }).listen(3000);



// 另一种写法

// server = new http.Server();
// server.on('request',(req,res)=>{
//     let post = ""
//     req.on("data",chunk =>{
//         post += chunk;
//     });
//     req.on("end",()=>{
//         res.writeHead("Content-Type","text/plain");
//         res.write("<h2></h2>")
//     })
// })
// server.on("connection",socket =>{
//     console.log(socket)
// })