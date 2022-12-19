import { GET_STUDENT_DIET } from "@/constants"
import { isAxiosError } from "@/helpers"
import { IGetStudenDietResponse, ISelectOption } from "@/types"
import { instance } from "../interceptors/sendToken"

export const getStudentDiet = async (choosenUser: ISelectOption) => {
    try {
        const { data } = await instance.get<IGetStudenDietResponse>(
            `${GET_STUDENT_DIET}/${choosenUser.value}`,
        )

        return data
    } catch (error: unknown) {
        if (isAxiosError<IGetStudenDietResponse>(error) && error.response?.data) {
            return error.response?.data
        }

        throw error
    }
}
