import { INewWorkoutPayload, IStandardResponse } from "@/types"
import { NEW_WORKOUT } from "@/constants/apiRoutes"
import { instance } from "../interceptors/sendToken"
import { isAxiosError } from "@/helpers"

export const addNewWorkout = async (workoutPayload: INewWorkoutPayload) => {
    try {
        const { data } = await instance.post<IStandardResponse>(NEW_WORKOUT, workoutPayload)

        return data
    } catch (error: unknown) {
        if (isAxiosError<IStandardResponse>(error) && error.response?.data) {
            return error.response?.data
        }

        throw error
    }
}
