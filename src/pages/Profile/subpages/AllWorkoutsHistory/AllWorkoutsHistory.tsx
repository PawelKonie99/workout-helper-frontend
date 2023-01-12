import { toast } from "react-toastify"
import { useEffect, useState } from "react"
import { getAllUserWorkouts } from "@/api"
import { WorkoutHistory } from "@/components"
import { IUserWorkoutDataFromDatabase } from "@/types"

const AllWorkoutsHistory = () => {
    const [workoutHistory, setWorkoutHistory] = useState<IUserWorkoutDataFromDatabase[]>()
    const [offset, setOffset] = useState<number>(1)

    const handleChangeOffset = () => {
        setOffset((prevState) => prevState + 1)
    }

    useEffect(() => {
        const loadWorkouts = async () => {
            const { allUserWorkouts } = await getAllUserWorkouts(offset)
            allUserWorkouts && setWorkoutHistory(allUserWorkouts)

            if (allUserWorkouts?.length === workoutHistory?.length) {
                toast.error("Nie ma więcej dostępnych danych")
            }
        }

        loadWorkouts()
    }, [offset])

    return (
        <div className="mb-10">
            <WorkoutHistory
                workoutHistory={workoutHistory}
                handleChangeOffset={handleChangeOffset}
            />
        </div>
    )
}

export default AllWorkoutsHistory
