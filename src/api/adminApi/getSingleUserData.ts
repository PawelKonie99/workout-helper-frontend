import { GET_SINGLE_USER_DATA } from "@/constants"
import { isAxiosError } from "@/helpers"
import { IGetSingleUserResponse } from "@/types/IAdminApi.types"
import { instance } from "../interceptors/sendToken"

export const getSingleUserData = async (userId: string) => {
    try {
        const { data } = await instance.get<IGetSingleUserResponse>(
            `${GET_SINGLE_USER_DATA}/${userId}`,
        )

        return data
    } catch (error: unknown) {
        if (isAxiosError<IGetSingleUserResponse>(error) && error.response?.data) {
            return error.response?.data
        }
        throw error
    }
}
