import { useContext } from 'react';
import {
    Route,
    Navigate,
    useNavigate,
    Redirect,
} from 'react-router-dom';
import AuthContext from '../Context/AuthContext';


function PrivateRoutes({ children }) {
    const { user } = useContext(AuthContext)
    return (
        <div>
            {!user ? <Navigate to='/login' /> : children}
        </div>
    )
}

export default PrivateRoutes
