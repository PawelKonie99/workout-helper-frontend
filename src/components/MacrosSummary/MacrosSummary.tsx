import { IProductsSummary } from "@/types"

interface Props {
    title: string
    dailySummary: IProductsSummary
}

export const MacrosSummary = ({ title, dailySummary }: Props) => {
    const { totalKcal, totalProteins, totalCarbons, totalFat } = dailySummary
    return (
        <div className="flex flex-col">
            <span>{title}</span>
            <span>Kalorie: {totalKcal?.toFixed(2)}</span>
            <span>Białko: {totalProteins?.toFixed(2)}</span>
            <span>Węglowodany: {totalCarbons?.toFixed(2)}</span>
            <span>Tłuszcze: {totalFat?.toFixed(2)}</span>
        </div>
    )
}
