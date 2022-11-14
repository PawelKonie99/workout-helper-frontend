import { GET_STUDENT_DIET } from "@/constants"
import { IGetStudenDietResponse, ISelectOption } from "@/types"
import { instance } from "../interceptors/sendToken"

export const getStudentDiet = async (choosenUser: ISelectOption) => {
    const { data } = await instance.get<IGetStudenDietResponse>(
        `${GET_STUDENT_DIET}/${choosenUser.value}`,
    )

    return data
}
