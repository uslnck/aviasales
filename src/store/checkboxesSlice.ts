import { createSlice } from "@reduxjs/toolkit";
import { ICheckboxesSliceState } from "../types";

const initialState: ICheckboxesSliceState = {
  allTransfersChecked: true,
  oneTransferChecked: true,
  twoTransfersChecked: true,
  threeTransfersChecked: true,
  noTransfersChecked: false,
};

const checkboxesSlice = createSlice({
  name: "checkboxes",
  initialState,
  reducers: {
    toggleAllTransfers: (state) => {
      state.allTransfersChecked = !state.allTransfersChecked; //= action.payload
      state.oneTransferChecked = !state.oneTransferChecked;
      state.twoTransfersChecked = !state.twoTransfersChecked;
      state.threeTransfersChecked = !state.threeTransfersChecked;
      state.noTransfersChecked =
        !state.noTransfersChecked || state.noTransfersChecked;
    },
    toggleOneTransfer: (state) => {
      state.oneTransferChecked = !state.oneTransferChecked;
    },
    toggleTwoTransfers: (state) => {
      state.twoTransfersChecked = !state.twoTransfersChecked;
    },
    toggleThreeTransfers: (state) => {
      state.threeTransfersChecked = !state.threeTransfersChecked;
    },
    toggleNoTransfers: (state) => {
      state.noTransfersChecked = !state.noTransfersChecked;
    },
  },
});

export const {
  toggleAllTransfers,
  toggleOneTransfer,
  toggleTwoTransfers,
  toggleThreeTransfers,
  toggleNoTransfers,
} = checkboxesSlice.actions;

export default checkboxesSlice.reducer;
