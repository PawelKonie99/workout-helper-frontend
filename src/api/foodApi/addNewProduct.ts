import { FOOD_PRODUCT } from "@/constants"
import { IProductPayload, ISaveProductResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const addNewProduct = async (productPayload: IProductPayload) => {
    const { data } = await instance.post<ISaveProductResponse>(FOOD_PRODUCT, productPayload)

    return data
}
