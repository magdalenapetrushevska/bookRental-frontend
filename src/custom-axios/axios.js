import axios from "axios";

const instance = axios.create({
    baseURL: 'http://book-rental-app.herokuapp.com/api',
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Authorization': localStorage.getItem("JWT")
    }
})

export default instance;
