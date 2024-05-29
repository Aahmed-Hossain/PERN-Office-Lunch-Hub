/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useAxios } from "../hooks/useAxios";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Fetch user data using the token
            
            useAxios.get('/auth/authorization', {
                headers: {
                    token: token
                }
            }).then(res => {
                setUser(res.data);
                setLoading(false);
            }).catch(err => {
                console.error(err);
                localStorage.removeItem('token');
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, []);

    const logoutUser = () => {
        setLoading(true);
        setUser(null);
        localStorage.removeItem('token');
        toast.success("You logged out successfully!");
        setLoading(false);
    };


//    const logoutUser = () => {
//         setLoading(true)
//         setUser(null);
//         localStorage.removeItem('token');
//         toast.success(`You Logged out successfully!`)
//       }; 

      
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