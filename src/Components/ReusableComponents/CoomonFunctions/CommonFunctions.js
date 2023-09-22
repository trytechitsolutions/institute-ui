import jwt_decode from "jwt-decode";
import { getToken } from "../../SecureStorage/SecureStorage";

export const validatePhoneNumber = (_, value) => {
    if (value && !/^\d{10}$/.test(value)) {
        return Promise.reject('Please enter a valid 10-digit phone number');
    }
    return Promise.resolve();
};

export const validateConfirmPassword = (_, value, arr) => {
    let pwd = '';
    const pwdObj = arr.find(ele => ele.name === "password");
    if (pwdObj) {
        pwd = pwdObj.value;
    }
    if (value && pwd && value !== pwd) {
        return Promise.reject('Passwords do not match');
    }
    return Promise.resolve();
};

export const dateFormat = (val) => {
    const date = new Date(val);
    return date.toLocaleDateString();
}

export const onChangeValueBind = (formdata, data) => {
    const matchingElement = formdata.fieldsArray.find(ele => ele.name === data.name);
    if (matchingElement) {
        matchingElement.value = data.value;
    }
    if (matchingElement.type === "date") {
        matchingElement.value = dateFormat(data.value);
    }
}


export const preparePayLoad = (arr) => {
    let obj = {};
    arr.forEach(ele => {
        obj[ele.name] = ele.value;
        if (ele.type === "phonenumber") {
            obj[ele.name] = ele.value.toString();
        }
    });

    // File data append
    const fileobj = arr.find(x => x.type === "file");
    if (fileobj) {
        const formData = new FormData();
        fileobj.value.forEach((file) => {
            formData.append('files', file.originFileObj);
        });
        delete obj[fileobj.name];
        formData.append('payload', obj);
        return formData;
    }
    return obj;
}

export const getErrorMsg = (res) => {
    let msg = "Server Error...!"
    if (typeof  res.response.data.error==="string") {
        msg = res.response.data.error;
    }else{
        msg = res.response.data.error.errors[0].message;
    }
    
    return msg;
}

export const getLoginData = () => {
    const token = getToken("token");
    if (token) {
        return jwt_decode(token);
    }
    return null;
}

export const isLogedIn = () => {
    const loginData = getLoginData();
    const currentTimestamp = Math.floor(Date.now() / 1000);
    if (loginData && (loginData.exp > currentTimestamp)) {
        return true;
    }
    return false;
}

export const upDateForm = (reset, formdata, obj) => {
    formdata.fieldsArray.forEach(ele => {
        ele.value = reset === true ? "" : obj[ele.name];
    });
}

