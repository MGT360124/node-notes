
//http客户端
const http = require("http");
const url = require("url");
const querystring = require("querystring");
const util = require("util");
const ip = require("ip");
let getData = "";
let host = ip.address();

const postData = querystring.stringify({
    "username": "maoguotao",
    "password": "ainim3.141592654"
})
console.log(`postData is ${postData}`)
const options = {
    protocal: "http:",
    host: host,
    port: "3000",
    method: "POST",
    path: "/upload",
    headers: {
        "Content-Type": "text/plain",
        "Content-Length": Buffer.byteLength(postData),
        "Origin": `http://${host}:3000`
    }
}
// 通过 http.request()发送请求
const httpRequest = http.request(options, (res) => {
    console.log(`状态码: ${res.statusCode}`);
    console.log(`响应头: ${JSON.stringify(res.headers)}`)
    res.setEncoding("utf8");
    res.on("data", (chunk) => {
        getData += chunk;
        console.log(`响应体: ${chunk}`);
        console.log(`getData is ${getData}`);
    })
    res.on("end", () => {
        console.log(`响应中已无数据。`)
    })
});

httpRequest.on("error", (e) => {
    console.log(`请求时遇到的问题: ${e.message}`)
})
httpRequest.write(postData); // 向服务器发送请求体
httpRequest.end();  // 必须使用end结束向服务器发送请求。
// httpRequest.abort() // 终止正在进行的请求
// httpRequest.setTimeout(timeout,callback);请求超时调用的回调函数
// exports.module = { getData: getData }

// http.request(options,callback(res))和http.get(options,callback(res))
// 等于 HttpRequest = http.request(options); HttpRequest.on("response",callback(res))


















// 通过http.get()发送请求
// const httpGet = http.get(options, (res) => {
//     res.setEncoding("utf8");
//     res.on("data", (chunk) => {
//         console.log(`响应体: ${chunk}`)
//     });
//     res.on("end", () => {
//         console.log(`响应已无数据`)
//     });
// })
