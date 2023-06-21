import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ITicketsSliceState } from "../types";

const initialState: ITicketsSliceState = {
  searchId: "",
  tickets: [],
  status: "",
  error: null,
};

export const fetchSearchId = createAsyncThunk(
  "tickets/fetchSearchId",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://aviasales-test-api.kata.academy/search"
      );
      if (!response.ok) {
        throw new Error("Server error");
      }
      const body = await response.json();
      return body;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        `https://aviasales-test-api.kata.academy/${initialState.searchId}`
      );
      if (!response.ok) {
        throw new Error("Server error");
      }
      const body = await response.json();
      console.log(body);
      return body;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    getTickets: (state) => {
      state.tickets = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = "resolved";
        state.searchId = action.payload;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export const { getTickets } = ticketsSlice.actions;
export default ticketsSlice.reducer;
