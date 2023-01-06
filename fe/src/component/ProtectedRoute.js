import {
    Navigate
} from 'react-router-dom';

//My Private Route
export const PrivateRoute = ({ children }) => {
    const auth = localStorage.getItem('token')
    return auth ? children : <Navigate to="/login" />;
};