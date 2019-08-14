import {sendGet, sendPost} from './axios.util'
import {API} from './api.config'

// export const login = () => sendPost({
//     url: API.APP_LOGIN,
//     params: {user_tel: '18995848321', password: '111111', client_type: 'H5'}
// })

export const testGet=()=>sendGet({
    url:API.TEST_GET
})