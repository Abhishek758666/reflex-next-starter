import { createSlice } from "@reduxjs/toolkit";
import { login } from "../thunks/authThunk";
import { TLoginDataSchema } from "@/schemas/auth.schema";

interface authState {
  data: TLoginDataSchema | null;
  loading: boolean;
  error: string | null;
}
const initialState: authState = {
  data: null,
  loading: false,
  error: null,
};

export const authslice = createSlice({
  name: "authslice",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.data = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
        state.error = "Unable to login, Try again in 5minutes";
        state.data = null;
      });
  },
});

export const { logout } = authslice.actions;
export default authslice.reducer;
