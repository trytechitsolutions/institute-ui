import { createSlice } from '@reduxjs/toolkit';

const initialState = 'LoginReducer'; 

const activeReducerSlice = createSlice({
  name: 'activeReducer',
  initialState: initialState,
  reducers: {
    setActiveReducer: (state, action) => {
      return action.payload;
    },
  },
});

export const { setActiveReducer } = activeReducerSlice.actions;
export default activeReducerSlice.reducer;
