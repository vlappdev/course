import axios from 'axios'

class AuthService {
    static register(body){
        return axios.post('/register')
    }
}

export default AuthService