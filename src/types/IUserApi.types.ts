import { RESPONSE_CODE } from "@/enums"

export interface ILoginFormSchema {
    username: string
    password: string
}

export interface IRegisterFormSchema {
    username: string
    password: string
    confirmPassword: string
    isTrainer?: boolean
}

export interface IUserRegisterPayload {
    username: string
    password: string
    isTrainer: boolean
}

export interface IUserRegisterResponse {
    code: RESPONSE_CODE
    message: string
    success: string
}

export interface IUserLoginPayload {
    username: string
    password: string
}

export interface IUserLoginResponse {
    code: RESPONSE_CODE
    message: string
    loggedUser:
        | {
              username: string
              token: string
              isTrainer: boolean
          }
        | Record<string, never>
}
