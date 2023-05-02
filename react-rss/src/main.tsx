import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { Store } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';

function entryClient(store: Store) {
  ReactDOM.hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}

entryClient(store);
