import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { isLogedIn } from '../Components/ReusableComponents/CoomonFunctions/Index';
import PageNotFound from '../Components/PageNotFound/Index';

const LoginAndRegistration = lazy(() => import("../Components/LoginAndRegistration/Index"));
const Home = lazy(() => import("../Components/Home/Index"));
const Classes = lazy(() => import("../Components/Preference/Classes/Index"));
const Qualifications = lazy(() => import("../Components/Preference/Qualifications/Index"));


// Custom PrivateRoute component
const PrivateRoute = (props) => {
    if (!isLogedIn()) {
        return <Navigate to="/login" />;
    }
    return (
        <React.Suspense fallback={<LoadingIndicator />}>
            {props.element}
        </React.Suspense>
    );
    
};

function LoadingIndicator() {
    return <div>Loading...</div>;
}

function Routing() {
    return (
        <Routes>
            <Route path="/login" element={<LoginAndRegistration />} />
            <Route
                path="/"
                element={<PrivateRoute element={<Home />} exact />}
            />
            <Route
                path="/home"
                element={<PrivateRoute element={<Home />} exact />}
            />
            <Route
                path="/preference/classes"
                element={<PrivateRoute element={<Classes />} exact />}
            />
            <Route
                path="/preference/qualifications"
                element={<PrivateRoute element={<Qualifications />} exact />}
            />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default Routing;
