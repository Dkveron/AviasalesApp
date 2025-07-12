import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App/App';
import './components/App/App.scss';

import { Provider } from 'react-redux';

import { store } from './store/store';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
