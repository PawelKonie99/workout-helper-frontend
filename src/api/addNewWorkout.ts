import { INewWorkoutPayload } from "@/types"
import { NEW_WORKOUT } from "@/constants/apiRoutes"
import { instance } from "./interceptors/sendToken"
import { INewWorkoutResponse } from "@/types/INewWorkoutApi.types"

export const addNewWorkout = async (workoutPayload: INewWorkoutPayload) => {
    const { data } = await instance.post<INewWorkoutResponse>(NEW_WORKOUT, workoutPayload) //TODO dodac response
    //* Interceptor sie uzwa dlatego, ze tutaj mamy instance.post zamiast axios.post instance jest zrobiony recznie, jest to instacja axiosa

    return data
}
