import { MacrosSummary } from "@/components"
import { IMealHistory } from "@/types"
import { MealSummary } from "../../pages/Profile/components/MealSummary/MealSummary"

interface Props {
    singleMealDay: IMealHistory
}

export const SingleMealDayHistory = ({ singleMealDay }: Props) => {
    const { breakfast, brunch, dailySummary, dessert, dinner, mealDate, supper } = singleMealDay

    return (
        <div className="mb-6">
            <span className="text-primaryBlue text-lg">{mealDate}</span>
            <div className="flex mt-1">
                <MealSummary timeOfMeal={breakfast} title="Śniadanie:" />
                <MealSummary timeOfMeal={brunch} title="Drugie śniadanie:" />
                <MealSummary timeOfMeal={dinner} title="Obiad:" />
                <MealSummary timeOfMeal={dessert} title="Deser:" />
                <MealSummary timeOfMeal={supper} title="Kolacja:" />
                <MacrosSummary title="W sumie:" dailySummary={dailySummary} />
            </div>
        </div>
    )
}
