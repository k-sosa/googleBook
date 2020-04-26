import axios from 'axios';

export default {
    googleBooks: function(title) {
        return axios.get("/api/googlebooks/" + title)
    }
}