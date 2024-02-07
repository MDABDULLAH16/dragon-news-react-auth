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
    <div className='border'>
      {newses.map((news) => (
        <NewsFeed key={news._id} news={news}></NewsFeed>
      ))}
    </div>
  );
};

export default News;
