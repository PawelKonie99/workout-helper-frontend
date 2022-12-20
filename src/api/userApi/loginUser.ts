import axios from "axios"
import { ILoginResponse, IUserLoginPayload } from "@/types"
import { USER_LOGIN } from "@/constants"
import { isAxiosError } from "@/helpers"

export const loginUser = async (userPayload: IUserLoginPayload) => {
    try {
        const { data } = await axios.post<ILoginResponse>(USER_LOGIN, userPayload)

        return data
    } catch (error: unknown) {
        if (isAxiosError<ILoginResponse>(error) && error.response?.data) {
            return error.response?.data
        }

        throw error
    }
}
