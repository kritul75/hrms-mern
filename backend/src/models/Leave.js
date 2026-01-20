const mongoose = require("mongoose");

const LeaveSchema = mongoose.Schema({
    employee:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true
    },
    leaveType:{
        type: String,
        enum: ["Sick", "Casual", "Earned"],
        required: true
    },
    startDate:{
        type: Date,
        required: true
    },
    endDate:{
        type: Date,
        required: true
    },
    reason:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default: "Pending"
    }
}, {timestamps: true})

module.exports = mongoose.model("Leave", LeaveSchema);