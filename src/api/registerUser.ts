import axios from "axios"
import { IUserRegisterPayload, IUserRegisterResponse } from "@/types"
import { USER_REGISTER } from "@/constants"

export const registerUser = async (userPayload: IUserRegisterPayload) => {
    const response = await axios.post<IUserRegisterResponse>(USER_REGISTER, userPayload)

    return response.data
}
