import { ALL_WORKOUT_OPTIONS } from "@/constants/apiRoutes"
import { isAxiosError } from "@/helpers"
import { IAllWorkoutOptionsResponse } from "@/types/IWorkoutApi.types"
import { instance } from "../interceptors/sendToken"

export const getAllWorkoutOptions = async () => {
    try {
        const { data } = await instance.get<IAllWorkoutOptionsResponse>(ALL_WORKOUT_OPTIONS)

        return data
    } catch (error: unknown) {
        if (isAxiosError<IAllWorkoutOptionsResponse>(error) && error.response?.data) {
            return error.response?.data
        }

        throw error
    }
}
