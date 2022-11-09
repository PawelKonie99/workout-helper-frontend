import { RESPONSE_CODE } from "@/enums"
import { IWorkoutFields } from "./IWorkoutApi.types"

export interface IAddStudentSchema {
    studentName: string
}

export interface INewStudentPayload {
    studentName: string
}

export interface IAllStudentsResponse {
    code: number
    allStudents: IStudentData[]
    success: boolean
}

export interface IStudentData {
    user: string
    studentName: string
    id: string
}

export interface IAddStudentPlanSchema {
    workoutData: {
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
    }[]
    userData: {
        value: string
        label: string
    }
}

export interface IStudentPlanOption {
    value: string
    label: string
}

export interface IAddNewTrainingPlanPayload {
    workoutData: IWorkoutFields[]
    userData: {
        id: string
        userName: string
    }
}
