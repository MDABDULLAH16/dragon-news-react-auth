import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
const RightSideNav = () => {
  return (
    <div>
      {/* Login WIth */}
      <div className='m-4'>
        <h2 className='font-bold text-2xl mb-4'>Login With</h2>
        <button className='text-blue-600 mt-2 flex items-center justify-center w-full border border-blue-600 rounded-md'>
          <FaGoogle></FaGoogle>
          <span className='ml-2 '>Login With Google</span>
        </button>
        <button className='text-black mt-2 flex items-center justify-center w-full border border-black rounded-md'>
          <FaGithub></FaGithub>
          <span className='ml-2 '>Login With GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default RightSideNav;
