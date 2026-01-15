const User = require("../models/User");
const jwt  = require("jsonwebtoken");

/*
@desc HR login
@route POST /api/auth/login
@access public
*/

exports.login = async(req, res) => {
    try {
        const {email , password} = req.body;

        //1. validate input
        if(!email || !password){
            return res.status(400).json({message: "Credentials required"});
        }

        //2.Find HR user
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({message: "Invalid Credentials"});
        }

        //3. compare password
        const isMatch = await user.matchPassword(password);
        if(!isMatch){
            return res.status(401).json({message: "Invalid Credentials"});
        }

        //4.Generate token
        const token = jwt.sign(
            {id : user._id, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRY}
        );
        
        //5. send response
        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
        
    } catch (error) {
        console.error("Login error: ",error);
        res.status(500).json({message: "Server error"});
    }
}