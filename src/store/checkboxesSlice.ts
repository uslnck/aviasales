import { createSlice } from "@reduxjs/toolkit";
import { ICheckboxesSliceState } from "../types";

const initialState: ICheckboxesSliceState = {
  allTransfersChecked: true,
  zeroTransfersChecked: true,
  oneTransferChecked: true,
  twoTransfersChecked: true,
  threeTransfersChecked: true,
};

const checkboxesSlice = createSlice({
  name: "checkboxes",
  initialState,
  reducers: {
    toggleAllTransfers: (state) => {
      const allTransfersStatus = !state.allTransfersChecked;
      state.allTransfersChecked = allTransfersStatus;
      state.zeroTransfersChecked = allTransfersStatus;
      state.oneTransferChecked = allTransfersStatus;
      state.twoTransfersChecked = allTransfersStatus;
      state.threeTransfersChecked = allTransfersStatus;
    },
    toggleZeroTransfers: (state, action) => {
      state.zeroTransfersChecked = !state.zeroTransfersChecked;
      const allChecked = action.payload.all;
      if (allChecked) state.allTransfersChecked = true;
      else state.allTransfersChecked = false;
    },
    toggleOneTransfer: (state, action) => {
      state.oneTransferChecked = !state.oneTransferChecked;
      const allChecked = action.payload.all;
      if (allChecked) state.allTransfersChecked = true;
      else state.allTransfersChecked = false;
    },
    toggleTwoTransfers: (state, action) => {
      state.twoTransfersChecked = !state.twoTransfersChecked;
      const allChecked = action.payload.all;
      if (allChecked) state.allTransfersChecked = true;
      else state.allTransfersChecked = false;
    },
    toggleThreeTransfers: (state, action) => {
      state.threeTransfersChecked = !state.threeTransfersChecked;
      const allChecked = action.payload.all;
      if (allChecked) state.allTransfersChecked = true;
      else state.allTransfersChecked = false;
    },
  },
});

export const {
  toggleAllTransfers,
  toggleZeroTransfers,
  toggleOneTransfer,
  toggleTwoTransfers,
  toggleThreeTransfers,
} = checkboxesSlice.actions;

export default checkboxesSlice.reducer;
