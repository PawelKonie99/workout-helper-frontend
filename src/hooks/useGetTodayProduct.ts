import { useEffect, useState } from "react"
import { getTodayMeals } from "@/api/foodApi/getTodayMeals"
import { ITodayProducts, IProductsSummary } from "@/types"

export const useGetTodayProduct = () => {
    const [newlyAddedProductName, setNewlyAddedProductName] = useState("")
    const [removedProductId, setRemovedProductId] = useState("")
    const [statusCode, setStatusCode] = useState(0)
    const [todayProductsData, setTodayProductsData] = useState<{
        todayProducts?: ITodayProducts
        todaySummary?: IProductsSummary
        allDayMealsId?: string
    }>()

    useEffect(() => {
        const fetchTodayProduct = async () => {
            const { todayUserProducts, dailySummary, code } = await getTodayMeals()

            setStatusCode(code)

            if (todayUserProducts && dailySummary) {
                setTodayProductsData({
                    todayProducts: todayUserProducts,
                    todaySummary: dailySummary,
                    allDayMealsId: todayUserProducts?.id,
                })
            }
        }

        fetchTodayProduct()
    }, [newlyAddedProductName, removedProductId])

    return { todayProductsData, setRemovedProductId, setNewlyAddedProductName, statusCode }
}
