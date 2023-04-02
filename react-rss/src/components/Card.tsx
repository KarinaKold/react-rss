import React from 'react';
import { IProduct } from 'types/types';

export const Card = ({
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  thumbnail,
}: IProduct) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="align-self-center">
        <img className="h-200px" src={thumbnail} alt={title} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title.toLocaleUpperCase()}</div>
        <div>{description}</div>
        <div>
          <b>Brand: </b> {brand}
        </div>
        <div>
          <b>Rating: </b>
          {rating}
        </div>
        <div>Stock: {stock}</div>
        <div>Discount: {discountPercentage}%</div>
        <div className="flex-grow text-right">
          <span className="font-bold text-xl">{price}$</span>
        </div>
      </div>
    </div>
  );
};
