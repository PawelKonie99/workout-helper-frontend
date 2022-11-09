import axios from "axios"
import { IStandardResponse, IUserRegisterPayload } from "@/types"
import { USER_REGISTER } from "@/constants"

export const registerUser = async (userPayload: IUserRegisterPayload) => {
    const { data } = await axios.post<IStandardResponse>(USER_REGISTER, userPayload)

    return data
}
