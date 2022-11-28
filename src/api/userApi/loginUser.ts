import axios from "axios"
import { ILoginResponse, IUserLoginPayload } from "@/types"
import { USER_LOGIN } from "@/constants"

export const loginUser = async (userPayload: IUserLoginPayload) => {
    const { data } = await axios.post<ILoginResponse>(USER_LOGIN, userPayload)

    return data
}
