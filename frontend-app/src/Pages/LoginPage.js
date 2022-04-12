import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import jwt_decode from "jwt-decode";
import AuthContext from '../Context/AuthContext';

const LoginPage = () => {
    const { loginUser, user, tokens } = useContext(AuthContext)
    const [username, setusername] = useState('q')
    const [password, setpassword] = useState('q')



    return (
        <div>
            <div>
                {user ? <h2>Hello {user.username}</h2> : <h2>Hello Stranger</h2> }
            </div>
            <br /><br /><br />
            <form onSubmit={loginUser}>
                <input value={username} onChange={(e) => { setusername(e.target.value) }} type="text" name='username' placeholder='Username Here' />
                <input value={password} onChange={(e) => { setpassword(e.target.value) }} type="password" name='password' placeholder='Password Here' />
                <input type="submit" />
            </form>

        </div>
    )
}

export default LoginPage
