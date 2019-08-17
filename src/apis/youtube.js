import axios from 'axios';

const KEY = 'AIzaSyBXRQFoyFiw0f3-I7LrSdiLXf235ZbDEIY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
