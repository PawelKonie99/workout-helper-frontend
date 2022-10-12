import { useEffect, useState } from "react"
import { getAllWorkoutOptions } from "@/api"
import { IWorkoutOption } from "@/types"

export const useGetAllWorkoutOptions = () => {
    const [workoutOptions, setWorkoutOptions] = useState<{
        EXERCISE: IWorkoutOption[]
        WEIGHT: IWorkoutOption[]
        REPS: IWorkoutOption[]
        SERIES: IWorkoutOption[]
    }>()

    useEffect(() => {
        const getWorkoutOptions = async () => {
            const { exercise, series, reps, weight } = await getAllWorkoutOptions()

            if (exercise && series && reps && weight) {
                setWorkoutOptions({
                    EXERCISE: exercise,
                    SERIES: series,
                    REPS: reps,
                    WEIGHT: weight,
                })
            }
        }

        getWorkoutOptions()
    }, [])

    return workoutOptions
}
