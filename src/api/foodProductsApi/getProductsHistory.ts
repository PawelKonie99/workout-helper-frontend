import { FOOD_PRODUCT_HISTORY } from "@/constants"
import { IMealHistoryResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const getProductsHistory = async () => {
    const { data } = await instance.get<IMealHistoryResponse>(FOOD_PRODUCT_HISTORY)

    return data
}
