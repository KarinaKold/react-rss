import React from 'react';
import Loader from './Loader';
import { useGetProductDescriptionQuery } from '../store/service';

type ProductModalProps = {
  active: boolean;
  setActive: (show: boolean) => void;
  ID: number;
};

export default function ModalCard({ active, setActive, ID }: ProductModalProps) {
  const { isLoading, data: card } = useGetProductDescriptionQuery(ID);

  return (
    <div
      className={active ? 'product-modal active' : 'product-modal'}
      onClick={() => setActive(false)}
    >
      <div className="product-modal__content" onClick={(event) => event.stopPropagation()}>
        <button className="product-modal__btn" onClick={() => setActive(false)}>
          &#10006;
        </button>
        {isLoading || card === undefined ? (
          <Loader />
        ) : (
          <>
            <div className="product-modal__image">
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
