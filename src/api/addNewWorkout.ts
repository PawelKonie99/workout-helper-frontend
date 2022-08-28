import { INewWorkoutPayload } from "@/types"
import { NEW_WORKOUT } from "@/constants/apiRoutes"
import { instance } from "./interceptors/sendToken"

export const addNewWorkout = async (workoutPayload: INewWorkoutPayload) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response = await instance.post<any>(NEW_WORKOUT, workoutPayload) //TODO dodac response
    //* Interceptor sie uzwa dlatego, ze tutaj mamy instance.post zamiast axios.post instance jest zrobiony recznie, jest to instacja axiosa

    return response.data
}
