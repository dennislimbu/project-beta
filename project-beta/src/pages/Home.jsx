import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div>
        <h1>Home</h1>

        <Link to="/register">Register</Link>
        <br></br>
        <Link to="/login">Login</Link>
    </div>
  )
}

export default Register
