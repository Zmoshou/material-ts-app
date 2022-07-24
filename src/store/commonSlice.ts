import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./rootStore";

export interface State {
  theme: string;
  locale: string;
}

const initialState: State = {
  theme: "light",
  locale: "zhCN",
};

export const counterSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    setLocale: (state, action: PayloadAction<string>) => {
      state.locale = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const getCommon = (state: RootState) => state.common;

export const { setTheme } = counterSlice.actions;

export default counterSlice.reducer;
