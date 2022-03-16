import axios from 'axios';

export const receiveLikes = () => {
    return axios.get('/api/likes/');
};