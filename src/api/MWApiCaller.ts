import { tokenService } from '@/token/TokenService'
import axios from 'axios'

const API_VERSION = 1
const BASE_URL = "http://localhost:8080/api/v" + API_VERSION + "/"

let instance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
})

let authInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
})

class MWApiCaller {

    async post(url: string, body: object, headers: boolean) {
        if (headers) {
            return await instance.post(url, body)
        }

        return authInstance.post(url, body)
    }

    async get(url: string, headers: boolean) {
        if (headers) {
            return await instance.get(url)
        }

        return await authInstance.get(url)
    }

}

export const apiCaller = new MWApiCaller();