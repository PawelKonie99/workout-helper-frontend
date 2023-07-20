import useSWR, { Fetcher } from "swr"
import { getTodayMeals } from "@/api/foodApi/getTodayMeals"
import { ITodayProductsResponse } from "@/types"
import { TODAY_FOOD_PRODUCT } from "@/constants"

const fetcher: Fetcher<ITodayProductsResponse> = () => getTodayMeals()

export const useGetTodayProduct = () => {
    const { data, error } = useSWR(TODAY_FOOD_PRODUCT, fetcher)

    return { data, error }
}
