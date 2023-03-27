import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './login.css'
import { FcGoogle } from 'react-icons/fc'
import {
    useAuthState,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import Loading from '../../components/SharedComponents/Loading/Loading';
import auth from '../../firebase/firebase.config';
import { async } from '@firebase/util';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../features/Auth/AuthSlice';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const [user1] = useAuthState(auth);

    if (user1) {
        if(user1?.email){
            dispatch(loginUser({email,password}))
            navigate(from, { replace: true });
        }
    }

    if (loading) {
        return <Loading></Loading>;
    }

    if (error) {
        errorElement = (
            <div>
                <p className="text-danger">Error: {error?.message}</p>
            </div>
        );
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    };


    return (
        <div className='container py-5'>
            <form action="" onSubmit={handleLogin}>
                <div className="login_wrapper">
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
                    <Link to="" className='forget__text'>Forget password</Link>
                    <span className='text-center mt-3'>Don't Have Any Account? <Link to="/register">Register</Link></span>
                    <div className='separator__wrapper'>
                        <div className="line"></div>
                        <div className='or__text'>or</div>
                        <div className="line"></div>
                    </div>
                    <div className="login_google">
                        <button><FcGoogle /> login with google</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login