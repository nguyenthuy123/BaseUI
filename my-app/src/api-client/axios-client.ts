import axios, { AxiosResponse } from 'axios'
import { BASE_URL } from '../utils/constants';

export const axiosClient = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

// export const axiosAuth = axios.create({
// 	baseURL: URL_LOGIN,
// 	headers: {
// 		'Content-Type': 'application/x-www-form-urlencoded',
// 	},
// })

// export const httpInstance = axios.create({ baseURL,headers:{}});

export const sendGet = async (url:string, options = {}) => {
	const response = await axiosClient.get(url, options);
	return response;
}

export const sendPost = async (url:string, body:any, options = {}) => {
	const response = await axiosClient.post(url, body, options);
	return response;
}

// export const authPost = async (url:string, body:any, options = {}) => {
// 	const response = await axiosAuth.post(url, body, options);
// 	return response;
// }

// Add a response interceptor
axiosClient.interceptors.response.use(
	function (response:AxiosResponse<any>) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response.data
	},
	function (error:any) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error)
	}
)

// export default axiosClient