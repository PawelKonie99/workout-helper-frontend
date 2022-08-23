import axios from "axios"
import { IUserLoginPayload } from "@/types"
import { USER_LOGIN } from "@/constants/apiRoutes"
import { IUserLoginResponse } from "@/types/IUserApi.types"

export const LoginUser = async (userPayload: IUserLoginPayload) => {
    const response = await axios.post<IUserLoginResponse>(USER_LOGIN, userPayload)

    return response.data
}
