import axios from 'axios';
import { getToken } from '../Components/SecureStorage/SecureStorage';
import { BASE_URL } from '../enironment/environment';

// Function to make a generic API request
const apiRequest = async (req) => {
    const token = getToken('token');
    if (token) {
        const headers = {
            token,
            "Authorization": "1",
            "Access-Control-Allow-Origin": "http://treeviewdatamapping-env.eba-jsbuwrm8.us-east-2.elasticbeanstalk.com/",
            "Access-Control-Allow-Headers": "Content-Type, Authorization, *",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE",
            "Access-Control-Allow-Credentials": true,
        }
        req["headers"] = headers;
    }
    req.url = BASE_URL + req.url;
    try {
        const response = await axios(req);
        return response.data;
    } catch (error) {
        throw error;
    }
};
export default apiRequest;


