import { FOOD_PRODUCT_HISTORY } from "@/constants"
import { isAxiosError } from "@/helpers"
import { IMealHistoryResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const getMealsHistory = async () => {
    try {
        const { data } = await instance.get<IMealHistoryResponse>(FOOD_PRODUCT_HISTORY)

        return data
    } catch (error: unknown) {
        if (isAxiosError<IMealHistoryResponse>(error) && error.response?.data) {
            return error.response?.data
        }

        throw error
    }
}
