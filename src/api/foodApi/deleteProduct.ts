import { FOOD_PRODUCT } from "@/constants"
import { MEAL_TYPES } from "@/enums"
import { isAxiosError } from "@/helpers"
import { IDeleteProductResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const deleteProduct = async (
    allDayMealsId: string,
    productId: string,
    typeOfMeal: MEAL_TYPES,
): Promise<IDeleteProductResponse> => {
    try {
        const { data } = await instance.delete<IDeleteProductResponse>(FOOD_PRODUCT, {
            data: { allDayMealsId, productId, typeOfMeal },
        })

        return data
    } catch (error: unknown) {
        if (isAxiosError<IDeleteProductResponse>(error) && error.response?.data) {
            return error.response.data
        }
        throw error
    }
}
