import { ALL_STUDENTS } from "@/constants"
import { IAllStudentsResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const getAllStudents = async () => {
    const { data } = await instance.get<IAllStudentsResponse>(ALL_STUDENTS)

    return data
}
