import { DELETE_USER } from "@/constants"
import { isAxiosError } from "@/helpers"
import { IStandardResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const deleteUser = async (userIdToRemove: string) => {
    try {
        const { data } = await instance.delete<IStandardResponse>(DELETE_USER, {
            data: { userIdToRemove },
        })

        return data
    } catch (error: unknown) {
        if (isAxiosError<IStandardResponse>(error) && error.response?.data) {
            return error.response?.data
        }
        throw error
    }
}
