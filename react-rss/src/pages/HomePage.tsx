import React from 'react';
import { Search } from '../components/InputSearch';
import { CardList } from '../components/CardList';

export default function Home() {
  return (
    <>
      <h2 className="text-center text-2xl">Home</h2>
      <div className="m-2">
        <Search />
      </div>
      <div className="justify-center">
        <CardList />
      </div>
    </>
  );
}
