import { TODAY_FOOD_PRODUCT } from "@/constants"

import { ITodayProductsResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const getTodayMeals = async () => {
    const { data } = await instance.get<ITodayProductsResponse>(TODAY_FOOD_PRODUCT)

    return data
}
