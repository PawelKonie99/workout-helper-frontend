import { useEffect, useState } from "react"
import { getAllWorkoutOptions } from "@/api"
import { IWorkoutOption } from "@/types"

export const useGetAllWorkoutOptions = () => {
    const [workoutOptions, setWorkoutOptions] = useState<{
        EXERCISE: IWorkoutOption[]
        REPS: IWorkoutOption[]
        SERIES: IWorkoutOption[]
    }>()

    useEffect(() => {
        const getWorkoutOptions = async () => {
            const { exercise, series, reps } = await getAllWorkoutOptions()

            if (exercise && series && reps) {
                setWorkoutOptions({
                    EXERCISE: exercise,
                    SERIES: series,
                    REPS: reps,
                })
            }
        }

        getWorkoutOptions()
    }, [])

    return workoutOptions
}
