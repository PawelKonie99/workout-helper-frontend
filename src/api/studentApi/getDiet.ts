import { GET_DIET } from "@/constants"
import { isAxiosError } from "@/helpers"
import { IGetStudenDietResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const getDiet = async () => {
    try {
        const { data } = await instance.get<IGetStudenDietResponse>(GET_DIET)

        return data
    } catch (error: unknown) {
        if (isAxiosError<IGetStudenDietResponse>(error) && error.response?.data) {
            return error.response?.data
        }

        throw error
    }
}
