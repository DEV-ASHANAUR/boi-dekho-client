import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

import Loading from "../../components/SharedComponents/Loading/Loading";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { createUser, resetState } from "../../features/Auth/AuthSlice";
import { useForm } from "react-hook-form";
import { signOut } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [terms, setTerms] = useState(false);
  const { isError, isSuccess } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [loguser] = useAuthState(auth);
  const navigate = useNavigate();
  //watch if any error
  useEffect(() => {
    if (loguser && isError) {
      signOut(auth);
      toast.error("something went worng!");
    }
  }, [dispatch, isError, loguser]);
  useEffect(() => {
    if (loguser && isSuccess) {
      // console.log("login User", loguser.emailVerified);
      signOut(auth);
      toast.success("Please Verify Email!");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, [dispatch, isSuccess, loguser, navigate]);

  let errorElement;
  const [createUserWithEmailAndPassword, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  //loading component
  if (loading) {
    return <Loading></Loading>;
  }
  
  const password = watch("password");
  //handle registation form with react-hooks-form
  const handleRegister = async (data) => {
    const { username, email, password } = data;
    const user = await createUserWithEmailAndPassword(email, password);
    if (user) {
      dispatch(createUser({ username, email, password }));
    }else{
        toast.error("Error while createing account!");
    }
  };

  if (isSuccess && !isError) {
    toast.success("Registration success!");
    dispatch(resetState());
  }

  if (isError) {
    toast.success("Error while createing account!");
    dispatch(resetState());
  }

  return (
    <div className="container py-5">
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className="login_wrapper">
          <h2 className="login__title">Create an account</h2>
          <div className="input__group">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-2"
              name="name"
              placeholder="Enter Name"
              {...register("username", {
                required: "Name is required!",
                minLength: {
                  value: 3,
                  message: "Min length is 3!",
                },
              })}
            />
            {errors.username && (
              <span className="error_message" role="alert">
                {errors.username?.message}
              </span>
            )}
          </div>
          <div className="input__group">
            <label>Enter Email</label>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Enter Email"
              {...register("email", {
                required: "Email is required!",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email!",
                },
              })}
            />
            {errors.email && (
              <span className="error_message" role="alert">
                {errors.email?.message}
              </span>
            )}
          </div>
          <div className="input__group">
            <label>Enter password</label>
            <input
              type="password"
              className="form-control mt-2"
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required!",
                minLength: {
                  value: 6,
                  message: "Min length is 6!",
                },
              })}
            />
            {errors.password && (
              <span className="error_message" role="alert">
                {errors.password?.message}
              </span>
            )}
          </div>
          <div className="input__group">
            <label>Confirm password</label>
            <input
              type="password"
              className="form-control mt-2"
              placeholder="Confirm password"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === password,
              })}
            />
            {errors.confirmPassword?.type === "required" && (
              <span className="error_message" role="alert">
                Confirm password is required
              </span>
            )}
            {errors.confirmPassword?.type === "validate" && (
              <span className="error_message" role="alert">
                Passwords must match
              </span>
            )}
          </div>

          <div>
            <input
              type="checkbox"
              id="terms"
              onClick={() => setTerms(!terms)}
            />{" "}
            &nbsp;
            <label for="terms">Accept all terms</label>
            <br />
          </div>

          <button className="login__btn" disabled={!terms} type="submit">
            Register
          </button>
          {errorElement}
          <span className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default Register;
