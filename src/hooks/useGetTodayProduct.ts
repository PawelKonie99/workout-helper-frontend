import { useEffect, useState } from "react"
import { getTodayProduct } from "@/api/foodProductsApi/getTodayProducts"
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
            const products = await getTodayProduct()

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
