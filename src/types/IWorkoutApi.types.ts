import { RESPONSE_CODE } from "@/enums"

export interface INewWorkoutPayload {
    workoutData: IWorkoutFields[]
}

export interface IUserWorkoutDataFromDatabase {
    id: string
    workout: {
        date: string
        workoutData: IWorkoutFields[]
    }
}

export interface IAllWorkoutsResponse {
    code: RESPONSE_CODE
    success: boolean
    allUserWorkouts?: IUserWorkoutDataFromDatabase[]
}

export interface IWorkoutFields {
    exerciseName: string
    repsQuantity: number
    seriesQuantity: number
    weightQuantity: number
}

export interface IUserWorkoutData {
    date: string
    workoutData: IWorkoutFields[]
}

export interface IAllWorkoutOptionsResponse {
    code: RESPONSE_CODE
    success: boolean
    exercise: IWorkoutOption[] | []
    weight: IWorkoutOption[] | []
    reps: IWorkoutOption[] | []
    series: IWorkoutOption[] | []
}

export interface IWorkoutOption {
    value: string
    label: string
}

export interface IBestExerciseResponse {
    code: RESPONSE_CODE
    success: boolean
    exerciseWithRecord:
        | {
              workoutData: {
                  exerciseName: string
                  repsQuantity: number
                  seriesQuantity: number
                  weightQuantity: number
              }
          }
        | Record<string, never>
}

export interface IWorkoutSeriesSchema {
    workoutData: IWorkoutFormField[]
}

export interface IWorkoutFormField {
    exerciseName: {
        value: string
        label: string
    }
    repsQuantity: {
        value: string
        label: string
    }
    seriesQuantity: {
        value: string
        label: string
    }
    weightQuantity: {
        value: string
        label: string
    }
}
