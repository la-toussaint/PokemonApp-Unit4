import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    token: null,
    isLoggedIn: false,
    profile: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = Boolean(action.payload);
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
	  state.isLoggedIn = Boolean(action.payload)
	  
    },
    deletePostFromProfile: (state, action) => {
      if (state.profile && state.profile.posts) {
        state.profile.posts = state.profile.posts.filter(
          (post) => post.pokedata_id !== action.payload
        );
      }
    },
  },
});

export const { setToken, setProfile, deletePostFromProfile } =
  authReducer.actions;
