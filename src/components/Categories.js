// src/components/Categories.js
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategoryStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const categoryStatus = useSelector(selectCategoryStatus);

  return (
    <div>
      <h1>Categories</h1>
      <p>Status: {categoryStatus}</p>
    </div>
  );
};

export default Categories;
