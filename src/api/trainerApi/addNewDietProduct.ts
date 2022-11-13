import { ADD_NEW_DIET_PRODUCT } from "@/constants/apiRoutes"
import { IAddNewDietPayload, IStandardResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const addNewDietProduct = async (newDietProduct: IAddNewDietPayload) => {
    const { data } = await instance.post<IStandardResponse>(ADD_NEW_DIET_PRODUCT, newDietProduct)

    return data
}
