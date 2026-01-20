import {useState} from 'react';
import '../style/login.css';

const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        // Handle login logic here
        console.log("Email:", email);
        console.log("Password:", password);
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