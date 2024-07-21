import React, { useState } from 'react';
import { IProduct } from '../types/types';
import ModalCard from './ModalCard';

interface IProductProps {
  product: IProduct;
}

export default function Card({ product }: IProductProps) {
  const { id, title, price, brand, thumbnail } = product;
  const [modal, setModal] = useState(false);

  return (
    <>
      <div
        id={`product${id}`}
        onClick={() => setModal(true)}
        className="max-w-sm rounded overflow-hidden shadow-lg m-4"
      >
        <div className="align-self-center">
          <img className="h-200px" src={thumbnail} alt={title} />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title.toLocaleUpperCase()}</div>
          <div>
            <b>Brand: </b> {brand}
          </div>
          <div className="flex-grow text-right">
            <span className="font-bold text-xl">{price}$</span>
          </div>
        </div>
        <button className="font-bold">Open it</button>
      </div>
      <ModalCard active={modal} setActive={setModal} ID={id} />
    </>
  );
}
