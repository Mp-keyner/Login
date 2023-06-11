import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...props }) => {
    return isAuthenticated ? (
        <Route {...props} element={<Component />} />
    ) : (
        <Navigate to="/login" replace state={{ from: props.location }} />
    );
};

export default PrivateRoute;
