import { NEW_STUDENT } from "@/constants/apiRoutes"
import { instance } from "../interceptors/sendToken"
import { INewStudentPayload, INewStudentResponse } from "@/types/ITrainer.types"

export const addStudent = async (newStudentPayload: INewStudentPayload) => {
    const { data } = await instance.post<INewStudentResponse>(NEW_STUDENT, newStudentPayload)

    return data
}
