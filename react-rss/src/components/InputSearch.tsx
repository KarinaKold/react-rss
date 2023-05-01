import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { changeSearchText } from '../store/searchSlice';

export const Search = () => {
  const searchTextSelector = useAppSelector((state) => state.search);
  const [searchValue, setSearchValue] = useState(searchTextSelector.searchValue);
  const dispatch = useAppDispatch();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(changeSearchText(searchValue));
  };

  return (
    <form onSubmit={handleSearchSubmit} data-testid="search-form" className="search-form">
      <div className="search-form_wrapper">
        <div className="search-form_container">
          <input
            type="search"
            className="search-form_input"
            placeholder="Search for..."
            value={searchValue}
            onChange={changeHandler}
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <button onClick={handleSearchSubmit} className="search-form_btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};
