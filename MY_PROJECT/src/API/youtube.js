import axios from 'axios';
const KEY = 'AIzaSyAApb0Qc5w363hSFIe_V_Bdatm7DmfYJpI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 50,
        key: KEY
    }
})