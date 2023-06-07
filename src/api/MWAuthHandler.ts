import { apiHandler } from "./MWApiHandler"
import { ApiResponse } from "./ApiResponse"

class MWAuthHandler {
    BASE_URL = "auth/"
    AUTH_URL = this.BASE_URL + "authenticate"
    REGISTER_URL = this.BASE_URL + "register"
    CHECK_USERNAME_URL = this.BASE_URL + "checkUsername"


    async authenticate(username: string, password: string): Promise<ApiResponse> {
        let params = {
            username: username,
            password: password
        }

        return await apiHandler.post(this.AUTH_URL, params, false);
    }

    async register(request: UserRequest): Promise<ApiResponse> {
        throw Error("Not implemented")
    }

    async checkUsername(username: string): Promise<ApiResponse> {
        return await apiHandler.get(this.CHECK_USERNAME_URL + "/" + username);
    }


}

export const authHandler = new MWAuthHandler();