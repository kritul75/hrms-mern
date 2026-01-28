import {useEffect , useState} from 'react';
import api from '../api/axios';
import '../style/employee.css';
import EmployeeAddForm from '../components/EmployeeAddForm';
import EmployeeEditForm from '../components/EmployeeEditForm';
import EmployeeList from '../components/EmployeeList';
import LogoutButton from '../components/LogoutButton';

const Employees = () =>{
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editEmployee, setEditEmployee] = useState(null);

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

    const handleDeleteEmployee = async () =>{

    }

    const handleEditEmployee = async (employeeData) =>{
        try {
            const res = await api.patch(`/employees/${employeeData._id}`, employeeData);
            console.log(employeeData)
            //update employee list
            fetchEmployees();
            setEditEmployee(null);
        } catch (error) {
            alert(error.response.data.message);
        }
    }

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
                <EmployeeAddForm handleAddEmployee={handleAddEmployee} />
            </div>
            <div className="employee-container">

                <EmployeeList employees={employees} handleDeleteEmployee={handleDeleteEmployee} setEditEmployee={setEditEmployee} />  
            </div>
            {editEmployee && (
                <EmployeeEditForm employee={editEmployee} handleEditEmployee={handleEditEmployee} setEditEmployee={setEditEmployee}/>
            )}
        </div>

    )
}

export default Employees;