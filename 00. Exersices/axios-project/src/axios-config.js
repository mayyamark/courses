import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

instance.interceptors.response.use(res => {
    res.headers.myHeader = 'Mayya Header'
    return res;
    },
);

export default instance;