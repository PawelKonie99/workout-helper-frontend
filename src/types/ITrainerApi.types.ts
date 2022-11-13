import { MEAL_TYPES } from "@/enums"
import { IProductPayload } from "./IMealApi.types"
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

export interface IAddNewDietPayload {
    studentId: string
    productPayload: IProductPayload
}

export interface IRemoveDietProduct {
    studentId: string
    productToRemove: IRemoveDietProductPayload
}

export interface IRemoveDietProductPayload {
    productId: string
    typeOfMeal: MEAL_TYPES
}
