import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userimage from "../../../assets/user.png";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {
  const { userLogOut, user } = useContext(AuthContext);
  const handleLogOut = () => {
    userLogOut();
  };
  const navLinks = (
    <div className='flex'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Career</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </div>
  );
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu flex menu-horizontal px-1'>{navLinks}</ul>
      </div>
      <div className='navbar-end'>
        <img
          className='w-12 mr-2 rounded-full '
          src={user ? user.photoURL : userimage}
          alt='user'
        />
        {user ? (
          <button
            onClick={handleLogOut}
            className='btn bg-gray-500 font-poppins font-semibold text-2xl text-white border-none pr-9 pl-9'
          >
            SignOut
          </button>
        ) : (
          <Link
            to='/login'
            className='btn bg-gray-500 font-poppins font-semibold text-2xl text-white border-none pr-9 pl-9'
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
