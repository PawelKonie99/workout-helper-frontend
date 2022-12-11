import { RESPONSE_CODE } from "@/enums"

export interface IStandardResponse {
    code: RESPONSE_CODE
    message: string
    success: boolean
}

export interface ISelectOption {
    value: string
    label: string
}

export interface IRoles {
    adminRole: boolean
    trainerRole: boolean
    userRole: boolean
}
