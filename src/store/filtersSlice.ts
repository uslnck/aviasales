import { createSlice } from "@reduxjs/toolkit";
import { IFiltersSliceState } from "../types";

const initialState: IFiltersSliceState = {
  cheapestFilter: false,
  fastestFilter: false,
  optimalFilter: false,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCheapest: (state) => {
      state.cheapestFilter = true;
      state.fastestFilter = false;
      state.optimalFilter = false;
    },
    setFastest: (state) => {
      state.fastestFilter = true;
      state.optimalFilter = false;
      state.cheapestFilter = false;
    },
    setOptimal: (state) => {
      state.optimalFilter = true;
      state.cheapestFilter = false;
      state.fastestFilter = false;
    },
  },
});

export const { setCheapest, setFastest, setOptimal } = filtersSlice.actions;

export default filtersSlice.reducer;
