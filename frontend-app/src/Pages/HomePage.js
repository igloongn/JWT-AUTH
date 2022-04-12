import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'

const HomePage = () => {
    
    const { name } = useContext(AuthContext)

    return (
        <div>
            <center><h2>This is the Home page</h2></center>
            <center><h2>Hello {name}</h2></center>
        </div>
    )
}

export default HomePage
