import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModelUser } from "../shared/models/user";

export interface StateUser {
  user: ModelUser;
  loginError?: string;
}

const initialState: StateUser = {
  user: {
    name: "Admin",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, { payload }: PayloadAction<{ user: ModelUser }>) => {
      state.user = payload.user;
    },
    loginError: (state, { payload }: PayloadAction<string>) => {
      state.loginError = payload;
    },
  },
});

export const { loginSuccess, loginError } = userSlice.actions;

export const loginAsync = createAsyncThunk(
  "user/loginAsync",
  async (data: any, { dispatch, getState }) => {
    // request here
  }
);

export default userSlice.reducer;
