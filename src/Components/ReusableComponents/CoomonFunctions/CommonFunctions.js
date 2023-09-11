
export const validatePhoneNumber = (_, value) => {
    if (value && !/^\d{10}$/.test(value)) {
        return Promise.reject('Please enter a valid 10-digit phone number');
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
    return obj;
}