import { IUserWorkoutDataFromDatabase } from "@/types"
import { SingleWorkoutHistory } from "../SingleWorkoutHistory/SingleWorkoutHistory"

interface Props {
    workoutHistory?: IUserWorkoutDataFromDatabase[]
}

export const WorkoutHistory = ({ workoutHistory }: Props) => {
    return (
        <div>
            {workoutHistory ? (
                workoutHistory.map(({ workout: { workoutData, date }, id }) => {
                    return <SingleWorkoutHistory key={id} workoutData={workoutData} date={date} />
                })
            ) : (
                <p>Brak dancyh o historii treningów</p>
            )}
        </div>
    )
}
