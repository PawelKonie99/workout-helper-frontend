import { BEST_WORKOUT_EXERCISE } from "@/constants"
import { IBestExerciseResponse } from "@/types/IWorkoutApi.types"
import { instance } from "../interceptors/sendToken"

export const getBestExercise = async (exerciseName: string) => {
    const { data } = await instance.get<IBestExerciseResponse>(BEST_WORKOUT_EXERCISE, {
        params: { exerciseName },
    })

    return data
}
