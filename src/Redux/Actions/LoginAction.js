import { LoginFailed, LoginRequest, LoginSucess } from "../Constants/LoginConstants";


const loginRequest = (req) => ({
    type: LoginRequest,
    req,
});

const loginSuccess = (data) => ({
    type: LoginSucess,
    data,
});

const loginFail = (error) => ({
    type: LoginFailed,
    data: error,
});


const AllActions = {
    loginRequest,
    loginSuccess,
    loginFail
}
export default AllActions;