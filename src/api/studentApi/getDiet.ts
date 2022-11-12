import { GET_DIET } from "@/constants"
import { IGetStudenDietResponse, ISelectOption } from "@/types"
import { instance } from "../interceptors/sendToken"

export const getDiet = async (choosenUser: ISelectOption) => {
    const { data } = await instance.get<IGetStudenDietResponse>(`${GET_DIET}/${choosenUser.value}`)

    return data
}
