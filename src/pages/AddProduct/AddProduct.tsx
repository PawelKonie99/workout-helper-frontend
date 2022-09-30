import { useEffect, useState } from "react"
import { getTodayProduct } from "@/api/foodProductsApi/getTodayProducts"
import { MEAL_TYPES } from "@/enums"
import { ITodayProducts } from "@/types"
import { AddProductForm } from "./components"

const AddProduct = () => {
    const [todayProducts, setTodayProducts] = useState<ITodayProducts>()
    const [newlyAddedProductName, setNewlyAddedProductName] = useState("")

    useEffect(() => {
        const fetchTodayProduct = async () => {
            const products = await getTodayProduct()
            setTodayProducts(products.todayUserProducts)
        }

        fetchTodayProduct()
    }, [newlyAddedProductName])

    const { allDayMeals } = todayProducts ?? {}

    const handleSetNewlyAddedProductName = (newProductName: string) => {
        setNewlyAddedProductName(newProductName)
    }

    return (
        <div className="bg-offWhite">
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
    )
}

export default AddProduct
