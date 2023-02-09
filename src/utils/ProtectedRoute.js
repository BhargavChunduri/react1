import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({children}) {
  
    const role = +prompt("Enter your age");
    if(role<18){
        alert("You are Not allowed ");
        return <Navigate to ='/home' replace/>
    }
    return children;
    
}
