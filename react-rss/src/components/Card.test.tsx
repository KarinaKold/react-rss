import React from 'react';
import { render, screen } from '@testing-library/react';
import { data } from '../api/data';
import { Card } from './Card';

describe('when rendered', () => {
  const productStab = data.products[0];
  const { title, thumbnail, price, description, rating, brand, id } = productStab;

  test('Should have product title', () => {
    render(
      <Card
        id={id}
        title={title}
        brand={brand}
        description={description}
        price={price}
        rating={rating}
        thumbnail={thumbnail}
        stock={0}
        discountPercentage={0}
      />
    );
    expect(screen.getByText(new RegExp(title, 'i'))).toBeTruthy();
  });

  test('Should have product brand', () => {
    render(
      <Card
        id={id}
        title={title}
        brand={brand}
        description={description}
        price={price}
        rating={rating}
        thumbnail={thumbnail}
        stock={0}
        discountPercentage={0}
      />
    );
    expect(screen.queryAllByText(new RegExp(brand, 'i'))).toBeTruthy();
  });

  test('Should have product description', () => {
    render(
      <Card
        id={id}
        title={title}
        brand={brand}
        description={description}
        price={price}
        rating={rating}
        thumbnail={thumbnail}
        stock={0}
        discountPercentage={0}
      />
    );
    expect(screen.getByText(new RegExp(description, 'i'))).toBeTruthy();
  });

  test('Should have product price', () => {
    render(
      <Card
        id={id}
        title={title}
        brand={brand}
        description={description}
        price={price}
        rating={rating}
        thumbnail={thumbnail}
        stock={0}
        discountPercentage={0}
      />
    );
    expect(screen.getByText(new RegExp(price.toString(), 'i'))).toBeTruthy();
  });

  test('Should have product img', () => {
    render(
      <Card
        id={id}
        title={title}
        brand={brand}
        description={description}
        price={price}
        rating={rating}
        thumbnail={thumbnail}
        stock={0}
        discountPercentage={0}
      />
    );
    const img = screen.getByAltText(new RegExp(title, 'i')) as HTMLImageElement;
    expect(img.src).toBe(thumbnail);
  });
});
