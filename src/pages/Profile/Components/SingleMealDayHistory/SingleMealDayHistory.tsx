import { formatDate } from "@/helpers"
import { IMealHistory } from "@/types"
import { MealSummary } from "../MealSummary/MealSummary"

interface Props {
    singleMealDay: IMealHistory
}

export const SingleMealDayHistory = ({ singleMealDay }: Props) => {
    const { breakfast, brunch, dailySummary, dessert, dinner, mealDate, supper } = singleMealDay
    const formatedDate = formatDate(mealDate)

    return (
        <div className="mb-4">
            <span>{formatedDate}</span>

            <div className="flex">
                <MealSummary timeOfMeal={breakfast} title="Śniadanie:" />
                <MealSummary timeOfMeal={brunch} title="Drugie śniadanie:" />
                <MealSummary timeOfMeal={dinner} title="Obiad:" />
                <MealSummary timeOfMeal={dessert} title="Deser:" />
                <MealSummary timeOfMeal={supper} title="Kolacja:" />
                <div className="flex flex-col">
                    <span>W sumie:</span>
                    <span>Kalorie: {dailySummary.totalKcal}</span>
                    <span>Białko: {dailySummary.totalProteins}</span>
                    <span>Węglowodany: {dailySummary.totalCarbons}</span>
                    <span>Tłuszcze: {dailySummary.totalFat}</span>
                </div>
            </div>
        </div>
    )
}
