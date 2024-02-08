import React from "react";
import Header from "./Shared/Header/Header";
import { useLoaderData, useParams } from "react-router-dom";
import LeftSideNav from "./Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "./Shared/RightSideNav/RightSideNav";
import Navbar from "./Shared/Navbar/Navbar";

const NewsDetails = () => {
  const newses = useLoaderData();
  const { id } = useParams();
  const news = newses.find((news) => news._id === id);
  console.log(news);
  const { title, _id, details, image_url, rating, total_view } = news;

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className='grid grid-cols-3'>
        <div className='col-span-2'>
          {/* news describetion  */}
          <div className='m-2'>
            <h1 className='font-bold my-4'>{title}</h1>
            <img src={image_url} alt='' />
            <p className='my-4 '>{details}</p>
            <hr className='my-4' />
            {/* <div className='flex items-center justify-between my-4'>
                <div className='flex items-center'>
                  <span className='flex mr-2 items-center text-orange-400'>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                  </span>
                  {rating.number}
                </div>
                <div className='flex items-center '>
                  <span>
                    <IoMdEye />
                  </span>
                  <p className='ml-2'>{total_view}</p>
                </div>
              </div> */}
          </div>
        </div>
        <div className='col-span-1'>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
