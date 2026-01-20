import {useState} from 'react';
import '../style/login.css';
import api from '../api/axios';

const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('');

        try {
            //1. call backend login api
            const response = await api.post('/auth/login', {email, password});
            //2. extract token from response
            const { token, user } = response.data;

            //3. store token in localstorage
            localStorage.setItem('token', token);

            //4. temporary alert
            alert('Login successful!');
            console.log('Logged in user:', user);
            //5. Later redirect to dashboard ( to be implemented )
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