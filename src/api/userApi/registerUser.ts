import axios from "axios"
import { IStandardResponse, IUserRegisterPayload } from "@/types"
import { USER_REGISTER } from "@/constants"
import { isAxiosError } from "@/helpers"

export const registerUser = async (userPayload: IUserRegisterPayload) => {
    try {
        const { REACT_APP_API_URI } = process.env

        const { data } = await axios.post<IStandardResponse>(
            `${REACT_APP_API_URI}/${USER_REGISTER}`,
            userPayload,
        )

        return data
    } catch (error: unknown) {
        if (isAxiosError<IStandardResponse>(error) && error.response?.data) {
            return error.response?.data
        }

        throw error
    }
}
