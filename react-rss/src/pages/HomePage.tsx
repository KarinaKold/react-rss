import React, { useEffect, useState } from 'react';
import { Search } from '../components/InputSearch';
import Loader from '../components/Loader';
import { getProducts } from '../api/api';
import { IProduct } from '../types/types';
import Card from '../components/Card';

export default function Home() {
  const [load, setLoad] = useState(true);
  const [input, setInput] = useState(localStorage.getItem('search') ?? '');
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setLoad(true);
    const fetchProduct = async () => {
      try {
        const searchProducts = await getProducts(input);
        setProducts(searchProducts);
        setLoad(false);
      } catch (err) {
        console.log('Error! Not found');
      }
    };
    fetchProduct();
  }, [input]);

  return (
    <>
      <h2 className="text-center text-2xl">Home</h2>
      <div className="m-2">
        <Search setInput={setInput} />
      </div>
      {load ? (
        <Loader />
      ) : (
        <div className="justify-center">
          <>
            <h2 className="mx-10 text-2xl font-bold leading-7 text-gray-800 sm:truncate sm:text-3xl sm:tracking-tight">
              Cards
            </h2>
            <div className="justify-items-center grid grid-cols-4 gap-3">
              {products.map((item) => (
                <Card product={item} key={item.id} />
              ))}
            </div>
          </>
        </div>
      )}
    </>
  );
}
