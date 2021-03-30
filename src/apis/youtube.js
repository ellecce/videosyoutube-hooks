import axios from "axios";

const KEY = "AIzaSyCV_DXGPJriM3YFUQbReM_75E9zP2rlivw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
    // q: "cats",
  },
});
