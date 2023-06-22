// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ITicketsSliceState } from "../types";

const initialState: ITicketsSliceState = {
  searchId: "",
  tickets: [],
  status: "",
  searchIdError: null,
  ticketsError: null,
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
      console.log(body.searchId);
      return body.searchId;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  async function (_, { getState, rejectWithValue }) {
    const searchId = getState().tickets.searchId;
    try {
      const response = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
      );
      if (!response.ok) {
        throw new Error("Server error");
      }
      const body = await response.json();
      console.log(body.tickets);
      return body.tickets;
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
    const asyncFunctions = [
      {
        action: fetchSearchId,
        payloadKey: "searchId",
        errorKey: "searchIdError",
      },
      { action: fetchTickets, payloadKey: "tickets", errorKey: "ticketsError" },
    ];

    asyncFunctions.forEach(({ action, payloadKey, errorKey }) => {
      builder
        .addCase(action.pending, (state) => {
          state.status = "loading";
          state[errorKey] = null;
        })
        .addCase(action.fulfilled, (state, action) => {
          state.status = "resolved";
          state[payloadKey] = action.payload;
          state[errorKey] = null;
        })
        .addCase(action.rejected, (state, action) => {
          state.status = "rejected";
          state[errorKey] = action.payload;
        });
    });
  },
});

export const { getTickets } = ticketsSlice.actions;
export default ticketsSlice.reducer;
