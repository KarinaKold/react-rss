import App from './App';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import React from 'react';

export function render(url: string, opts: RenderToPipeableStreamOptions) {
  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    opts
  );
  return stream;
}
