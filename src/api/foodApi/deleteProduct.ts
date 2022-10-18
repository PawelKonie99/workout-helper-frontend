import { FOOD_PRODUCT } from "@/constants"
import { IDeleteProductResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const deleteProduct = async (allDayMealsId: string, productId: string) => {
    const { data } = await instance.delete<IDeleteProductResponse>(
        `${FOOD_PRODUCT}/${allDayMealsId}/${productId}`,
    )

    return data
}
