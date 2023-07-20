import useSWR, { Fetcher } from "swr"
import { getAllWorkoutOptions } from "@/api"
import { IAllWorkoutOptionsResponse } from "@/types"
import { ALL_WORKOUT_OPTIONS } from "@/constants/apiRoutes"

const fetcher: Fetcher<IAllWorkoutOptionsResponse> = () => getAllWorkoutOptions()

export const useGetAllWorkoutOptions = () => {
    const { data, error } = useSWR(ALL_WORKOUT_OPTIONS, fetcher)

    return { data, error }
}
