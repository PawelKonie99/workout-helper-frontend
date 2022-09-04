import { RESPONSE_CODE } from "@/enums"

export interface INewWorkoutPayload {
    workoutData: IWorkoutFields[]
}

export interface IWorkoutFields {
    exerciseName: string
    repsQuantity: number
    seriesQuantity: number
    weightQuantity: number
}

export interface INewWorkoutResponse {
    code: RESPONSE_CODE
    message: string
    success: string
}

export interface IGetAllUserWorkoutsResponse {
    code: RESPONSE_CODE
    success: boolean
    allUserWorkouts?: IUserWorkoutDataFromDatabase[]
}

export interface IUserWorkoutDataFromDatabase {
    id: string
    workout: {
        date: string
        workoutData: IWorkoutFields[]
    }
}

export interface IUserWorkoutData {
    date: string
    workoutData: IWorkoutFields[]
}
