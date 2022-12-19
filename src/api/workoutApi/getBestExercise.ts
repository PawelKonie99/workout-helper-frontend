import { BEST_WORKOUT_EXERCISE } from "@/constants"
import { isAxiosError } from "@/helpers"
import { IBestExerciseResponse } from "@/types/IWorkoutApi.types"
import { instance } from "../interceptors/sendToken"

export const getBestExercise = async (exerciseName: string) => {
    try {
        const { data } = await instance.get<IBestExerciseResponse>(BEST_WORKOUT_EXERCISE, {
            params: { exerciseName },
        })

        return data
    } catch (error: unknown) {
        if (isAxiosError<IBestExerciseResponse>(error) && error.response?.data) {
            return error.response?.data
        }

        throw error
    }
}
