import { FOOD_PRODUCT } from "@/constants"
import { IProductPayload, IStandardResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const addNewProduct = async (productPayload: IProductPayload) => {
    const { data } = await instance.post<IStandardResponse>(FOOD_PRODUCT, productPayload)

    return { success: data.success }
}
