import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID l9RrydpfGVvkosbzJB_0OoGtfwUnOFtHtFMvbU_bOOI'
    }
});