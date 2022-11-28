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

export interface IUserLoginPayload {
    username: string
    password: string
}

export interface ILoginResponse {
    code: RESPONSE_CODE
    message: string
    loggedUser?:
        | {
              username: string
              token: string
              roles: IUserRoles
          }
        | Record<string, never>
}

export interface IUserDataResponse {
    code: RESPONSE_CODE
    success: boolean
    username?: string
    trainerName?: string
}

export interface IUserInfo {
    username?: string
    trainerName?: string
}

export interface IUserRoles {
    adminRole: boolean
    trainerRole: boolean
    userRole: boolean
}
