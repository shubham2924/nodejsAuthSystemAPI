const express = require('express');
const router = express.Router();
//const path = require('path');
router.get('/',(req,res)=>{
    res.status(200).json({
        "message":"root endpoint working",
        "status": 200
    })
})
module.exports = router;