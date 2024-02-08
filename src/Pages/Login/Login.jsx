import React, { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    userLogin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        //navigate after user login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='max-w-md w-full p-6 bg-white shadow-md rounded-md'>
          <h2 className='text-2xl font-semibold mb-6 text-center'>Login</h2>
          <form onSubmit={handleLogin}>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-gray-600 text-sm font-medium mb-2'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
                placeholder='Enter your email'
                required
              />
            </div>

            <div className='mb-6'>
              <label
                htmlFor='password'
                className='block text-gray-600 text-sm font-medium mb-2'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
                placeholder='Enter your password'
                required
              />
            </div>

            <button
              type='submit'
              className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue'
            >
              Log In
            </button>
            <p>
              Are You First Time In Drogon News?{" "}
              <Link className='font-bold text-blue-400' to='/register'>
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
