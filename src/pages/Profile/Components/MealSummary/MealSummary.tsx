import { IMealMacros } from "@/types"

interface IProps {
    title: string
    timeOfMeal: IMealMacros
}

export const MealSummary = ({ title, timeOfMeal }: IProps) => {
    const { carbons, fat, kcal, proteins } = timeOfMeal

    return (
        <div className="flex flex-col">
            <span className="mr-4 text-primaryDark">{title} </span>
            <span className="mr-4  text-primaryBlue">Białko: {proteins}</span>
            <span className="mr-4 text-primaryDark">Węglowodany: {carbons}</span>
            <span className="mr-4  text-primaryBlue">Tłuszcze: {fat}</span>
            <span className="mr-4 text-primaryDark">Kalorie: {kcal}</span>
        </div>
    )
}
