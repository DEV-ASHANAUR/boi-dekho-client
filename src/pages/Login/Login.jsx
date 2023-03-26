import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
  return (
    <div className='container py-5'>
      <div className="login_wrapper">
        <h2 className='login__title'>Login Here</h2>
        <div className="input__group">
          <label>Enter Email</label>
          <input type="text" className='form-control mt-2' placeholder='Enter Email' />
        </div>
        <div className="input__group">
          <label>Enter password</label>
          <input type="password" className='form-control mt-2' placeholder='Enter password' />
        </div>
        <button className='login__btn'>Login</button>
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
    </div>
  )
}

export default Login