import { GET_TRAINING_PLAN } from "@/constants"
import { ITrainingPlanResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const getTrainingPlan = async () => {
    const { data } = await instance.get<ITrainingPlanResponse>(GET_TRAINING_PLAN)

    return data
}
