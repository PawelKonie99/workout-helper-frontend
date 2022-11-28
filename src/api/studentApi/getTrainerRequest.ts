import { GET_DIET } from "@/constants"
import { IGetStudenDietResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const getDiet = async () => {
    const { data } = await instance.get<any>(GET_DIET)

    return data
}
