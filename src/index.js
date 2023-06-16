import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css';
import MediaContextProvider from './Context/MediaContext';
import AuthContextProvider from './Context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <AuthContextProvider>
        <MediaContextProvider>
            <App />
        </MediaContextProvider>
    </AuthContextProvider>
    
);


