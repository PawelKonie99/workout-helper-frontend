import { GET_TRAINER_REQUEST } from "@/constants"
import { isAxiosError } from "@/helpers"
import { IGetTrainerRequestResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const getTrainerRequest = async () => {
    try {
        const { data } = await instance.get<IGetTrainerRequestResponse>(GET_TRAINER_REQUEST)

        return data
    } catch (error: unknown) {
        if (isAxiosError<IGetTrainerRequestResponse>(error) && error.response?.data) {
            return error.response?.data
        }

        throw error
    }
}
