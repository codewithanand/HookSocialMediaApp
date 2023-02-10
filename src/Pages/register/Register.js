import React from 'react'
import { Link } from 'react-router-dom'
import './register.scss'

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email Address' />
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <button>Sign up</button>
          </form>
        </div>
        <div className="right">
          <h1>Hook</h1>
          <p>Best platform to connect with people around the world.</p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register