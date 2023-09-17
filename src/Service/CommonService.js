import axios from 'axios';
import * as securedLocalStorage from "../enironment/environment";

// Function to make a generic API request
export const apiRequest = async (url, method, data) => {
    const config = {
        method,
        url,
        data,
    };
    const token = securedLocalStorage.getToken("token");
    if (token) {
        console.log("hii")
        const headers = {
            token,
            "Authorization": "1",
            "Access-Control-Allow-Origin": "http://treeviewdatamapping-env.eba-jsbuwrm8.us-east-2.elasticbeanstalk.com/",
            "Access-Control-Allow-Headers": "Content-Type, Authorization, *",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE",
            "Access-Control-Allow-Credentials": true,
        }
        config["headers"] = headers;
    }

    try {
        const response = await axios(config);
        return response;
    } catch (error) {
        return error;
    }
};


