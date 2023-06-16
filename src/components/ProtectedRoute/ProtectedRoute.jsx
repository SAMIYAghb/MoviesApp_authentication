import React from 'react';
import { Navigate } from 'react-router-dom';


export default function ProtectedRoute(props) {
    
    if(!localStorage.getItem('userToken')){
        console.log('yes');
        return <Navigate to='/login'/>
    }
    else{
        console.log('no');
        return props.children;
    }
    
}

