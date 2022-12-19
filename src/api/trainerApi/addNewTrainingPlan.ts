import { NEW_TRAINING_PLAN } from "@/constants"
import { isAxiosError } from "@/helpers"
import { IAddNewTrainingPlanPayload, IStandardResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const addNewTrainingPlan = async (newTrainingPlan: IAddNewTrainingPlanPayload) => {
    try {
        const { data } = await instance.post<IStandardResponse>(NEW_TRAINING_PLAN, newTrainingPlan)

        return data
    } catch (error: unknown) {
        if (isAxiosError<IStandardResponse>(error) && error.response?.data) {
            return error.response?.data
        }

        throw error
    }
}
