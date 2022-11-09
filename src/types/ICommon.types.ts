import { RESPONSE_CODE } from "@/enums"

export interface IStandardResponse {
    code: RESPONSE_CODE
    message: string
    success: boolean
}
