import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_APP_BASE_URL}/api`
})

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.get('ACCESS TOKEN')
    config.headers.Authorization = `Bearer ${token}`
    return config;
})

axiosClient.interceptors.response.use((response) => {

}, () => {

})

export default axiosClient;