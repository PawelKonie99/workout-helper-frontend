import { FOOD_PRODUCT } from "@/constants"
import { MEAL_TYPES } from "@/enums"
import { IDeleteProductResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const deleteProduct = async (
    allDayMealsId: string,
    productId: string,
    typeOfMeal: MEAL_TYPES,
) => {
    const { data } = await instance.delete<IDeleteProductResponse>(FOOD_PRODUCT, {
        data: { allDayMealsId, productId, typeOfMeal },
    })

    return data
}
