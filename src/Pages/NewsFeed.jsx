import React from "react";
import News from "./News";
import { CiShare2 } from "react-icons/ci";
import { FiBookmark } from "react-icons/fi";
import { FaBookmark, FaShare, FaShareSquare } from "react-icons/fa";

const NewsFeed = ({ news }) => {
  console.log(news);
  const { img, name, published_date } = news.author;
  const { title, thumbnail_url } = news;

  return (
    <div>
      {/* Author info */}
      <div className='flex justify-between'>
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
    </div>
  );
};

export default NewsFeed;
