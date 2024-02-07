import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BrackingNews from "../BrackingNews";
import NewsFeed from "../NewsFeed";
import News from "../News";

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
        <div className='col-span-2 '>
          <News></News>
        </div>
        <div className=''>
          {" "}
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
