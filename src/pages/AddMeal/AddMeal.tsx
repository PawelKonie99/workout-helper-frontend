import { MEAL_TYPES } from "@/enums"
import { AddProductForm } from "./components"

const AddMeal = () => {
    return <AddProductForm timeOfTheMeal={MEAL_TYPES.BREAKFAST} title="Śniadanie" />
}

export default AddMeal
