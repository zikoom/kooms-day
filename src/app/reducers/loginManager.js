import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
}

const loginSlice = createSlice({
  name: 'login-manager',
  initialState,
  reducers:{
    login: (state, action) => {
      state.value = true;
      console.log('action: ', action);
    },

    logout: (state, action) => {
      state.value = false;
      console.log('action: ', action);
    }
  }
})

export const { login, logout } = loginSlice.actions
export default loginSlice.reducer