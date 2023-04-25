import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useSelector } from 'react-redux';

const UserRoute = ({ children }) => {
    const { currentUser } = useSelector(state => state.auth);
    const isLoggedIn = useAuth();
    const location = useLocation();
    // let from = location.state?.from || "/";
    // console.log("first",from);
    if (isLoggedIn && currentUser.isAdmin === false) {
        return children;
    } else {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
}

export default UserRoute