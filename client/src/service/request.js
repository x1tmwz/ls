import axios from "axios";
import errorHandlerMessages from '../utils/errorHandlerMessages'

const request = async (path, method = "get", token, headers, data = {}, params) => {
    if (token) {
        headers.authorization = "Bearer " + token;
    }
   
   

    const result = await axios({
        url: path,
        method,
        headers,
        data,
        params
    })
    if (result.data.status === "error") {
        throw new Error(errorHandlerMessages(result.data.message))
    }
    return result;


}

export default request;
