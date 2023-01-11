import { NormalButton, SingleWorkoutHistory } from "@/components"
import { IUserWorkoutDataFromDatabase } from "@/types"

interface Props {
    workoutHistory?: IUserWorkoutDataFromDatabase[]
    handleChangeOffset?: () => void
}

export const WorkoutHistory = ({ workoutHistory, handleChangeOffset }: Props) => {
    const handleLoadHistory = async () => {
        handleChangeOffset && handleChangeOffset()
    }

    return (
        <div>
            {workoutHistory && workoutHistory?.length > 0 ? (
                workoutHistory.map(({ workout: { workoutData, date }, id }) => (
                    <SingleWorkoutHistory workoutData={workoutData} date={date} key={id} />
                ))
            ) : (
                <p>Brak danych o historii treningów</p>
            )}
            {workoutHistory && workoutHistory?.length > 0 && (
                <NormalButton
                    buttonVariant="primary"
                    label="Pobierz wiecej historii posiłków"
                    onClick={handleLoadHistory}
                    className="mt-4"
                />
            )}
        </div>
    )
}
