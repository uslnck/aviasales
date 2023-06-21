import { configureStore } from "@reduxjs/toolkit";
import checkboxesReducer from "./checkboxesSlice";
import filtersReducer from "./filtersSlice";
import ticketsReducer from "./ticketsSlice";

const store = configureStore({
  reducer: {
    checkboxes: checkboxesReducer,
    filters: filtersReducer,
    tickets: ticketsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
