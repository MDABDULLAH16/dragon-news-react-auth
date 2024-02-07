import React from "react";
import News from "./News";
import { IoMdEye } from "react-icons/io";
import { CiShare2 } from "react-icons/ci";
import { FiBookmark } from "react-icons/fi";
import { FaBookmark, FaShare, FaShareSquare, FaStar } from "react-icons/fa";

const NewsFeed = ({ news }) => {
  console.log(news);
  const { img, name, published_date } = news.author;
  const { title, thumbnail_url, details, image_url, rating, total_view } = news;

  if (details.length > 120) {
    console.log("120theke besi hoyse gese", details.length);
  }
  const more = (
    <div>
      <button className='text-orange-400'>Read More</button>
    </div>
  );
  return (
    <div clsssName=' '>
      {/* Author info */}
      <div className='flex justify-between bg-gray-200 m-2'>
        <div className='flex p-2'>
          <img width={"40px"} className='rounded-full' src={img} alt='' />
          <div className='ml-4'>
            <h1 className=''>{name}</h1>
            <p>{published_date}</p>
          </div>
        </div>
        <div className='flex items-center p-2'>
          <FiBookmark className='text-gray-400 mr-2'></FiBookmark>
          <CiShare2 />
        </div>
      </div>

      {/* news describetion  */}
      <div className='m-2'>
        <h1 className='font-bold my-4'>{title}</h1>
        <img src={image_url} alt='' />
        <p className='my-4 '>
          {details.length > 250 ? (
            <div className=''>
              {details.slice(0, 250) + "..."}
              {more}
            </div>
          ) : (
            details
          )}
        </p>
        <div className='flex items-center justify-between'>
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
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
