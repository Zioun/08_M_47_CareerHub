import React from 'react';

const CategoryItem = ({category}) => {
    const {logo, category_name, availability} = category;
    return (
        <div className="col-span-3 card card-compact bg-base-100 shadow-xl border py-5">
          <figure>
            <img src={logo} alt="img"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{category_name}</h2>
            <p>{availability}</p>
          </div>
        </div>
    );
};

export default CategoryItem;