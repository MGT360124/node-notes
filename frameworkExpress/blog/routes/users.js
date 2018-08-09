const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get("/",(req,res,next) =>{
  res.send('respond with a users resource');
  next();
})
module.exports = router;
