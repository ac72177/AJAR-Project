import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
    const navigate = useNavigate();

    const onRedirectCallback = (appState) => {
        navigate.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain="dev-mal2sd77.us.auth0.com"
            clientId="qceuP0sWV562V7xJDNlvneVqvJUjrIzh"
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;