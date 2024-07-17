import { getProductDescription } from '../api/api';
import React, { useEffect, useState } from 'react';
import { IProduct } from '../types/types';
import Loader from './Loader';

type ProductModalProps = {
  active: boolean;
  setActive: (show: boolean) => void;
  ID: number;
};

export default function ModalCard({ active, setActive, ID }: ProductModalProps) {
  const [load, setLoad] = useState(true);
  const [card, setCard] = useState<IProduct>();

  useEffect(() => {
    setLoad(true);
    const fetchProduct = async () => {
      try {
        const currentCard = await getProductDescription(ID);
        setCard(currentCard);
        setLoad(false);
      } catch (err) {
        console.log('Error! Not found');
      }
    };
    fetchProduct();
  }, [ID]);

  return (
    <div
      className={active ? 'product-modal active' : 'product-modal'}
      onClick={() => setActive(false)}
    >
      <div className="product-modal__content" onClick={(event) => event.stopPropagation()}>
        <button className="product-modal__btn" onClick={() => setActive(false)}>
          &#10006;
        </button>
        {load || card === undefined ? (
          <Loader />
        ) : (
          <>
            <div>
              <img src={card.thumbnail} alt={card.title} />
            </div>
            <div className="product-modal__info">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <p>Price: ${card.price}</p>
              <p>Discount: {card.discountPercentage}%</p>
              <p>Rating: {card.rating}</p>
              <p>Stock: {card.stock}</p>
              <p>Brand: {card.brand}</p>
              <p>Category: {card.category}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
