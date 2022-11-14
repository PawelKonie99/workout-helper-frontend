import { MEAL_TYPES, RESPONSE_CODE } from "@/enums"
import { IMealMacros, IProductPayload, IProductsSummary } from "./IMealApi.types"
import { IUserWorkoutDataFromDatabase, IWorkoutFields } from "./IWorkoutApi.types"

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

export interface IGetSingleStudentDataResponse {
    code: RESPONSE_CODE
    success: boolean
    allUserWorkouts?: IUserWorkoutDataFromDatabase[] | []
    mealHistory?:
        | {
              dailySummary: IProductsSummary
              mealDate: string
              breakfast: IMealMacros
              brunch: IMealMacros
              dinner: IMealMacros
              dessert: IMealMacros
              supper: IMealMacros
          }[]
        | []
}

export interface IChoosenStudentData {
    studentName?: string
    allUserWorkouts?: IUserWorkoutDataFromDatabase[] | []
    mealHistory?:
        | {
              dailySummary: IProductsSummary
              mealDate: string
              breakfast: IMealMacros
              brunch: IMealMacros
              dinner: IMealMacros
              dessert: IMealMacros
              supper: IMealMacros
          }[]
        | []
}
