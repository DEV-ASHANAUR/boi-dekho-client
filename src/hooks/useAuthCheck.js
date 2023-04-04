import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { userLoggedinIn } from '../features/Auth/AuthSlice';
import auth from "../firebase/firebase.config";
import { useAuthState } from 'react-firebase-hooks/auth';

const useAuthCheck = () => {
    const dispatch = useDispatch();
    const [user, loading] = useAuthState(auth)
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        const localAuth = localStorage?.getItem("auth");
        if (!loading) {
            if (localAuth && user) {
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
        }

        setAuthChecked(true);

    }, [dispatch, setAuthChecked,user,loading]);

    return authChecked;
}

export default useAuthCheck