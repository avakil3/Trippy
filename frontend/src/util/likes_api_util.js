import axios from 'axios';

export const receiveLikes = (user) => {
    return axios.get('/api/likes/', { params: user });
};
