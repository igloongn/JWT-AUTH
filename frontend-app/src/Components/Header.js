import React, { useContext } from 'react'
import {
    Link, Navigate, useNavigate
} from "react-router-dom";
import AuthContext from '../Context/AuthContext';

const Header = () => {
    const navigate = useNavigate()
    const { user, handleLogout } = useContext(AuthContext)



    return (
        <div>
            <nav>
                <Link to="/">Home</Link> | {" "}

                {user
                    ?
                    <span onClick={handleLogout} >Logout</span>
                    :
                    <Link to="login">Login</Link>
                }
            </nav>
        </div>
    )
}

export default Header
