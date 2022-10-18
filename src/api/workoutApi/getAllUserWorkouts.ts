import { ALL_USER_WORKOUTS } from "@/constants"
import { IGetAllUserWorkoutsResponse } from "@/types/IWorkoutApi.types"
import { instance } from "../interceptors/sendToken"

export const getAllUserWorkouts = async () => {
    const { data } = await instance.get<IGetAllUserWorkoutsResponse>(ALL_USER_WORKOUTS)

    return data
}
