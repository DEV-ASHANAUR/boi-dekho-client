import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'
import './login.css'
import {
    useAuthState,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from '../../firebase/firebase.config';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/Auth/AuthSlice';
import { SocialLogin } from './SocialLogin';
import { signOut } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isError } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [loguser] = useAuthState(auth);

    // signOut(auth);
    // dispatch(userLoggedOut());

    useEffect(() => {
        // console.log("sdfcxsa",loguser)
        if (loguser && isError) {
            signOut(auth);
            toast.error("something went worng!");
        }
    }, [dispatch, isError, loguser])
    // error variable
    let errorElement;

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth, {
        providerOptions: {
            customParameters: { linkWithCredential: false },
        },
    });

    const handleLogin = async (event) => {
        event.preventDefault();
        const resUser = await signInWithEmailAndPassword(email, password);
        console.log("resUser",resUser)
        if (resUser) {
            if (resUser.user.emailVerified) {
                dispatch(loginUser({ email, password }))
                // console.log("check verified", resUser?.user.emailVerified);
            } else {
                toast.error("Please verify your email!");
                signOut(auth);
                // console.log("verified nai")
            }
        }else{
            toast.error("Wrong credential!");
        }
    };


    return (
        <div className='container py-5'>
            <Toaster />
            <div className="login_wrapper">
                <form action="" onSubmit={handleLogin}>
                    <div className="form_container">
                        <h2 className='login__title'>Login Here</h2>
                        <div className="input__group">
                            <label>Enter Email</label>
                            <input type="text" className='form-control mt-2' value={email} onChange={(e) => setEmail(e.target.value)} name='email' required placeholder='Enter Email' />
                        </div>
                        <div className="input__group">
                            <label>Enter password</label>
                            <input type="password" className='form-control mt-2' value={password} onChange={(e) => setPassword(e.target.value)} name='password' required placeholder='Enter password' />
                        </div>
                        <button className='login__btn' type="submit">Login</button>
                        {errorElement}

                        <Link to="/reset-password" className='forget__text'>Forget password</Link>
                        <span className='text-center mt-3'>Don't Have Any Account? <Link to="/register">Register</Link></span>
                        <div className='separator__wrapper'>
                            <div className="line"></div>
                            <div className='or__text'>or</div>
                            <div className="line"></div>
                        </div>

                    </div>
                </form>
                <SocialLogin />
            </div>

        </div>
    )
}

export default Login