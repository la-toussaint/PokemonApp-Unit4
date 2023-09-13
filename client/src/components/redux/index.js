import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    token: null,
    isLoggedIn: false,
    profile: null,
  },
  reducers: {
    setToken: (state, action) => ({
      ...state,
      token: action.payload,
      isLoggedIn: Boolean(action.payload),
    }),
    setProfile: (state, action) => ({
      ...state,
      profile: action.payload,
    }),
    deletePostFromProfile: (state, action) => ({
      ...state,
      profile: {
        ...profile,
        posts: posts.filter((post) => post._id !== action.payload),
      },
    }),
  },
});

export const { setToken, setProfile, deletePostFromProfile } = authReducer.actions;