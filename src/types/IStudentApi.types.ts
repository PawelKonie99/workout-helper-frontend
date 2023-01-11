import { MANAGE_REQUESTED_TRAINERS, RESPONSE_CODE } from "@/enums"
import { IWorkoutFields, IDatabaseProduct, IMealMacros } from "."

export interface ITrainingPlanResponse {
    code: RESPONSE_CODE
    success: boolean
    trainingPlan?: IWorkoutFields[] | []
}

export interface IGetStudenDietResponse {
    code: RESPONSE_CODE
    success: boolean
    diet?: IUserDietData
}

export interface IUserDietData extends IDietMeals {
    dailySummary: IMealMacros
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
