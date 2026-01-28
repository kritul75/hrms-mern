const EmployeeList = ({employees, handleDeleteEmployee, setEditEmployee}) =>{
    return (
        <><h2>Employee List</h2>
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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp) => (
                            <tr key={emp._id}>
                                <td>{emp.name.toUpperCase()}</td>
                                <td>{emp.email}</td>
                                <td>{emp.department.toUpperCase()}</td>
                                <td>{emp.role.toUpperCase()}</td>
                                <td style={{color:`${emp.status.toUpperCase()==="ACTIVE" ? "green" : "red"}`}}>{emp.status.toUpperCase()}</td>
                                <td>
                                    <button className="btn-edit-emp" onClick={() => setEditEmployee(emp)}>Edit</button>
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            </>
    )
}

export default EmployeeList;