import { GET_SINGLE_USER_DATA } from "@/constants"
import { IGetSingleUserResponse } from "@/types/IAdminApi.types"
import { instance } from "../interceptors/sendToken"

export const getSingleUserData = async (userId: string) => {
    const { data } = await instance.get<IGetSingleUserResponse>(`${GET_SINGLE_USER_DATA}/${userId}`)

    return data
}
