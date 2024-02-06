import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrackingNews = () => {
  return (
    <div className=' bg-gray-300 flex rounded-md'>
      <button className='btn btn-secondary m-3 '>Braking News..</button>
      <Marquee pauseOnHover={true} speed={200}>
        <Link className=' m-2 text-2xl' to='/'>
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link className=' m-2 text-2xl' to='/'>
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link className=' m-2 text-2xl' to='/'>
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link className=' m-2 text-2xl' to='/'>
          I can be a React component, multiple React components, or just some
          text.
        </Link>
      </Marquee>
    </div>
  );
};

export default BrackingNews;
