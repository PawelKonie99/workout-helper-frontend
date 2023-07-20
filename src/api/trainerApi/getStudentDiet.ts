import { GET_STUDENT_DIET } from "@/constants"
import { IGetStudenDietResponse, ISelectOption } from "@/types"
import { instance } from "../interceptors/sendToken"
import { RESPONSE_CODE } from "@/enums"

export const getStudentDiet = async (choosenUser?: ISelectOption) => {
    if (!choosenUser) {
        return { code: RESPONSE_CODE.badRequest, success: false }
    }

    const { data } = await instance.get<IGetStudenDietResponse>(
        `${GET_STUDENT_DIET}/${choosenUser.value}`,
    )

    return data
}
