import { ALL_STUDENTS } from "@/constants"
import { isAxiosError } from "@/helpers"
import { IAllStudentsResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const getAllStudents = async () => {
    try {
        const { data } = await instance.get<IAllStudentsResponse>(ALL_STUDENTS)

        return data
    } catch (error: unknown) {
        if (isAxiosError<IAllStudentsResponse>(error) && error.response?.data) {
            return error.response?.data
        }

        throw error
    }
}
