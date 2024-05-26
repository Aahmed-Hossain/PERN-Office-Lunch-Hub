/* eslint-disable react/prop-types */

import { createContext, useState } from "react";
import { toast } from 'react-toastify';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


   const logoutUser = () => {
        setLoading(true)
        setUser(null);
        localStorage.removeItem('token');
        toast.success(`You Logged out successfully!`)
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