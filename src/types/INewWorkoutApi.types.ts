import { RESPONSE_CODE } from "@/enums"

export interface INewWorkoutPayload {
    workoutData: {
        exerciseName: string
        repsQuantity: number
        seriesQuantity: number
        weightQuantity: number
    }[]
}

export interface INewWorkoutResponse {
    code: RESPONSE_CODE
    message: string
    success: string
}
