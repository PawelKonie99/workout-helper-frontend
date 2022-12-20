import { useEffect, useState } from "react"
import { getAllUserWorkouts } from "@/api"
import { WorkoutHistory } from "@/components"
import { IUserWorkoutDataFromDatabase } from "@/types"

const AllWorkoutsHistory = () => {
    const [workoutHistory, setWorkoutHistory] = useState<IUserWorkoutDataFromDatabase[]>()

    useEffect(() => {
        const loadWorkouts = async () => {
            const { allUserWorkouts } = await getAllUserWorkouts()
            allUserWorkouts && setWorkoutHistory(allUserWorkouts)
        }

        loadWorkouts()
    }, [])

    return <WorkoutHistory workoutHistory={workoutHistory} />
}

export default AllWorkoutsHistory
