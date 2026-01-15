require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/User");

const seedHR = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);

        const existUser = await User.findOne({email:"hr@company.com"});
        if(existUser){
            console.log("user already exist");
            process.exit(0);
        }

        await User.create({
            name: "Hr admin",
            email: "hr@company.com",
            password: "hr@12345"
        })

        console.log("HR user seeded successfully");
        process.exit(0);
    } catch (error) {
        console.error("seeding failed :", error);
        process.exit(1);
    }
}

seedHR();