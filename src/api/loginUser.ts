import axios from "axios"
import { IUserLoginPayload } from "@/types"
import { IUserLoginResponse } from "@/types/IUserApi.types"
import { USER_LOGIN } from "@/constants"

export const loginUser = async (userPayload: IUserLoginPayload) => {
    const { data } = await axios.post<IUserLoginResponse>(USER_LOGIN, userPayload)

    return data
}
