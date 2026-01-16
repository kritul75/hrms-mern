const express = require("express");
const router = express.Router();
const {Protected} = require("../middleware/auth.middleware");

router.get("/check", Protected, (req,res)=>{

    res.json({user: req.user});
});

module.exports = router;