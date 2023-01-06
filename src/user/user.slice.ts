import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { personApi } from "../shared/api/person.api";
import { User } from "../shared/models/user";
import { RootState } from "../shared/store";

export interface StateUser {
  user: User;
  isProfileLoaded: boolean;
  loginError?: string;
}

const initialState: StateUser = {
  user: {
    name: "",
    roles: [],
  },
  isProfileLoaded: false,
};

// async actions
// This function should be called when the user is already loggedin
export const loadUserProfileAsync = createAsyncThunk(
  "user/loadUserProfileAsync",
  async () => {
    // TODO: call api and get response and map to User later
    await personApi.getUserProfile();
    const user: Partial<User> = { roles: ["ADMIN"] };
    return user;
  }
);

// slices
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsUserProfileLoaded: (state, { payload }: PayloadAction<boolean>) => {
      state.isProfileLoaded = payload;
    },
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
    },
    setUserPartial: (state, { payload }: PayloadAction<Partial<User>>) => {
      state.user = { ...state.user, ...payload };
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(loadUserProfileAsync.pending, (state, action) => {
      state.isProfileLoaded = false;
    });
    builder.addCase(loadUserProfileAsync.fulfilled, (state, action) => {
      state.user = { ...state.user, ...action.payload };
      state.isProfileLoaded = true;
    });
  },
});

export const { setIsUserProfileLoaded, setUser, setUserPartial } =
  userSlice.actions;

// selectors
export const selectUser = (state: RootState) => {
  return state.user.user;
};

export const selectIsUserProfileLoaded = (state: RootState) => {
  return state.user.isProfileLoaded;
};

export default userSlice.reducer;
