const EventEmitter = require("events");

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

console.log("=======================")
console.log("this: ", this);
// console.log("global: ", global);
console.log("process: ",process.argv);
console.log("=======================")

const ms = 3000;
const options = {
    name: "maoguotao",
    age: "23",
    sex: "M",
    number: "141304011015"
};
const list = [
    "maoguotao",
    "23",
    "M",
    "141304011015"
]
myEmitter.on("maoGuoTao", (opt) => {
    console.log(`${ms}ms后触发了一个自定义事件maoGuoTao`);
    console.log(opt);
    for (item in opt) {
        console.log(`item:${item}, value : ${opt[item]}`);
    };
    const newList = opt.map((item, index, arr) => {
        console.log(`item is ${item},index is ${index},arr is ${arr}`);
        return index + index;
    })
    console.log(`newlist: ${newList}`)
});


setTimeout(() => {
    // myEmitter.emit("maoGuoTao", options);
    myEmitter.emit("maoGuoTao", list)
}, ms)