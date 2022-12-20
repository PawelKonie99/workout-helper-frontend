import { SEND_STUDENT_TRAINER_DECISION } from "@/constants/apiRoutes"
import { isAxiosError } from "@/helpers"
import { IUserDecisionPayload, IUserDecisionResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const sendStudentTrainerDecision = async (studentDecisionPayload: IUserDecisionPayload) => {
    try {
        const { data } = await instance.post<IUserDecisionResponse>(
            SEND_STUDENT_TRAINER_DECISION,
            studentDecisionPayload,
        )

        return data
    } catch (error: unknown) {
        if (isAxiosError<IUserDecisionResponse>(error) && error.response?.data) {
            return error.response?.data
        }

        throw error
    }
}
