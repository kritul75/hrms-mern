import '../style/navbar.css';
import {useAuth} from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="navbar">
            <h1>Welcome {user ? user.name : "Guest"}</h1>
            <button className='btn-nav' onClick={() => window.location.href = '/dashboard'}>Dashboard</button>
            {user && <button onClick={logout}>Logout</button>}
        </nav>
    );
};
export default Navbar;
