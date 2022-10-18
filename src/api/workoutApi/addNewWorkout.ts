import { INewWorkoutPayload } from "@/types"
import { NEW_WORKOUT } from "@/constants/apiRoutes"
import { instance } from "../interceptors/sendToken"
import { INewWorkoutResponse } from "@/types/IWorkoutApi.types"

export const addNewWorkout = async (workoutPayload: INewWorkoutPayload) => {
    const { data } = await instance.post<INewWorkoutResponse>(NEW_WORKOUT, workoutPayload)

    return data
}
