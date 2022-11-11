import axios from 'axios';

const KEY = 'AIzaSyC58AqifBKaHrX7dbYKxa4XGX3A4HZyaH0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
});
