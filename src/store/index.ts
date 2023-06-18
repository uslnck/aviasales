import { configureStore } from "@reduxjs/toolkit";
import checkboxesReducer from "./checkboxesSlice";
import filtersReducer from "./filtersSlice";

const store = configureStore({
  reducer: {
    checkboxes: checkboxesReducer,
    filters: filtersReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
