import React, { useEffect, useState } from "react";

import NewsFeed from "./NewsFeed";

const News = () => {
  const [newses, setNewses] = useState([]);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNewses(data));
  }, []);
  return (
    <div className=''>
      <h1 className='text-3xl font-bold'>Dragon News Home</h1>
      <div className=''>
        {newses.map((news) => (
          <NewsFeed key={news._id} news={news}></NewsFeed>
        ))}
      </div>
    </div>
  );
};

export default News;
