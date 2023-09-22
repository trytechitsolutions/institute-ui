import { LoginFailed, LoginRequest, LoginSucess } from "../Constants/LoginConstants";

export const initialState = {
    loginData: {},
    isLoading: false,
    error: null,
}


export const LoginReducer = (state = initialState, action = {}) => {
    const { type, data } = action;
    switch (type) {
        case LoginRequest:
            return { ...state, isLoading: true };
        case LoginSucess:
            return { ...state, loginData: data, isLoading: false, error: null };
        case LoginFailed:
            return { ...state, isLoading: false, error: data };
        default:
            return state;
    }
}
export default LoginReducer;