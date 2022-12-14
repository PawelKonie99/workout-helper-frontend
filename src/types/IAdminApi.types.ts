import { RESPONSE_CODE } from "@/enums"
import { IRole, IRoles } from "./ICommon.types"

export interface IPaginationValuesPayload {
    offset: number
    limit: number
}

export interface IGetAllUsersResponse {
    code: RESPONSE_CODE
    success: boolean
    usersData?: IUserData[] | []
}

export interface IUserData {
    roles: IRoles
    username: string
    id: string
}

export interface IChangeRolePayload {
    userId: string
    roleToChange: IRole
    isRoleActive: boolean
}

export interface IGetSingleUserResponse {
    code: RESPONSE_CODE
    success: boolean
    parsedUserData?: {
        roles: IRoles
        username: string
        id: string
    }
}

export interface IChangeUserPasswordSchema {
    password: string
}
