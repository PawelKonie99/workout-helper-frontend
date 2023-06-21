import axios from "axios"
import { ILoginResponse, IUserLoginPayload } from "@/types"
import { USER_LOGIN } from "@/constants"
import { isAxiosError } from "@/helpers"

export const loginUser = async (userPayload: IUserLoginPayload) => {
    try {
        const { REACT_APP_API_URI } = process.env

        const { data } = await axios.post<ILoginResponse>(
            `${REACT_APP_API_URI}/${USER_LOGIN}`,
            userPayload,
        )

        return data
    } catch (error: unknown) {
        if (isAxiosError<ILoginResponse>(error) && error.response?.data) {
            return error.response?.data
        }

        throw error
    }
}
