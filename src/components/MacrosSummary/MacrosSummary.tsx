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
            <SingleElementInfo name="Kalorie" value={totalKcal?.toFixed(2)} />
            <SingleElementInfo name="Białko" value={totalProteins?.toFixed(2)} unit="g" />
            <SingleElementInfo name="Węglowodany" value={totalCarbons?.toFixed(2)} unit="g" />
            <SingleElementInfo name="Tłuszcze" value={totalFat?.toFixed(2)} unit="g" />
        </div>
    )
}
