import { GET_TRAINING_PLAN } from "@/constants"
import { isAxiosError } from "@/helpers"
import { ITrainingPlanResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const getTrainingPlan = async () => {
    try {
        const { data } = await instance.get<ITrainingPlanResponse>(GET_TRAINING_PLAN)

        return data
    } catch (error: unknown) {
        if (isAxiosError<ITrainingPlanResponse>(error) && error.response?.data) {
            return error.response?.data
        }

        throw error
    }
}
