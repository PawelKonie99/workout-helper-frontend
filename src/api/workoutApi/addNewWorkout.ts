import { INewWorkoutPayload, IStandardResponse } from "@/types"
import { NEW_WORKOUT } from "@/constants/apiRoutes"
import { instance } from "../interceptors/sendToken"

export const addNewWorkout = async (workoutPayload: INewWorkoutPayload) => {
    const { data } = await instance.post<IStandardResponse>(NEW_WORKOUT, workoutPayload)

    return data
}
