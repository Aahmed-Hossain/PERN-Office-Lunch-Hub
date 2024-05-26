/* eslint-disable react/prop-types */

import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

   const logoutUser = () => {
        setLoading(true)
        setUser(null);
        localStorage.removeItem('token');
        navigate('/login');
        toast.success(`Log out successfully!`)
      }; 
      
    const authInfo = {
        user,
        loading,
        setUser,
        logoutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;