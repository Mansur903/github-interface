import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  repos: [],
  avatar: '',
  login: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserInfo: (state, action) => {
      const { reposList, login, avatarUrl } = action.payload;
      state.repos = [...reposList];
      state.avatar = avatarUrl;
      state.login = login;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUserInfo } = userSlice.actions;

export default userSlice.reducer;
