import { NEW_STUDENT } from "@/constants/apiRoutes"
import { instance } from "../interceptors/sendToken"
import { INewStudentPayload } from "@/types/ITrainer.types"
import { IStandardResponse } from "@/types"

export const addStudent = async (newStudentPayload: INewStudentPayload) => {
    const { data } = await instance.post<IStandardResponse>(NEW_STUDENT, newStudentPayload)

    return data
}
