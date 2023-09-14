
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