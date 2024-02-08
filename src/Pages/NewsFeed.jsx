import React from "react";
import News from "./News";
import { IoMdEye } from "react-icons/io";
import { CiShare2 } from "react-icons/ci";
import { FiBookmark } from "react-icons/fi";
import { FaBookmark, FaShare, FaShareSquare, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsFeed = ({ news }) => {
  // console.log(news);
  const { img, name, published_date } = news.author;
  const { title, _id, details, image_url, rating, total_view } = news;

  const more = (
    <div>
      <Link to={`/newsDetails/${_id}`}>
        <button className='text-orange-400'>Read More</button>
      </Link>
    </div>
  );
  return (
    <div>
      <div className='border my-4'>
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
          <hr className='my-4' />
          <div className='flex items-center justify-between my-4'>
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
    </div>
  );
};

export default NewsFeed;
