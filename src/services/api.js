import axios from 'axios'

const api = axios.create({
    baseURL: '//localhost:3333',
})

// export function setAuthorization(id = null) {
//     const AuthorizationCode = id || null

//     if (AuthorizationCode)
//         api.defaults.headers.common.Authorization = AuthorizationCode
// }

export default api
