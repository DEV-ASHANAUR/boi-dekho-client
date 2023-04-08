import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'
import './login.css'
import {
    useAuthState,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import Loading from '../../components/SharedComponents/Loading/Loading';
import auth from '../../firebase/firebase.config';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/Auth/AuthSlice';
import { SocialLogin } from './SocialLogin';
import { signOut } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verfiyError, setVerifyError] = useState("");
    const { isError } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [loguser] = useAuthState(auth);

    useEffect(() => {
        if (loguser && isError) {
            signOut(auth);
            toast.error("something went worng!");
        }
    }, [dispatch, isError, loguser])
    // error variable
    let errorElement;

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth, {
        providerOptions: {
            customParameters: { linkWithCredential: false },
        },
    });

    if (loading) {
        return <Loading></Loading>;
    }
    //set fibase error
    if (error) {
        const errorCode = error?.code;
        if (errorCode === 'auth/wrong-password') {
            errorElement = (
                <div>
                    <p className="text-white bg-danger text-uppercase text-center p-1">Error : Wrong credential!</p>
                </div>
            );
        } else if (errorCode === 'auth/user-not-found') {
            errorElement = (
                <div>
                    <p className="text-white bg-danger text-uppercase text-center p-1">Error : User Not Exist!</p>
                </div>
            );
        }
        else if (errorCode === 'auth/invalid-email') {
            errorElement = (
                <div>
                    <p className="text-white bg-danger text-uppercase text-center p-1">Error : Invalid Email!</p>
                </div>
            );
        }
        else {
            errorElement = (
                <div>
                    <p className="text-white bg-danger text-uppercase text-center p-1">Error : Something Went Worng!</p>
                </div>
            );
        }
    }

    if (verfiyError !== "") {
        errorElement = (
            <div>
                <p className="text-white bg-danger text-uppercase text-center p-1">Error: {verfiyError}</p>
            </div>
        );
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        const resUser = await signInWithEmailAndPassword(email, password);
        if (resUser) {
            if (resUser.user.emailVerified) {
                dispatch(loginUser({ email, password }))
                // console.log("check verified", resUser?.user.emailVerified);
            } else {
                setVerifyError("Please verify your email!");
                signOut(auth);
                // console.log("verified nai")
            }
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

                        <Link to="" className='forget__text'>Forget password</Link>
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