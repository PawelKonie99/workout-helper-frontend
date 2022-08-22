export interface IUserRegisterPayload {
    username: string
    password: string
}

export interface IUserRegisterResponse {
    code: number
    message: string
    success: string
}
