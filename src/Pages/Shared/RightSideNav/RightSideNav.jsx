import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
const RightSideNav = () => {
  return (
    <div>
      {/* Login WIth */}
      <div className='p-4 mb-3 border '>
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
      {/* Find Us On  */}
      <div>
        <h2 className='font-bold text-2xl mb-2'>Find Us On</h2>
        <div className='p-4 border'>
          <button className='text-blue-600  p-3 flex items-center  w-full border rounded-t-sm'>
            <FaFacebook></FaFacebook>
            <span className='ml-2 '> Google</span>
          </button>{" "}
          <button className='text-black  p-3 flex items-center   w-full border border-y-0'>
            <FaTwitter className='text-indigo-500'></FaTwitter>
            <span className='ml-2 '>Twitter</span>
          </button>
          <button className='text-black  p-3 flex items-center w-full border rounded-b-sm  '>
            <FaInstagram className='text-red-500'></FaInstagram>
            <span className='ml-2 '>Instagram</span>
          </button>
        </div>
      </div>
      {/* Q Zone */}
      <div className='bg-gray-100 mt-4  rounded-sm'>
        <h2 className='font-bold text-2xl p-4'>Q Zone</h2>
        <div>
          <img src={qZone1} alt='' />
          <img src={qZone2} alt='' />
          <img src={qZone3} alt='' />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
