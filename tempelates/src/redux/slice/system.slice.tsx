import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SystemState = {
  menu: boolean;
  theme: "light" | "dark";
};

const initialState: SystemState = {
  menu: true,
  theme:
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
};

const systemSlice = createSlice({
  name: "System",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menu = !state.menu;
    },
    changeTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleMenu, changeTheme } = systemSlice.actions;
export default systemSlice.reducer;
