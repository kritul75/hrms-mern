import { createContext, useContext, useState } from 'react';
//1. create context
const AuthContext = createContext();
//2. create provider
export const AuthProvider = ({children}) =>{
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);
    //login -> save token
    const login = (newToken, userData) =>{
        localStorage.setItem('token', newToken);
        localStorage.setItem('user', JSON.stringify(userData));
        setToken(newToken);
        setUser(userData);
    }
    //logout -> remove token
    const logout = () =>{
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        setToken(null);
    }
    return(
        <AuthContext.Provider value={{token, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

//3. create useAuth hook
export const useAuth = () =>{
    return useContext(AuthContext);
}
