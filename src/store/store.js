import { configureStore } from '@reduxjs/toolkit';

import filtersReducer from './filtersSlice';
import sortReducer from './sortSlice';
import ticketsReducer from './ticketsSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    sort: sortReducer,
    tickets: ticketsReducer,
  },
});
