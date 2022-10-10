import { ALL_WORKOUT_OPTIONS } from "@/constants/apiRoutes"
import { IAllWorkoutOptionsResponse } from "@/types/IWorkoutApi.types"
import { instance } from "../interceptors/sendToken"

export const getAllWorkoutOptions = async () => {
    const { data } = await instance.get<IAllWorkoutOptionsResponse>(ALL_WORKOUT_OPTIONS)

    return data
}
