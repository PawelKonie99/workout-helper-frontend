import { RESPONSE_CODE } from "@/enums"
import { IWorkoutFields, IDatabaseProduct } from "."

export interface ITrainingPlanResponse {
    code: RESPONSE_CODE
    success: boolean
    trainingPlan?: IWorkoutFields[] | []
}

export interface IGetStudenDietResponse {
    code: RESPONSE_CODE
    success: boolean
    diet?: IDietMeals | Record<string, never>
}

export interface IDietMeals {
    breakfast: IDatabaseProduct[]
    brunch: IDatabaseProduct[]
    dinner: IDatabaseProduct[]
    dessert: IDatabaseProduct[]
    supper: IDatabaseProduct[]
}
