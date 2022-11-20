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
            <SingleElementInfo macroElementName="Białko" valueOfMacroElement={proteins} unit="g" />
            <SingleElementInfo
                macroElementName="Węglowodany"
                valueOfMacroElement={carbons}
                unit="g"
            />
            <SingleElementInfo macroElementName="Tłuszcze" valueOfMacroElement={fat} unit="g" />
            <SingleElementInfo macroElementName="Kalorie" valueOfMacroElement={kcal} />
        </div>
    )
}
