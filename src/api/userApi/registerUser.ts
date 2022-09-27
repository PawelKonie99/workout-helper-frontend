import axios from "axios"
import { IUserRegisterPayload, IUserRegisterResponse } from "@/types"
import { USER_REGISTER } from "@/constants"

export const registerUser = async (userPayload: IUserRegisterPayload) => {
    const { data } = await axios.post<IUserRegisterResponse>(USER_REGISTER, userPayload)

    return data
}
