import { FOOD_PRODUCT_HISTORY_BY_DATE } from "@/constants"
import { IMealHistoryResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const getMealsHisotryByDate = async (date: string) => {
    const { data } = await instance.get<IMealHistoryResponse>(
        `${FOOD_PRODUCT_HISTORY_BY_DATE}/${date}`,
    )

    return data
}
