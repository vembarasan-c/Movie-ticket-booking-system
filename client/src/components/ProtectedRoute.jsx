import React from 'react'
import { useAuth } from './AuthContext.jsx'
import {    Navigate   } from 'react-router-dom';

export const ProtectedRoute = ({children}) => {
    const {user}  = useAuth();
  return (  user ? children : <Navigate to="/login" /> )
}



