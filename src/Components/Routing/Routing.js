import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { isLogedIn } from '../ReusableComponents/CoomonFunctions/CommonFunctions';
import PageNotFound from '../PageNotFound/PageNotFound';

const LoginAndRegistration = lazy(() => import("../LoginAndRegistration/LoginAndRegistration"));
const Home = lazy(() => import("../Home/Home"));
const Classes = lazy(() => import("../Preference/Classes/Classes"));
const Qualifications = lazy(() => import("../Preference/Qualifications/Qualifications"));


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
