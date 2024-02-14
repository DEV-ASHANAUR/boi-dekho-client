import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { Row, Space, Spin } from 'antd';

const PublicRoute = ({children}) => {
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
    
    // console.log("pathname",location.state?.from?.pathname);
    let from = location.state?.from?.pathname || "/";
    // console.log("first",from);
    return !isLoggedIn ? children : <Navigate to={from} replace />
}

export default PublicRoute