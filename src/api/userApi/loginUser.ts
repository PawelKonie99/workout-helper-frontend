import axios from "axios"
import { ILoginResponse, IUserLoginPayload } from "@/types"
import { USER_LOGIN } from "@/constants"
import { isAxiosError } from "@/helpers"

export const loginUser = async (userPayload: IUserLoginPayload) => {
    const { BASE_URL } = process.env
    try {
        const { data } = await axios.post<ILoginResponse>(`${BASE_URL}/${USER_LOGIN}`, userPayload)

        return data
    } catch (error: unknown) {
        if (isAxiosError<ILoginResponse>(error) && error.response?.data) {
            return error.response?.data
        }

        throw error
    }
}
