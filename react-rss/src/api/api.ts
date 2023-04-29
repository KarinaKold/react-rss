import { IProduct } from '../types/types';

async function getProducts(search: string): Promise<IProduct[]> {
  const res = await fetch(`https://dummyjson.com/products/search?q=${search}`);
  const data = await res.json();
  return data.products;
}

async function getProductDescription(ID: number): Promise<IProduct> {
  const res = await fetch(`https://dummyjson.com/products/${ID}`);
  const data = await res.json();
  return data;
}

export { getProducts, getProductDescription };
