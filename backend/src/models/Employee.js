const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    department:{
        type: String,
        required: true,
        trim: true
    },
    role:{
        type: String,
        required: true,
        trim: true
    },
    salary:{
        type: Number,
        required: true,
        min: 0
    },
    status:{
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    }
    
},{ timestamps: true });

module.exports = mongoose.model("Employee", employeeSchema);