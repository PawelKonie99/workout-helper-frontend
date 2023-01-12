import { WORKOUT_BY_DATE } from "@/constants"

import { IAllWorkoutsResponse } from "@/types/IWorkoutApi.types"
import { instance } from "../interceptors/sendToken"

export const getWorkoutByDate = async (date: string) => {
    const { data } = await instance.get<IAllWorkoutsResponse>(`${WORKOUT_BY_DATE}/${date}`)

    return data
}
