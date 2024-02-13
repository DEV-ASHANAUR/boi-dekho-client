import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useSelector } from 'react-redux';
import { Row, Space, Spin } from 'antd';

const UserRoute = ({ children }) => {
    const { currentUser } = useSelector(state => state.auth);
    const isLoggedIn = useAuth();
    const location = useLocation();

    if(isLoggedIn === "loading"){
        return (
            <Row
              justify="center"
              align="middle"
              style={{
                height: "100vh",
              }}
            >
              <Space>
                <Spin tip="Loading" size="large"></Spin>
              </Space>
            </Row>
          );
    }
    // let from = location.state?.from || "/";
    // console.log("first",from);
    console.log("first hello log in root");
    if (isLoggedIn && currentUser.isAdmin === false) {
        return children;
    } else if(isLoggedIn && currentUser.isAdmin === false){
        return <Navigate to="/dashboard" />
    } else {
        console.log("first hello log in");
        return <Navigate to="/login" state={{ from: location }} replace />
    }
}

export default UserRoute