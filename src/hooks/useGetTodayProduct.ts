import { useEffect, useState } from "react"
import { getTodayMeals } from "@/api/foodProductsApi/getTodayMeals"
import { ITodayProducts, IProductsSummary } from "@/types"

export const useGetTodayProduct = () => {
    const [newlyAddedProductName, setNewlyAddedProductName] = useState("")
    const [removedProductId, setRemovedProductId] = useState("")

    const [todayProductsData, setTodayProductsData] = useState<{
        todayProducts?: ITodayProducts
        todaySummary?: IProductsSummary
        allDayMealsId?: string
    }>()

    useEffect(() => {
        const fetchTodayProduct = async () => {
            const products = await getTodayMeals()

            setTodayProductsData({
                todayProducts: products.todayUserProducts,
                todaySummary: products.dailySummary,
                allDayMealsId: products?.todayUserProducts?.id,
            })
        }

        fetchTodayProduct()
    }, [newlyAddedProductName, removedProductId])

    return { todayProductsData, setRemovedProductId, setNewlyAddedProductName }
}
