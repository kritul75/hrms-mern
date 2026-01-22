import {useEffect , useState} from 'react';
import api from '../api/axios';
import '../style/employee.css';

const Employees = () =>{
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchEmployees = async () =>{
            try {
                setLoading(true);
                const res = await api.get('/employees')
                console.log(res.data.employees);
                setEmployees(res.data.employees);
            } catch (error) {
                console.error(error);
                setError(error);
            } finally {
                setLoading(false);
            }      
        }
        fetchEmployees();
    },[])
    
    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error fetching employees</div>
    }
    return(
        <div className="employee-container">
            <h1>Employee List</h1>
            {employees.length === 0 ? (<p>No employees found.</p>
            ) : (
                <table className="employee-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp) => (
                            <tr key={emp.id}>
                                <td>{emp.name.toUpperCase()}</td>
                                <td>{emp.email}</td>
                                <td>{emp.department.toUpperCase()}</td>
                                <td>{emp.role.toUpperCase()}</td>
                                <td style={{color:`${emp.status.toUpperCase()==="ACTIVE" ? "green" : "red"}`}}>{emp.status.toUpperCase()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            
        </div>
    )
}

export default Employees;