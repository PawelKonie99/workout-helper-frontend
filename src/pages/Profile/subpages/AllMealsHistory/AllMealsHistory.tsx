import { useState, useEffect } from "react"
import { getMealsHistory } from "@/api"
import { ProductHistory } from "@/components"
import { IMealHistory } from "@/types"

const AllMealsHistory = () => {
    const [mealsHistory, setMealsHistory] = useState<IMealHistory[]>()

    useEffect(() => {
        const loadMeals = async () => {
            const { mealHistory } = await getMealsHistory()
            mealHistory && setMealsHistory(mealHistory)
        }

        loadMeals()
    }, [])

    // TODO mozna dodac loader
    return (
        <>
            <ProductHistory productHistory={mealsHistory} />
        </>
    )
}

export default AllMealsHistory
