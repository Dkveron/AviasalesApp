import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  all: false,
  withoutTransfers: false,
  oneTransfer: false,
  twoTransfers: false,
  threeTransfers: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleFilter(state, action) {
      const { filter } = action.payload;

      if (filter === 'all') {
        const newValue = !state.all;
        state.all = newValue;
        state.withoutTransfers = newValue;
        state.oneTransfer = newValue;
        state.twoTransfers = newValue;
        state.threeTransfers = newValue;
      } else {
        state[filter] = !state[filter];
        const allEnabled =
          state.withoutTransfers &&
          state.oneTransfer &&
          state.twoTransfers &&
          state.threeTransfers;

        state.all = allEnabled;
      }
    },
  },
});

export const { toggleFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
