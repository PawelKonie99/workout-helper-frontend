import { IMealMacros } from "@/types"
import { SingleElementInfo } from "../SingleElementInfo/SingleElementInfo"

interface Props {
    title: string
    dailySummary: IMealMacros
}

export const MacrosSummary = ({ title, dailySummary }: Props) => {
    const { kcal, proteins, carbons, fat } = dailySummary
    return (
        <div className="flex flex-col ml-8 min-w-max">
            <span className="mr-4 text-primaryBlue text-lg">{title}</span>
            <SingleElementInfo name="Kalorie" value={kcal?.toFixed(2)} />
            <SingleElementInfo name="Białko" value={proteins?.toFixed(2)} unit="g" />
            <SingleElementInfo name="Węglowodany" value={carbons?.toFixed(2)} unit="g" />
            <SingleElementInfo name="Tłuszcze" value={fat?.toFixed(2)} unit="g" />
        </div>
    )
}
