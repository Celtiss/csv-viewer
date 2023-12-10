import React from 'react';
import { Navigate } from "react-router-dom";

function ProtectedRoute({element: Component, ...props} ) {
    return (
        props.isLocalCsv ? <Component {...props} /> : <Navigate to="/main" replace/>
    )
}

export default ProtectedRoute;