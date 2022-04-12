import axios from "axios";
import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext()
export default AuthContext



export const AuthProvider = ({ children }) => {

    const navigate = useNavigate()
    const localauth = localStorage.getItem('AuthToken')

    const [authTokens, setauthTokens] = useState(() => localauth ? JSON.parse(localauth) : null)
    const [user, setuser] = useState(() => localauth ? jwt_decode(localauth) : null)

    const [loading, setloading] = useState(true)

    // Login User
    let loginUser = async (e) => {
        e.preventDefault();
        let params = {
            username: e.target.username.value,
            password: e.target.password.value,
        }
        let res = await axios.post(process.env.REACT_APP_API_ENDPOINT + 'token/', params)
        let data = res.data
        if (res.status < 399) {
            setauthTokens(res)
            const decoded = jwt_decode(data.access)
            setuser(decoded)
            localStorage.setItem('AuthToken', JSON.stringify(data))
            navigate('/')
        } else {
            alert('There is an error somewhere')
        }
    }

    // Logout User
    const handleLogout = () => {
        localStorage.clear()
        setauthTokens(null)
        setuser(null)
        navigate("/login")
    }

    const updateToken = async () => {
        let params = {
            refresh: authTokens.refresh,
        }
        let res = await axios.post('http://localhost:1234/api/token/refresh/', params)
        let data = res.data
        if (res.status === 200) {
            setauthTokens(res)
            const decoded = jwt_decode(data.access)
            setuser(decoded)
            localStorage.setItem('AuthToken', JSON.stringify(data))
        } else {
            handleLogout()
        }
    }


    let contextData = {
        // Functions
        loginUser: loginUser,
        handleLogout: handleLogout,

        // Variables
        tokens: authTokens,
        user: user,
    }

    useEffect(() => { 
        let interval = setInterval(() => {
           if (authTokens) {
               updateToken()
           } 
        }, 2000)
        return () => clearInterval(interval)

    },[authTokens, loading])

    return (
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )
}