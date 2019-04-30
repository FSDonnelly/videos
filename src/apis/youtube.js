import axios from 'axios';

const KEY = 'AIzaSyDwG5k-LomLqughGkUgLCu6Yy6xSX9gEhM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});