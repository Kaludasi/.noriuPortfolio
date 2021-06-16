import HTTP from "./index";

export const loginUser = (user) =>
    HTTP.post('/login', user)
        .catch(error => console.log(error))

export const registerUser = (user) =>
    HTTP.post('/signup', user)

export const fetchUserInfo = (email) => HTTP.get('/person?email=' + email)
    .catch(error => console.log(error))
