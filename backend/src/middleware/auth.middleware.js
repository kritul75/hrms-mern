
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

exports.Protected = async (req, res, next) => {
    let token;
    try {
        //1. Check authorization header
        if(req.headers["authorization"] && req.headers["authorization"].startsWith("Bearer")){
            token = req.headers["authorization"].split(" ")[1];
        }
        // 2. Check if token is provided
        if(!token){
            return res.status(401).json({message: "No token provided"});
        }
        // 3. Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({message: "Invalid token"});
        }
        //4. Get User from database
        const user = await User.findById(decoded.id).select("-password");
        if(!user){
            return res.status(401).json({message: "User not found"});
        }
        
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({message: "Invalid token"});
    }
}