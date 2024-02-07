import React, { useEffect, useState } from 'react'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc'
import auth from '../../firebase/firebase.config';
import { useDispatch, useSelector } from 'react-redux';
import { googleProvider } from '../../features/Auth/AuthSlice';
import { signOut } from "firebase/auth";
import { Toaster } from 'react-hot-toast';

export const SocialLogin = () => {
  const dispatch = useDispatch();
  const { isError } = useSelector(state => state.auth)
  const [loguser] = useAuthState(auth);
  const [serverError, setServerError] = useState("");
  let errorElement;

  useEffect(() => {
    if (loguser && isError) {
      signOut(auth);
      setServerError("something went worng!");
    }
  }, [dispatch, isError, loguser]);

  const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);

  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  if (serverError !== "") {
    errorElement = (
      <div>
        <p className="text-danger">Error: {serverError}</p>
      </div>
    );
  }

  if (loading) {
    return <p>Loading...</p>;
  }


  const handleGoogleLogin = async () => {
    const response = await signInWithGoogle();
    if (response) {
      dispatch(googleProvider({ username: response.user.displayName, email: response.user.email, avater: response.user?.photoURL, provider: "google", isVarified: true }))
    }
  }

  return (
    <>
      {errorElement}
      <div className="login_google">
        <button onClick={handleGoogleLogin}><FcGoogle /> login with google</button>
      </div>
      <Toaster />
    </>

  )
}
