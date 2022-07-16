import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import AuthNav from "./AuthNav";

const LandingPage = () => {
    const { isAuthenticated } = useAuth0();
    return !isAuthenticated && (
        <div>
            <h1>Welcome to Plan+</h1>
            <AuthNav />
        </div>
    );
};

export default LandingPage;