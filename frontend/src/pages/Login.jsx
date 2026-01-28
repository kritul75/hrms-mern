import {useState} from 'react';
import {useAuth} from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import '../style/login.css';
import api from '../api/axios';


const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('');

        try {
            //1. call backend login api
            const response = await api.post('/auth/login', {email, password});
            //2. extract token from response
            const { token, user } = response.data;

            //3. call login from context
            login(token, user);
            //5. redirect to dashboard ( change it later- currently to employees)
            navigate('/dashboard');

        } catch (error) {
            //6. handle error
            setError(
                error.response?.data?.message || 'Login failed. Please try again.'
            );
        }
    }

    return(
        <div className='login-container'>
        <h1 className='login-title'>HR Login</h1>
        {error && <p className='login-error'>{error}</p>}
        <form className='login-form' onSubmit={handleSubmit}>
            <div>
                <label className='login-label'>Email:</label><br/>
                <input className='login-input' required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label className='login-label'>Password:</label><br/>
                <input className='login-input' required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className='login-button' type="submit">Login</button>
        </form>
        </div>
    )
}

export default Login;