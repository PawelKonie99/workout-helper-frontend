import { SingleWorkoutHistory } from "@/components"
import { IUserWorkoutDataFromDatabase } from "@/types"

interface Props {
    workoutHistory?: IUserWorkoutDataFromDatabase[]
}

export const WorkoutHistory = ({ workoutHistory }: Props) => {
    return (
        <div>
            {workoutHistory && workoutHistory?.length > 0 ? (
                workoutHistory.map(({ workout: { workoutData, date }, id }) => {
                    return <SingleWorkoutHistory key={id} workoutData={workoutData} date={date} />
                })
            ) : (
                <p>Brak danych o historii treningów</p>
            )}
        </div>
    )
}
