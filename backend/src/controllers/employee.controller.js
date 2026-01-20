const Employee = require("../models/Employee");

/*
@desc Create a new employee
@route POST /api/employees
@access protected
*/

exports.createEmployee = async(req, res) => {
    try {
        const newEmployee = await Employee.create(req.body);
        return res.status(201).json({message: "Employee created successfully", employee: newEmployee});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

/*
@desc Get all employees (pagination supported)
@route GET /api/employees
@access protected
*/

exports.getEmployees = async(req, res) => {
    try {
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const limit = req.query.limit ? parseInt(req.query.limit) : 10;
        const skip = (page-1) * limit;
        const employees = await Employee.find().skip(skip).limit(limit);
        return res.status(200).json({employees});
    } catch (error) {
        return res.status(500).json({message: "Server error"});
    }
}

/*
@desc Update employee
@route PATCH /api/employees/:id
@access protected
*/

exports.updateEmployee = async(req, res) => {
    try {
        const employee = req.body;
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, employee, {new : true});
        return res.status(200).json({message: "employee updated successfully", employee: updatedEmployee});
    } catch (error) {
        return res.status(500).json({message: "server error"});
    }
}