export class ApiResponse {
    isError: boolean
    code: number
    data: object

    constructor(isError: boolean, code: number, data: object) {
        this.isError = isError
        this.code = code
        this.data = data
    }
}
