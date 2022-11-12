import { NEW_TRAINING_PLAN } from "@/constants"
import { IAddNewTrainingPlanPayload, IStandardResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const addNewTrainingPlan = async (newTrainingPlan: IAddNewTrainingPlanPayload) => {
    const { data } = await instance.post<IStandardResponse>(NEW_TRAINING_PLAN, newTrainingPlan)

    return data
}
