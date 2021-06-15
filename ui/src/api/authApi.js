import HTTP from "./index";
import axios from "axios";

export const loginUser = (user) =>
    HTTP.post('/login', user)
        .catch(error => console.log(error))

export const registerUser = (user) =>
    HTTP.post('/signup', user)

axios.interceptors.request.use(request => {
    request.headers.authorization = localStorage.getItem('AUTH_TOKEN')
})

export const fetchUserInfo = (email) => HTTP.get('/person?email='+email)
    .catch(error => console.log(error))
