import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  userID: null,
  userName: '',
}

const loginSlice = createSlice({
  name: 'login-manager',
  initialState,
  reducers:{
    login: (state, action) => {
      state.value = true;
      state.userID = action.payload.userID;
      state.userName = action.payload.userName;
    },

    logout: (state) => {
      state.userID = false;
      state.uid = null;
      state.userName = ''
    }
  }
})

export const { login, logout } = loginSlice.actions
export default loginSlice.reducer