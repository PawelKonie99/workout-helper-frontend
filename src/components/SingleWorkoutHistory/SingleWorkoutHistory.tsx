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
                <div key={exerciseName} className="flex flex-col md:flex-row mb-1">
                    <SingleElementInfo name="Nazwa ćwiczenia" value={exerciseName} />
                    <SingleElementInfo name="Ilość powtórzeń" value={repsQuantity} />
                    <SingleElementInfo name="Nazwa serii" value={seriesQuantity} />
                    <SingleElementInfo name="Waga obiązenia" value={weightQuantity} unit="kg" />
                </div>
            ))}
        </div>
    )
}
