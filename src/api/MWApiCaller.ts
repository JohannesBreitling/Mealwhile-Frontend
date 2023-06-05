import axios from 'axios'

class MWApiCaller {

    BASE_URL = "http://localhost:8080/api/v1/"

    async post(url: string, body: object) {
        return await axios.post(this.BASE_URL + url, body)
    }

    get(url: string) {
        axios
        .get(url)
        .then((response) => {
            return response
        }).catch((error) => {
            throw error
        })
    }

}

export const apiCaller = new MWApiCaller();