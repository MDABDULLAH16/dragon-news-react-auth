import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BrackingNews from "../BrackingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BrackingNews></BrackingNews>
      <Navbar></Navbar>
      <div className='grid grid-cols-4 gap-6'>
        <div className='border'>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className='col-span-2 border border-red-800'>
          {" "}
          <h1 className='text-4xl'>News comming soon</h1>{" "}
        </div>
        <div className='border'>
          {" "}
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
