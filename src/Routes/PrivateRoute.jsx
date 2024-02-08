import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <span className='loading loading-spinner text-success'></span>;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate state={location.pathname} to='/login' replace={true}></Navigate>
  );
};

export default PrivateRoute;
