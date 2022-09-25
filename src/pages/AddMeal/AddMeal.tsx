import { MEAL_TYPES } from "@/enums"
import { AddProductForm } from "./components"

const AddMeal = () => {
    return (
        <>
            <AddProductForm timeOfTheMeal={MEAL_TYPES.BREAKFAST} title="Śniadanie" />
            <AddProductForm timeOfTheMeal={MEAL_TYPES.BRUNCH} title="Drugie Śniadanie" />
            <AddProductForm timeOfTheMeal={MEAL_TYPES.DINNER} title="Obiad" />
            <AddProductForm timeOfTheMeal={MEAL_TYPES.DESSERT} title="Podwieczorek" />
            <AddProductForm timeOfTheMeal={MEAL_TYPES.SUPPER} title="Kolacja" />
        </>
    )
}

export default AddMeal
