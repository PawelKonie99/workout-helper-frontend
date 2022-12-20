import { TODAY_FOOD_PRODUCT } from "@/constants"
import { isAxiosError } from "@/helpers"
import { ITodayProductsResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const getTodayMeals = async () => {
    try {
        const { data } = await instance.get<ITodayProductsResponse>(TODAY_FOOD_PRODUCT)

        return data
    } catch (error: unknown) {
        if (isAxiosError<ITodayProductsResponse>(error) && error.response?.data) {
            return error.response?.data
        }

        throw error
    }
}
