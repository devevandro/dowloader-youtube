import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:6500/',
    validateStatus: (status) => status >= 200 && status < 300,
});

export default api;
