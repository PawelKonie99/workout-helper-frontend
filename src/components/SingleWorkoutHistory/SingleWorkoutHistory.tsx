import { formatDate } from "@/helpers"
import { IWorkoutFields } from "@/types"

interface Props {
    workoutData: IWorkoutFields[]
    date?: string
}

export const SingleWorkoutHistory = ({ workoutData, date }: Props) => {
    return (
        <div className="mb-4">
            {date && <span>{formatDate(date)}</span>}
            {workoutData.map(({ exerciseName, repsQuantity, seriesQuantity, weightQuantity }) => (
                <div key={exerciseName} className="flex">
                    <span className="mr-4 text-primaryDark">Nazwa ćwiczenia: {exerciseName}</span>
                    <span className="mr-4  text-primaryBlue">Ilość powtórzeń: {repsQuantity}</span>
                    <span className="mr-4 text-primaryDark">Nazwa serii: {seriesQuantity}</span>
                    <span className="mr-4  text-primaryBlue">Waga obiązenia: {weightQuantity}</span>
                </div>
            ))}
        </div>
    )
}
