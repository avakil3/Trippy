import axios from 'axios';

export const receivePins = () => {
    return axios.get('/api/pins/');
};