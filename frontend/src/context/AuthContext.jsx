import { createContext, useContext, useState } from 'react';
//1. create context
const AuthContext = createContext();
//2. create provider
export const AuthProvider = ({children}) =>{
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    //login -> save token
    const login = (newToken) =>{
        localStorage.setItem('token', newToken);
        setToken(newToken);
    }
    //logout -> remove token
    const logout = () =>{
        localStorage.removeItem('token');
        setToken(null);
    }
    return(
        <AuthContext.Provider value={{token, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

//3. create useAuth hook
export const useAuth = () =>{
    return useContext(AuthContext);
}
