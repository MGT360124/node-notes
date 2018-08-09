const express = require("express");
const app = express();
const router = express.Router();

//该路由使用的中间件
router.use((req, res, next) => {
    console.log(`Time: ${Date.now()}`);
    console.log(`request URL: ${req.originalUrl}`)
    next();
}, (req,res,next) => { 
    console.log("Request Type:",req.method);
    next();
})

//定义VIP页面的路由
router.get("/", (req, res) => {
    res.set({
        'Content-Type': 'text/html',
    })
    res.send(`<h3>vip的路由${new Date()}</h3>`)
})

module.exports = router;