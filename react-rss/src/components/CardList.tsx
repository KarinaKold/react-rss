import React, { Component } from 'react';
import { data } from '../api/data';
import Card from './Card';

export default class CardList extends Component {
  render(): React.ReactNode {
    return (
      <>
        <h2 className="mx-10 text-2xl font-bold leading-7 text-gray-800 sm:truncate sm:text-3xl sm:tracking-tight">
          Cards
        </h2>
        <div className="justify-items-center grid grid-cols-4 gap-3">
          {data.products?.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              brand={item.brand}
              rating={item.rating}
              description={item.description}
              id={item.id}
              thumbnail={item.thumbnail}
            />
          ))}
        </div>
      </>
    );
  }
}
