import { GET_SINGLE_USER } from "@/constants"
import { IGetSingleStudentDataResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const getSingleStudentData = async (userId: string) => {
    const { data } = await instance.get<IGetSingleStudentDataResponse>(
        `${GET_SINGLE_USER}/${userId}`,
    )

    return data
}
