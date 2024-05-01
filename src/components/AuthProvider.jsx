import React, { createContext, useContext, useState, useEffect } from 'react';
import { parseJwt } from '../utility';

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('authToken'));
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const authenticatedUser = parseJwt(token);
      setUser(authenticatedUser);
    }
  }, []);


    const login = async (username, password) => {

        const form = new FormData();
        form.append('username', username);
        form.append('password', password);

        const response = await fetch('https://ootd.aldasouqi.com:8000/auth/login', {
            method: 'POST',
            body: form,
        });

        // TODO: Handle response status codes. This assumes a successful response.

        const authResponse = await response.json();
        if (response.status !== 200) {
          throw new Error("Invalid username or password");
        }
        const authToken = authResponse.access_token;
        const authenticatedUser = parseJwt(authToken);

        localStorage.setItem('authToken', authToken);

        setUser(authenticatedUser);
        setToken(authToken);
    };
  
    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('authToken');
    };
  
    const register = (userData) => {
        // Perform user registration (e.g., API call)
        // Upon successful registration, login the user
        login();
    };
  
    return (
        <AuthContext.Provider value={{ user, login, logout, register , token}}>
            {children}
        </AuthContext.Provider>
    );
  }
  

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};
