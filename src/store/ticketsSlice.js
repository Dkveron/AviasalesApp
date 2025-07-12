import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://aviasales-test-api.kata.academy';

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${BASE_URL}/search`);
      const { searchId } = await res.json();

      let allTickets = [];
      let stop = false;

      while (!stop) {
        try {
          const ticketRes = await fetch(
            `${BASE_URL}/tickets?searchId=${searchId}`,
          );

          if (!ticketRes.ok) {
            throw new Error(`Server error: ${ticketRes.status}`);
          }

          const data = await ticketRes.json();
          allTickets = [...allTickets, ...data.tickets];
          stop = data.stop;
        } catch (err) {
          console.warn('Retrying fetchTickets due to error:', err.message);
        }
      }

      return allTickets;
    } catch (err) {
      return rejectWithValue('Ошибка при получении билетов');
    }
  },
);

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.loading = false;
        state.tickets = action.payload;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ticketsSlice.reducer;
