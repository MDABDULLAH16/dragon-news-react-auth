import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h1 className='text-3xl m-4 font-semibold'>All Categories</h1>
      {categories.map((category) => (
        <Link
          key={category.id}
          className='text-2xl  block p-2 m-2'
          to={`/categories/${category.id}`}
        >
          {category.name}
        </Link>
      ))}
      {/* LeftSideNews  */}
    </div>
  );
};

export default LeftSideNav;
