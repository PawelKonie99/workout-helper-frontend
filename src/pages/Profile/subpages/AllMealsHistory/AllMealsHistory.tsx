import { useState, useEffect } from "react"
import { getMealsHistory } from "@/api"
import { ProductHistory } from "@/components"
import { IMealHistory } from "@/types"

const AllMealsHistory = () => {
    const [mealsHistory, setMealsHistory] = useState<IMealHistory[]>()
    const [offset, setOffset] = useState<number>(1)

    const handleChangeOffset = () => {
        setOffset((prevState) => prevState + 1)
    }

    useEffect(() => {
        const loadMeals = async () => {
            const { mealHistory } = await getMealsHistory(offset)
            mealHistory && setMealsHistory(mealHistory)
        }

        loadMeals()
    }, [offset])

    // TODO mozna dodac loader
    return (
        <>
            <ProductHistory productHistory={mealsHistory} handleChangeOffset={handleChangeOffset} />
        </>
    )
}

export default AllMealsHistory
