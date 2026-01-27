import { useState } from "react";

const EmployeeAddForm = ({handleAddEmployee}) => {

    //form states
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: '',
        role: '',
        salary: '',
        status: 'active'
    });

    //clear form after submission
    const clearForm = () => {
        setFormData({
            name: '',
            email: '',
            department: '',
            role: '',
            salary: '',
            status: 'active'
        });
    }

    return (

        <form className="employee-add-form" onSubmit={(e)=>{e.preventDefault();clearForm(); handleAddEmployee(formData);}}>
                <h2>Add New Employee</h2>
                <input 
                    type="text" 
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input 
                    type="email" 
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <input 
                    type="text" 
                    placeholder="Department"
                    required
                    value={formData.department}
                    onChange={(e) => setFormData({...formData, department: e.target.value})}
                />
                <input 
                    type="text" 
                    placeholder="Role"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                />
                <input 
                    type="Number" 
                    placeholder="Salary"
                    required
                    value={formData.salary}
                    onChange={(e) => setFormData({...formData, salary: e.target.value})}
                />
                <select 
                    value={formData.status}
                    required
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
                <button type="submit">Add Employee</button>
        </form>
    )
}

export default EmployeeAddForm;