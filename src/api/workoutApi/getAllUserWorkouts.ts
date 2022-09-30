import { ALL_USER_WORKOUTS } from "@/constants"
import { IGetAllUserWorkoutsResponse } from "@/types/IWorkoutApi.types"
import { instance } from "../interceptors/sendToken"

//TODO pomyslec czy nie trzymac tego w reduxie
export const getAllUserWorkouts = async () => {
    const { data } = await instance.get<IGetAllUserWorkoutsResponse>(ALL_USER_WORKOUTS)

    return data
}
