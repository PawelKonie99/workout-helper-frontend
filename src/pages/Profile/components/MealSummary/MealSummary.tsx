import { SingleElementInfo } from "@/components"
import { IMealMacros } from "@/types"

interface IProps {
    title: string
    timeOfMeal: IMealMacros
}

export const MealSummary = ({ title, timeOfMeal }: IProps) => {
    const { carbons, fat, kcal, proteins } = timeOfMeal

    return (
        <div className="flex flex-col">
            <span className="text-primaryBlue text-lg">{title}</span>
            <SingleElementInfo name="Białko" value={proteins.toFixed(2)} unit="g" />
            <SingleElementInfo name="Węglowodany" value={carbons.toFixed(2)} unit="g" />
            <SingleElementInfo name="Tłuszcze" value={fat.toFixed(2)} unit="g" />
            <SingleElementInfo name="Kalorie" value={kcal.toFixed(2)} />
        </div>
    )
}
