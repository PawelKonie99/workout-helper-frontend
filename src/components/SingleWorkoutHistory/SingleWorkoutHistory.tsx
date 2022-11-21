import { formatDate } from "@/helpers"
import { IWorkoutFields } from "@/types"
import { SingleElementInfo } from "../SingleElementInfo/SingleElementInfo"

interface Props {
    workoutData: IWorkoutFields[]
    date?: string
}

export const SingleWorkoutHistory = ({ workoutData, date }: Props) => {
    return (
        <div className="mb-4">
            {date && <span className="text-primaryBlue text-lg">{formatDate(date)}</span>}
            {workoutData.map(({ exerciseName, repsQuantity, seriesQuantity, weightQuantity }) => (
                <div key={exerciseName} className="flex mb-1">
                    <SingleElementInfo
                        macroElementName="Nazwa ćwiczenia"
                        valueOfMacroElement={exerciseName}
                    />
                    <SingleElementInfo
                        macroElementName="Ilość powtórzeń"
                        valueOfMacroElement={repsQuantity}
                    />
                    <SingleElementInfo
                        macroElementName="Nazwa serii"
                        valueOfMacroElement={seriesQuantity}
                    />
                    <SingleElementInfo
                        macroElementName="Waga obiązenia"
                        valueOfMacroElement={weightQuantity}
                        unit="kg"
                    />
                </div>
            ))}
        </div>
    )
}
