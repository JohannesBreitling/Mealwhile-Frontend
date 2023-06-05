import { apiHandler } from "./MWApiHandler"

class MWAuthHandler {
    AUTH_URL = "auth/authenticate"
    REGISTER_URL = "auth/register"

    async authenticate(username: string, password: string) {
        let params = {
            username: username,
            password: password
        }

        return await apiHandler.post(this.AUTH_URL, params);
    }

    register(request: UserRequest) {

    }
}

export const authHandler = new MWAuthHandler();