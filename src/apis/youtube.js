import axios from 'axios';

const KEY = 'AIzaSyDQnefx1p6R2LPgxKuiRI15lAjMQHl-Jm0'

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});