import { FaClock } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

const LeaveList = ({leaves, handleEdit}) => {
    console.log('Leaves in LeaveList:', leaves);
    return (
        <div className="leave-list">
            <h1>Leave Requests</h1>
            {leaves.length === 0 ? (
                <p>No leaves found.</p>
            ) : (
                <table className="leave-table">
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Type</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Reason</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
               
                    <tbody className="table-wrapper">
                        {leaves.map((leave) => (
                            <tr key={leave._id}>
                                <td>{leave.employee?.name.toUpperCase()}</td>
                                <td>{leave.leaveType}</td>
                                <td>{new Date(leave.startDate).toLocaleDateString()}</td>
                                <td>{new Date(leave.endDate).toLocaleDateString()}</td>
                                <td>{leave.reason}</td>
                                <td ><p className={`leave-status-${leave.status}`}>
                                    {leave.status === "Pending"  ? <FaClock />: 
                                     leave.status === "Approved" ? <FaCheckCircle/> :
                                     <FaTimesCircle/>}</p>
                                    </td>
                                <td>
                                    {leave.status === 'Pending' ? (
                                        <>
                                            <button className="approve-btn" onClick={() => handleEdit(leave._id, 'Approved')}>Approve</button>
                                            <button className="reject-btn" onClick={() => handleEdit(leave._id, 'Rejected')}>Reject</button>
                                        </>
                                    ) : (
                                        <span></span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default LeaveList;