import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { healthCheck, login } from "@/redux/thunks/auth.thunk";

export type AuthState = {
  isLoggedIn: boolean;
  name: string | null;
  loginId: string | null;
  loading: boolean;
  error: string | null;
  token: string | null;
};

const initialState: AuthState = {
  error: null,
  loginId: null,
  name: null,
  isLoggedIn: false,
  loading: false,
  token: null,
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.error = null;
      state.loading = false;
      state.isLoggedIn = false;
      state.token = null;
      state.loginId = null;
      state.name = null;
    },
    rehydrateAuth: (state, action: PayloadAction<AuthState>) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
      state.name = action.payload.name;
      state.loginId = action.payload.loginId;
      state.error = action.payload.error;
      state.loading = action.payload.loading;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state: AuthState) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.loading = false;
        state.token = action.payload.token;
        state.error = null;
        state.loginId = action.payload.loginId;
        state.name = action.payload.name;
      })
      .addCase(login.rejected, (state: AuthState) => {
        state.error = "Something went wrong";
        state.loading = false;
        state.isLoggedIn = false;
        state.token = null;
        state.loginId = null;
        state.name = null;
      })
      .addCase(healthCheck.pending, (state: AuthState) => {
        state.loading = true;
      })
      .addCase(healthCheck.fulfilled, (state: AuthState) => {
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(healthCheck.rejected, (state: AuthState) => {
        state.error = "Something went wrong";
        state.loading = false;
        state.isLoggedIn = false;
        state.token = null;
      });
  },
});

export const { logout, rehydrateAuth, setLoading } = authSlice.actions;
export default authSlice.reducer;
