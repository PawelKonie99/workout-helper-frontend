import { RESPONSE_CODE } from "@/enums"

export interface IAddStudentSchema {
    studentName: string
}

export interface INewStudentPayload {
    studentName: string
}
export interface INewStudentResponse {
    code: RESPONSE_CODE
    message: string
    success: string
}
