import { GET_SINGLE_USER } from "@/constants"
import { isAxiosError } from "@/helpers"
import { IGetSingleStudentDataResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const getSingleStudentData = async (
    userId: string,
    workoutOffset: number,
    productsOffset: number,
) => {
    try {
        const { data } = await instance.get<IGetSingleStudentDataResponse>(
            `${GET_SINGLE_USER}/${userId}/${workoutOffset}/${productsOffset}`,
        )

        return data
    } catch (error: unknown) {
        if (isAxiosError<IGetSingleStudentDataResponse>(error) && error.response?.data) {
            return error.response?.data
        }

        throw error
    }
}
