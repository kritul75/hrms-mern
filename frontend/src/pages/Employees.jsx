import {useEffect , useState} from 'react';
import api from '../api/axios';
import '../style/employee.css';
import EmployeeAddForm from '../components/EmployeeAddForm';
import EmployeeList from '../components/EmployeeList';

const Employees = () =>{
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //fetching employees from backend
    const fetchEmployees = async () =>{
            try {
                setLoading(true);
                const res = await api.get('/employees')
                setEmployees(res.data.employees);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }      
    }

    useEffect(()=>{
        fetchEmployees();
    },[])

    //handler to add new employee
    const handleAddEmployee = async (employeeData) =>{
        try {
            const res = await api.post('/employees', employeeData);
            //update employee list
            //setEmployees(prevEmployees => [...prevEmployees, res.data.employee]);
            fetchEmployees();
            
        } catch (error) {
            console.log(error);
            setError(error);
        }
    }
    
    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error fetching employees</div>
    }
    return(
        <div className="employees-main-container">
            <div className='employee-form-container'>
                <h2>employee form</h2>
                <EmployeeAddForm handleAddEmployee={handleAddEmployee} />
            </div>
            <div className="employee-container">
                <h1>Employee List</h1>
                
                <EmployeeList employees={employees} />  
            </div>
        </div>
    )
}

export default Employees;