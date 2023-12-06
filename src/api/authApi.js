import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyAS-lc6FN4OxVTR3_GpKosqjRjQ3Ve9PC4'
    }
})

// console.log( process.env.NODE_ENV )

export default authApi