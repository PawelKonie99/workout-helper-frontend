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
        }

        loadWorkouts()
    }, [offset])

    return (
        <WorkoutHistory workoutHistory={workoutHistory} handleChangeOffset={handleChangeOffset} />
    )
}

export default AllWorkoutsHistory
