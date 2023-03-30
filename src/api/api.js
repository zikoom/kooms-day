/**
 * api 서버 요청용 axios instance return
 */

import axios from "axios";


/**
 * baseURL: process.env.REACT_APP_SERVER_PATH 인 axios instance
 */
const _request = axios.create({
  baseURL: process.env.REACT_APP_SERVER_PATH
})

_request.defaults.timeout = 2000;

_request.interceptors.response.use((res) => {
  console.log('res: ', res);
  return res;
}, (error) => {
  return Promise.reject(error);
})



export default _request;