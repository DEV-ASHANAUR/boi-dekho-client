import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./register.css"

import Loading from '../../components/SharedComponents/Loading/Loading';
import auth from '../../firebase/firebase.config';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../features/Auth/AuthSlice';


const Register = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [terms, setTerms] = useState(false);
    const { currentUser,isLoading, isError } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let errorElement;
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // const [updateProfile] = useUpdateProfile(auth);

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

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(email, password);
            if (user) {
                dispatch(createUser({ username, password, email }))
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='container py-5'>
            <form action="" onSubmit={handleRegister}>
                <div className="login_wrapper">
                    <h2 className='login__title'>Create an account</h2>
                    <div className="input__group">
                        <label>Full Name</label>
                        <input type="text" className='form-control mt-2' value={username} onChange={(e) => setUserName(e.target.value)} name='name' placeholder='Enter Email' required />
                    </div>
                    <div className="input__group">
                        <label>Enter Email</label>
                        <input type="text" className='form-control mt-2' value={email} onChange={(e) => setEmail(e.target.value)} name='email' placeholder='Enter Email' required />
                    </div>
                    <div className="input__group">
                        <label>Enter password</label>
                        <input type="password" className='form-control mt-2' value={password} onChange={(e) => setPassword(e.target.value)} name='password' placeholder='Enter password' required />
                    </div>
                    <div>
                        <input type="checkbox" id="terms" onClick={() => setTerms(!terms)} /> &nbsp;
                        <label for="terms">Accept all terms</label><br />
                    </div>
                    <button className='login__btn' disabled={!terms} type="submit">Register</button>
                    {errorElement}
                    <span className='text-center mt-3'>Already have an account? <Link to="/login">Login</Link></span>

                </div>
            </form>
        </div>
    )
}

export default Register