import { apiCaller } from "./MWApiCaller"

import { ApiResponse } from "./ApiResponse"

class MWApiHandler {

    async post(url: string, body: object, headers: boolean = true): Promise<ApiResponse> {
        try {
            let response = await apiCaller.post(url, body, headers)
            return new ApiResponse(false, response['status'], response['data'])
        } catch (error) {
            return new ApiResponse(true, error['response']['status'], error['response']['data']['error'])
        }
    }

    async get(url: string, headers: boolean = true): Promise<ApiResponse> {
        try {
            let response = await apiCaller.get(url, headers);
            return new ApiResponse(false, response['status'], response['data'])
        } catch (error) {
            return new ApiResponse(true, error['response']['status'], error['response']['data']['error'])
        }
    }


}

export const apiHandler = new MWApiHandler();