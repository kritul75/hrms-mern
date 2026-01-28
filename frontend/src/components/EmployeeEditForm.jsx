import { useState } from "react";
import '../style/employeeEditForm.css';
import { ImCross } from "react-icons/im";

const EmployeeEditForm = ({ employee, handleEditEmployee , setEditEmployee }) => {
    const [employeeData, setEmployeeData] = useState({...employee});

    const handleSubmit = async (e) =>{
        e.preventDefault()
        handleEditEmployee(employeeData)
    }
   
    return (
        <div className="employee-edit-form-container">
        
        <form className="employee-edit-form" onSubmit={(e)=> handleSubmit(e)}>
            
                <h2>Edit Employee<btn className="btn-edit-close" onClick={()=>setEditEmployee(null)}><ImCross/></btn></h2>
                
                <input 
                    type="text" 
                    placeholder="Name"
                    required
                    value={employeeData.name}
                    onChange={(e) => setEmployeeData({...employeeData, name: e.target.value})}
                />
                <input 
                    type="email" 
                    placeholder="Email"
                    required
                    value={employeeData.email}
                    onChange={(e) => setEmployeeData({...employeeData, email: e.target.value})}
                />
                <input 
                    type="text" 
                    placeholder="Department"
                    required
                    value={employeeData.department}
                    onChange={(e) => setEmployeeData({...employeeData, department: e.target.value})}
                />
                <input 
                    type="text" 
                    placeholder="Role"
                    required
                    value={employeeData.role}
                    onChange={(e) => setEmployeeData({...employeeData, role: e.target.value})}
                />
                <input 
                    type="Number" 
                    placeholder="Salary"
                    required
                    value={employeeData.salary}
                    onChange={(e) => setEmployeeData({...employeeData, salary: e.target.value})}
                />
                <select 
                    value={employeeData.status}
                    required
                    onChange={(e) => setEmployeeData({...employeeData, status: e.target.value})}
                >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
                <button type="submit">Edit Employee</button>
        </form>
        </div>
    );
}
export default EmployeeEditForm;
