import { useState } from 'react';
import userImage from '../../assets/icons/accounts.png';
import { useEffect } from 'react';
import CategoryItem from './CategoryItem';
const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("categories.json")
    .then(res => res.json())
    .then(data => setCategory(data))
  },[])
  return (
    <div>
      <div className="text-center m-auto mt-20">
        <h1 className="text-[48px]">Job Category List</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-12 mt-5 gap-5 mx-auto">
        {
          category.map(category => <CategoryItem key={category.id} category={category}></CategoryItem>)
        }
      </div>
    </div>
  );
};

export default Category;
