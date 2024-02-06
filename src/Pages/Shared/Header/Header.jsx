import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment/moment";
const Header = () => {
  return (
    <div className='text-center'>
      <img className='mx-auto' src={logo} alt='' />
      <p className='text-2xl text-gray-500'>
        Journalism Without Fear or Favour
      </p>
      <p>{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</p>
    </div>
  );
};

export default Header;
