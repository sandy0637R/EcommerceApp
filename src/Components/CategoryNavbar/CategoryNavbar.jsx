// CategoryNavbar.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts } from '../../Store/action';
import './CategoryNavbar.css';

const CategoryNavbar = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const getUniqueCategories = (data = []) => {
    if (!data || data.length === 0) return ['All'];
    return ['All', ...new Set(data.map(product => product.category))];
  };

  const categories = getUniqueCategories(products);

  return (
    <div className='CNav-main'>
      <ul className='CNav-ul'>
        {categories.map((category, index) => (
          <li
            key={index}
            className='CNav-li'
            onClick={() => dispatch(filterProducts(category))}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryNavbar;
