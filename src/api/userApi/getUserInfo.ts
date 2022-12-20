import { GET_USER_INFO } from "@/constants"
import { isAxiosError } from "@/helpers"
import { IUserDataResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const getUserInfo = async () => {
    try {
        const { data } = await instance.get<IUserDataResponse>(GET_USER_INFO)

        return data
    } catch (error: unknown) {
        if (isAxiosError<IUserDataResponse>(error) && error.response?.data) {
            return error.response?.data
        }

        throw error
    }
}
