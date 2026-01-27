import LeaveList from "../components/LeavesList";
import api from '../api/axios';
import '../style/leave.css';
import { useState, useEffect } from "react";

//getting leaves from backend and displaying using LeaveList component

const Leaves = () =>{

    const [leaves, setLeaves] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //fetching leaves from backend
    const getLeaves = async () =>{
        try {
            setLoading(true);
            const res = await api.get('/leaves');
            setLeaves(res.data.leaves);
        } catch (error) {
            setError(error);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        getLeaves();
    },[]);

    //handle approve/reject leave
    const handleEdit = async (leaveId,status) =>{
        try {
            const res = await api.patch(`/leaves/${leaveId}`,{status});
            setLeaves((prevLeaves) =>
                prevLeaves.map((leave) =>
                    leave._id === leaveId ? { ...leave, status } : leave
                )
            );
        } catch (error) {
            alert("failed to update leave status");
        }
    }


    return (
        <div>
            {loading && <p>Loading...</p>}
            {error ? <p>Error: {error.message}</p>:<LeaveList leaves={leaves} 
                                                              handleEdit={handleEdit} 
                                                    />}
        </div>
    )
}

export default Leaves;