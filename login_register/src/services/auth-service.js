import axios from 'axios'

class AuthService {
    static register(body){
        return axios.post('/register', body)
    }

    static login(body){
        return axios.post('/login', body)
    }

    static storeUserData(user_data){
        localStorage.setItem('app_user_data', JSON.stringify(user_data))
    }
}

export default AuthService