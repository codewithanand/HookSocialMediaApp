import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authenticationContext';
import './login.scss'

export const Login = () => {
  const [inputs, setInputs] = useState(
    {
      username: "",
      password: ""
    }
  )

  const [err, setErr] = useState(null)
  const {login} = useContext(AuthContext);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs(prevState => ({...prevState, [e.target.name] : e.target.value}))
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try{
      await login(inputs)
      navigate("/")
    }
    catch(err){
      setErr(err.response.data)
    }
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
            <input type="text" placeholder='Username' name='username' onChange={handleChange} />
            <input type="password" placeholder='Password' name='password' onChange={handleChange} />
            {err && err}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}
