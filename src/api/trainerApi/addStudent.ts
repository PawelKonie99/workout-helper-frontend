import { NEW_STUDENT } from "@/constants/apiRoutes"
import { instance } from "../interceptors/sendToken"
import { INewStudentPayload } from "@/types/ITrainerApi.types"
import { IStandardResponse } from "@/types"
import { isAxiosError } from "@/helpers"

export const addStudent = async (newStudentPayload: INewStudentPayload) => {
    try {
        const { data } = await instance.post<IStandardResponse>(NEW_STUDENT, newStudentPayload)

        return data
    } catch (error: unknown) {
        if (isAxiosError<IStandardResponse>(error) && error.response?.data) {
            return error.response.data
        }

        throw error
    }
}
