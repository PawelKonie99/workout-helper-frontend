import { CHANGE_PASSWORD } from "@/constants"
import { isAxiosError } from "@/helpers"
import { IStandardResponse, IUserDataResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const changePassword = async (newPassword: string) => {
    try {
        const { data } = await instance.post<IStandardResponse>(CHANGE_PASSWORD, { newPassword })

        return data
    } catch (error: unknown) {
        if (isAxiosError<IUserDataResponse>(error) && error.response?.data) {
            return error.response?.data
        }

        throw error
    }
}
