import { LoginFailed, LoginRequest, LoginSucess } from "../Constants/LoginConstants";


export const loginRequest = (req) => ({
    type: LoginRequest,
    req,
});

export const loginSuccess = (data) => ({
    type: LoginSucess,
    data,
});

export const loginFail = (error) => ({
    type: LoginFailed,
    data: error,
});
