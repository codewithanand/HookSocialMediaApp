import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authenticationContext';
import './login.scss'

export const Login = () => {
  const {login} = useContext(AuthContext);

  const handleLogin = () => {
    login()
  }

  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hook</h1>
          <p>Best platform to connect with people around the world.</p>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}
