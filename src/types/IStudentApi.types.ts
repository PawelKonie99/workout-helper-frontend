import { MANAGE_REQUESTED_TRAINERS, RESPONSE_CODE } from "@/enums"
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

export interface IGetTrainerRequestResponse {
    code: RESPONSE_CODE
    success: boolean
    requestedTrainers?: IRequestedTrainerData[] | []
}

export interface IRequestedTrainerData {
    username: string
    id: string
}

export interface IUserDecisionPayload {
    userDecision: MANAGE_REQUESTED_TRAINERS
    trainerId: string
}

export interface IUserDecisionResponse {
    code: RESPONSE_CODE
    message: string
    success: boolean
    trainerName: string
}
