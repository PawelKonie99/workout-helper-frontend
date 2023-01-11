import { toast } from "react-toastify"
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

            if (mealHistory?.length === mealsHistory?.length) {
                toast.error("Nie ma więcej dostępnych danych")
            }
        }

        loadMeals()
    }, [offset])

    // TODO mozna dodac loader
    return (
        <div className="mb-10">
            <ProductHistory productHistory={mealsHistory} handleChangeOffset={handleChangeOffset} />
        </div>
    )
}

export default AllMealsHistory
