import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PublicRoute = ({children}) => {
    const isLoggedIn = useAuth();
    const location = useLocation();
    // console.log("pathname",location.state?.from?.pathname);
    let from = location.state?.from?.pathname || "/";
    // console.log("first",from);
    return !isLoggedIn ? children : <Navigate to={from} replace />
}

export default PublicRoute