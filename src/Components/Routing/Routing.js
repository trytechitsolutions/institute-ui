import React,{lazy} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { getLoginData, isLogedIn } from '../ReusableComponents/CoomonFunctions/CommonFunctions';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../Redux/Actions/LoginAction';
const LoginAndRegistration = lazy(() => import("../LoginAndRegistration/LoginAndRegistration"));
const Home = lazy(() => import("../Home/Home"));

// import LoginAndRegistration from '../LoginAndRegistration/LoginAndRegistration';
// import Home from '../Home/Home';

// Custom PrivateRoute component
const PrivateRoute = (props) => {
    const dispatch = useDispatch();
    if (!isLogedIn()) {
        return <Navigate to="/login" />;
    }
    dispatch(loginSuccess(getLoginData()));
    return <props.element.type />
};

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginAndRegistration />} />
                <Route
                    path="/"
                    element={<PrivateRoute element={<Home />} />}
                />
                <Route
                    path="/home"
                    element={<PrivateRoute element={<Home />} />}
                />
            </Routes>
        </Router>
    );
}

export default Routing;
