import { useNavigate } from "react-router-dom";
import '../style/dashboard.css';
import { FaUsers } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

const Dashboard = () => {
    const navigate = useNavigate();

    const handleClick = (path) =>{
        navigate(`/${path}`);
    }

    return(
        <div className="dashboard-container">
            <div className="dashboard-buttons">
                <button className="btn" onClick={()=>handleClick("employees")}><span className="material-icons"><FaUsers /></span><br/>View Employees</button>
                <button className="btn" onClick={()=>handleClick("leaves")}><span className="material-icons"><FaCalendarDays /></span><br/>View Leaves</button>
            </div>
        </div>
    )
}

export default Dashboard;