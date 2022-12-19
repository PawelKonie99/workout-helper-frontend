import { DELETE_TRAINER } from "@/constants"
import { isAxiosError } from "@/helpers"
import { IStandardResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const deleteTrainer = async () => {
    try {
        const { data } = await instance.delete<IStandardResponse>(DELETE_TRAINER)

        return data
    } catch (error: unknown) {
        if (isAxiosError<IStandardResponse>(error) && error.response?.data) {
            return error.response?.data
        }

        throw error
    }
}
