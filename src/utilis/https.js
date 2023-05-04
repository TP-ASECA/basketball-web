import axios from 'axios';
const httpClient = axios.create();
const _request = async (url, method, data, config = {}) => {
    return httpClient({
        url: "http://localhost:8080/" + url,
        method,
        data,
        ...config.headers, ...config.options
    }).then((res) => {
        if (res.status === 200 || res.status === 201 || res.status === 202 || res.status === 204) return res.data;
        else throw (res.data);
    }).catch(errorResponse => {
        throw (errorResponse.response || {status: 500})
    })
}
export const post = (url, body, config={})=> _request(url, "POST", body, config)
export const get = (url,body, config={}) => _request(url,"GET",{},config)