import { GET_USER_INFO } from "@/constants"
import { IUserDataResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const getUserInfo = async () => {
    const { data } = await instance.get<IUserDataResponse>(GET_USER_INFO)

    return data
}
