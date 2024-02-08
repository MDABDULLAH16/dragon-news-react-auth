import React from "react";
import Header from "./Header/Header";
import { useLoaderData, useParams } from "react-router-dom";
import LeftSideNav from "./LeftSideNav/LeftSideNav";
import RightSideNav from "./RightSideNav/RightSideNav";
import Navbar from "./Navbar/Navbar";

const NewsDetails = () => {
  const { id } = useParams();
  const news = useLoaderData();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className='grid grid-cols-3'>
        <div className='col-span-2'>
          <h1>this is newsDetails</h1>
          <p>{id}</p>
          {/* <p>{news._id}</p> */}
        </div>
        <div className='col-span-1'>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
