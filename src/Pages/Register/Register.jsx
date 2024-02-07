import React, { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photoURL = form.get("photoUrl");
    console.log(name, email, password, photoURL);
    createUser(email, password)
      .then((result) => {
        const createUser = result.user;
        console.log(createUser);
        addedNameAndPhotoURL(createUser, name, photoURL);
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        form.reset();
      });
  };
  const addedNameAndPhotoURL = (user, name, photoURL) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='max-w-md w-full p-6 bg-white shadow-md rounded-md'>
          <h2 className='text-2xl font-semibold mb-6 text-center'>Sign Up</h2>

          <form onSubmit={handleSignIn}>
            <div className='mb-4'>
              <label
                htmlFor='name'
                className='block text-gray-600 text-sm font-medium mb-2'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
                placeholder='Enter your name'
                required
              />
            </div>

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

            <div className='mb-4'>
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

            <div className='mb-4'>
              <label
                htmlFor='photoUrl'
                className='block text-gray-600 text-sm font-medium mb-2'
              >
                Photo URL
              </label>
              <input
                type='text'
                id='photoUrl'
                name='photoUrl'
                className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
                placeholder='Enter your photo URL'
              />
            </div>

            <button
              type='submit'
              className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue'
            >
              Sign Up
            </button>
            <p>
              Have You Account Already?{" "}
              <Link className='text-blue-400 font-bold' to='/login'>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
