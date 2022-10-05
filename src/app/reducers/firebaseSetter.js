import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  firestore: null,
};

const firebaseSlice = createSlice({
  name: 'firebase',
  initialState,
  reducers:{
    initFirestore: (state, action) => {
      state.firestore = state.firestore === null ? action.payload : state.firestore;
    }
  }
})

export const { initFirestore } = firebaseSlice.actions
export default firebaseSlice.reducer