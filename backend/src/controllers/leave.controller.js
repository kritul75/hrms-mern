const Leave = require("../models/Leave");


/*
@desc Create a new leave
@route POST /api/leaves
@access protected (HR)
*/
exports.applyLeave = async (req, res) =>{
    try {
        const {employee, leaveType, startDate, endDate, reason} = req.body;
        const newLeave = await Leave.create({employee, leaveType, startDate, endDate, reason});
        return res.status(201).json({message: "Leave applied successfully", leave: newLeave});
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

/*
@desc display all leaves 
@route GET /api/leaves
@access protected (HR)
*/
exports.getLeaves = async (req, res) =>{
    try {
        const leaves = await Leave.find().populate("employee", "department name role");
        return res.status(200).json({leaves});
        
    } catch (error) {
        return res.status(500).json({message: "Server error"})
    }
}

/*
@desc update leave status 
@route Patch /api/leaves/:id
@access protected (HR)
*/
exports.updateLeaveStatus = async (req, res) =>{
    try {
        const {status} = req.body;
        const leave = await Leave.findById(req.params.id);
        if(!leave){
            return res.status(404).json({message: "Leave not found"});
        }
        leave.status = status;
        await leave.save();
        return res.status(200).json({message: "Leave status updated successfully", leave});
    } catch (error) {
        return res.status(500).json({message: "Server error"})
    }
}