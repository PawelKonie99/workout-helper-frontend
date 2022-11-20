import { IProductsSummary } from "@/types"
import { SingleElementInfo } from "../SingleElementInfo/SingleElementInfo"

interface Props {
    title: string
    dailySummary: IProductsSummary
}

export const MacrosSummary = ({ title, dailySummary }: Props) => {
    const { totalKcal, totalProteins, totalCarbons, totalFat } = dailySummary
    return (
        <div className="flex flex-col">
            <span className="mr-4 text-primaryBlue text-lg">{title}</span>
            <SingleElementInfo
                macroElementName="Kalorie"
                valueOfMacroElement={totalKcal?.toFixed(2)}
            />
            <SingleElementInfo
                macroElementName="Białko"
                valueOfMacroElement={totalProteins?.toFixed(2)}
                unit="g"
            />
            <SingleElementInfo
                macroElementName="Węglowodany"
                valueOfMacroElement={totalCarbons?.toFixed(2)}
                unit="g"
            />
            <SingleElementInfo
                macroElementName="Tłuszcze"
                valueOfMacroElement={totalFat?.toFixed(2)}
                unit="g"
            />
        </div>
    )
}
