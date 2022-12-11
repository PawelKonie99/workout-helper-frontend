import { RESPONSE_CODE } from "@/enums"
import { IRoles } from "./ICommon.types"

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
              roles: IRoles
          }
        | Record<string, never>
}

export interface IUserDataResponse {
    code: RESPONSE_CODE
    success: boolean
    username?: string
    trainerName?: string
    trainerId?: string
}

export interface IUserInfo {
    username?: string
    trainerName?: string
}
