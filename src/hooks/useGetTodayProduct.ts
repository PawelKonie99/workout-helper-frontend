import { useEffect, useState } from "react"
import { getTodayMeals } from "@/api/foodApi/getTodayMeals"
import { IMealMacros, ITodayProducts } from "@/types"
import { isTodayProductsTypeGuard, isProductsSummaryTypeGuard } from "@/helpers"

export const useGetTodayProduct = () => {
    const [newlyAddedProductName, setNewlyAddedProductName] = useState("")
    const [removedProductId, setRemovedProductId] = useState("")

    const [todayProductsData, setTodayProductsData] = useState<{
        todayProducts: ITodayProducts | Record<string, never>
        todaySummary?: IMealMacros
        allDayMealsId?: string
    }>({ todayProducts: {} })

    useEffect(() => {
        const fetchTodayProduct = async () => {
            const { todayUserProducts, dailySummary } = await getTodayMeals()

            if (
                isTodayProductsTypeGuard(todayUserProducts) &&
                isProductsSummaryTypeGuard(dailySummary)
            ) {
                setTodayProductsData({
                    todayProducts: todayUserProducts,
                    todaySummary: dailySummary,
                    allDayMealsId: todayUserProducts?.id,
                })
            }
        }

        fetchTodayProduct()
    }, [newlyAddedProductName, removedProductId])

    return { todayProductsData, setRemovedProductId, setNewlyAddedProductName }
}
