let EventEmitter = require("events").EventEmitter;

let event = new EventEmitter();

event.on("getUserInfo",(userName,vipNumber)=>{
    console.log(userName)
    return userName
    
})

event.on("getUserInfo",(userName,vipNumber) =>{
    console.log(vipNumber)
    return vipNumber
})

event.emit("getUserInfo",'maoguotao',"141304011015")