import React from 'react';
import { Search } from '../components/InputSearch';
import Loader from '../components/Loader';
import { IProduct } from '../types/types';
import Card from '../components/Card';
import { useGetProductQuery } from '../store/service';
import { useAppSelector } from '../store/store';

export default function Home() {
  const searchTextSelector = useAppSelector((state) => state.search);
  const { isLoading, data: products } = useGetProductQuery(searchTextSelector.searchValue);

  return (
    <>
      <h2>Home</h2>
      <div>
        <Search />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="product-container">
          <>
            <h2>Cards</h2>
            <div className="product-content">
              {products?.length ? (
                products.map((item: IProduct) => <Card product={item} key={item.id} />)
              ) : (
                <p>Not found!</p>
              )}
            </div>
          </>
        </div>
      )}
    </>
  );
}
