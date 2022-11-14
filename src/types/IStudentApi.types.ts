import { RESPONSE_CODE } from "@/enums"
import { IWorkoutFields, IDatabaseProduct, IProductsSummary } from "."

export interface ITrainingPlanResponse {
    code: RESPONSE_CODE
    success: boolean
    trainingPlan?: IWorkoutFields[] | []
}

export interface IGetStudenDietResponse {
    code: RESPONSE_CODE
    success: boolean
    diet?: IUserDietData | Record<string, never>
}

export interface IUserDietData extends IDietMeals {
    dailySummary: IProductsSummary
}

export interface IDietMeals {
    breakfast: IDatabaseProduct[]
    brunch: IDatabaseProduct[]
    dinner: IDatabaseProduct[]
    dessert: IDatabaseProduct[]
    supper: IDatabaseProduct[]
}
