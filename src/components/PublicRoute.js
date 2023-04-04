import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PublicRoute = ({children}) => {
    const isLoggedIn = useAuth();
    const location = useLocation();
    let from = location.state?.from || "/";
    console.log("first",from);
    return !isLoggedIn ? children : <Navigate to={from} />
}

export default PublicRoute