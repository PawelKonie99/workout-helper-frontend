import { SEND_STUDENT_TRAINER_DECISION } from "@/constants/apiRoutes"
import { IUserDecisionPayload } from "@/types"
import { instance } from "../interceptors/sendToken"

export const sendStudentTrainerDecision = async (studentDecisionPayload: IUserDecisionPayload) => {
    const { data } = await instance.post<any>(SEND_STUDENT_TRAINER_DECISION, studentDecisionPayload)

    return data
}
