import { ALL_USER_WORKOUTS } from "@/constants"
import { isAxiosError } from "@/helpers"
import { IAllWorkoutsResponse } from "@/types/IWorkoutApi.types"
import { instance } from "../interceptors/sendToken"

export const getAllUserWorkouts = async () => {
    try {
        const { data } = await instance.get<IAllWorkoutsResponse>(ALL_USER_WORKOUTS)

        return data
    } catch (error: unknown) {
        if (isAxiosError<IAllWorkoutsResponse>(error) && error.response?.data) {
            return error.response?.data
        }

        throw error
    }
}
