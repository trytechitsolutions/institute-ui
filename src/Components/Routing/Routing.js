import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginAndRegistration from "../LoginAndRegistration/LoginAndRegistration";
import Home from "../Home/Home";
import * as environment from "../../enironment/environment";

// Custom PrivateRoute component
const PrivateRoute = ({ element: Element }) => {
    const isLoggedIn = environment.getToken('token');
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return <Element.type />;
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
