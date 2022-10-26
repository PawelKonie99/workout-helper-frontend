import { ALL_USER_WORKOUTS } from "@/constants"
import { IAllWorkoutsResponse } from "@/types/IWorkoutApi.types"
import { instance } from "../interceptors/sendToken"

export const getAllUserWorkouts = async () => {
    const { data } = await instance.get<IAllWorkoutsResponse>(ALL_USER_WORKOUTS)

    return data
}
