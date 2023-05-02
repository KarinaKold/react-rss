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
      <div id={`product${id}`} onClick={() => setModal(true)} className="card-container">
        <div className="card_image">
          <img src={thumbnail} alt={title} />
        </div>
        <div>
          <div>{title.toLocaleUpperCase()}</div>
          <div>
            <b>Brand: </b> {brand}
          </div>
          <div>
            <span>{price}$</span>
          </div>
        </div>
        <button className="card-open_btn">Open it</button>
      </div>
      <ModalCard active={modal} setActive={setModal} ID={id} />
    </>
  );
}
