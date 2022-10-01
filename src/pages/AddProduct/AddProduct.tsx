import { useEffect, useState } from "react"
import { getTodayProduct } from "@/api/foodProductsApi/getTodayProducts"
import { MEAL_TYPES } from "@/enums"
import { IProductsSummary, ITodayProducts } from "@/types"
import { AddProductForm } from "./components"

const AddProduct = () => {
    const [todayProducts, setTodayProducts] = useState<ITodayProducts>()
    const [todaySummary, setTodaySummary] = useState<IProductsSummary>()
    const [newlyAddedProductName, setNewlyAddedProductName] = useState("")

    useEffect(() => {
        const fetchTodayProduct = async () => {
            const products = await getTodayProduct()
            setTodayProducts(products.todayUserProducts)
            setTodaySummary(products.dailySummary)
        }

        fetchTodayProduct()
    }, [newlyAddedProductName])

    const { allDayMeals } = todayProducts ?? {}

    const { totalKcal, totalProteins, totalFat, totalCarbons } = todaySummary ?? {}

    const handleSetNewlyAddedProductName = (newProductName: string) => {
        setNewlyAddedProductName(newProductName)
    }

    return (
        <div className="bg-offWhite flex justify-center">
            <div>
                <AddProductForm
                    timeOfTheMeal={MEAL_TYPES.BREAKFAST}
                    title="Śniadanie"
                    alreadyAddedProducts={allDayMeals?.breakfast}
                    handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                />
                <AddProductForm
                    timeOfTheMeal={MEAL_TYPES.BRUNCH}
                    title="Drugie Śniadanie"
                    alreadyAddedProducts={allDayMeals?.brunch}
                    handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                />
                <AddProductForm
                    timeOfTheMeal={MEAL_TYPES.DINNER}
                    title="Obiad"
                    alreadyAddedProducts={allDayMeals?.dinner}
                    handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                />
                <AddProductForm
                    timeOfTheMeal={MEAL_TYPES.DESSERT}
                    title="Podwieczorek"
                    alreadyAddedProducts={allDayMeals?.dessert}
                    handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                />
                <AddProductForm
                    timeOfTheMeal={MEAL_TYPES.SUPPER}
                    title="Kolacja"
                    alreadyAddedProducts={allDayMeals?.supper}
                    handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                />
            </div>
            <div className="ml-16">
                <h3 className="text-xl mb-4">Podsumowanie dzisiejszego dnia:</h3>
                <p>Kcal: {totalKcal?.toFixed(2)}</p>
                <p>Białko: {totalProteins?.toFixed(2)}</p>
                <p>Tłuszcz: {totalFat?.toFixed(2)}</p>
                <p>Węglowodany: {totalCarbons?.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default AddProduct
