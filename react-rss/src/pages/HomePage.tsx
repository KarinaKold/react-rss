import React from 'react';
import { Search } from '../components/InputSearch';
import Loader from '../components/Loader';
import { IProduct } from '../types/types';
import Card from '../components/Card';
import { useGetProductQuery } from '../store/service';
import { useAppSelector } from '../store/store';

export default function Home() {
  const searchTextSelector = useAppSelector((state) => state.search.searchValue);
  const { isLoading, data: products } = useGetProductQuery(searchTextSelector);

  return (
    <>
      <h2 className="text-center text-2xl">Home</h2>
      <div className="m-2">
        <Search />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="justify-center">
          <>
            <h2 className="mx-10 text-2xl font-bold leading-7 text-gray-800 sm:truncate sm:text-3xl sm:tracking-tight">
              Cards
            </h2>
            <div className="justify-items-center grid grid-cols-4 gap-3">
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
