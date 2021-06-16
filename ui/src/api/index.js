import axios from "axios"

const HTTP = axios.create({
    baseURL: "/api"
})

HTTP.interceptors.request.use(config => {
    if (localStorage.getItem('AUTH_TOKEN')) {
        config.headers.authorization = "Bearer " + localStorage.getItem('AUTH_TOKEN')
    }
    return config
})

HTTP.interceptors.response.use((response) => {
    return response;
}, function (error) {
    if (error.response.status === 401) {
        window.location.replace("/login")
    }
})


export default HTTP