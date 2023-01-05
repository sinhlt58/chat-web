import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../shared/models/user";
import { RootState } from "../shared/store";

export interface StateUser {
  user: User;
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
    loginSuccess: (state, { payload }: PayloadAction<{ user: User }>) => {
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

// selectors
export const selectUser = (state: RootState) => {
  return state.user.user;
};

export default userSlice.reducer;
