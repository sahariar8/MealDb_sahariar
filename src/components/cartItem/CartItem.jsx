import React from 'react';

const CartItem = ({cartitem}) => {
    const {strMeal,strMealThumb} = cartitem;
    return (
      <div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
            className='h-[200px]'
              src={strMealThumb}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{strMeal}</h2>
          </div>
        </div>
      </div>
    );
};

export default CartItem;