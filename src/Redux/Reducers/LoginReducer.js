import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginData: {},
    isLoading: false,
    error: null,
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginRequest: (state) => {
            state.isLoading = true;
        },
        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.loginData = action.payload;
            state.error = null;
        },
        loginFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { loginRequest, loginSuccess, loginFail } = loginSlice.actions;
export default loginSlice.reducer;
