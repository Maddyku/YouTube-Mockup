//Import Axios Library to handle data fetching from YouTube API
import axios from 'axios';

//YouTube Data API Key
const KEY = 'AIzaSyCQSryb0cFigg0N5f5yRcZxTiw5po6EnJY';

//Make instance of axios preconfigured  with baseURL and parameters
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', //Summary of each search result
        maxResults: 10, //Max Results of 5 Vidoes per search
        key: KEY //reference to YouTube Data API Key
    }
})