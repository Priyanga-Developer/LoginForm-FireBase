import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import MyContext from './MyContext';

const ProtectedRoute = ({children}) => {
    let {user}=useContext(MyContext);
  
    if(!user){
       return <Navigate to="/"/>;

    }
  return children;
}

export default ProtectedRoute