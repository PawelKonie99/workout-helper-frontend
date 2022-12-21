import { GET_SINGLE_USER_DATA_BY_USERNAME } from "@/constants"
import { isAxiosError } from "@/helpers"
import { IGetSingleUserResponse } from "@/types/IAdminApi.types"
import { instance } from "../interceptors/sendToken"

export const getUserByUsername = async (username: string) => {
    try {
        const { data } = await instance.get<IGetSingleUserResponse>(
            `${GET_SINGLE_USER_DATA_BY_USERNAME}/${username}`,
        )

        return data
    } catch (error: unknown) {
        if (isAxiosError<IGetSingleUserResponse>(error) && error.response?.data) {
            return error.response?.data
        }
        throw error
    }
}
