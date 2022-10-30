import { IMealHistory } from "@/types"
import { MealSummary } from "../MealSummary/MealSummary"

interface Props {
    singleMealDay: IMealHistory
}

export const SingleMealDayHistory = ({ singleMealDay }: Props) => {
    const { breakfast, brunch, dailySummary, dessert, dinner, mealDate, supper } = singleMealDay
    const { totalKcal, totalProteins, totalCarbons, totalFat } = dailySummary

    return (
        <div className="mb-4">
            <span>{mealDate}</span>

            <div className="flex mt-2">
                <MealSummary timeOfMeal={breakfast} title="Śniadanie:" />
                <MealSummary timeOfMeal={brunch} title="Drugie śniadanie:" />
                <MealSummary timeOfMeal={dinner} title="Obiad:" />
                <MealSummary timeOfMeal={dessert} title="Deser:" />
                <MealSummary timeOfMeal={supper} title="Kolacja:" />
                <div className="flex flex-col">
                    <span>W sumie:</span>
                    <span>Kalorie: {totalKcal?.toFixed(2)}</span>
                    <span>Białko: {totalProteins?.toFixed(2)}</span>
                    <span>Węglowodany: {totalCarbons?.toFixed(2)}</span>
                    <span>Tłuszcze: {totalFat?.toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}
