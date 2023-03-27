import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { userLoggedinIn } from '../features/Auth/AuthSlice';


const useAuthCheck = () => {
    const dispatch = useDispatch();
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        const localAuth = localStorage?.getItem("auth");

        if (localAuth) {
            const auth = JSON.parse(localAuth);
            if (auth?.accessToken && auth?.user) {
                dispatch(
                    userLoggedinIn({
                        accessToken: auth.accessToken,
                        user: auth.user,
                    })
                );
            }
        }
        setAuthChecked(true);

    }, [dispatch, setAuthChecked]);

    return authChecked;
}

export default useAuthCheck