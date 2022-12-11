import { RESPONSE_CODE } from "@/enums"
import { IRoles } from "./ICommon.types"

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
