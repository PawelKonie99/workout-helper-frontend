import { RESPONSE_CODE } from "@/enums"
import { IWorkoutFields } from "."

export interface ITrainingPlanResponse {
    code: RESPONSE_CODE
    success: boolean
    trainingPlan?: IWorkoutFields[] | []
}
