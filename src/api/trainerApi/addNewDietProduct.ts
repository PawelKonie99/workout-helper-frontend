import { ADD_NEW_DIET_PRODUCT } from "@/constants/apiRoutes"
import { isAxiosError } from "@/helpers"
import { IAddNewDietPayload, IStandardResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const addNewDietProduct = async (newDietProduct: IAddNewDietPayload) => {
    try {
        const { data } = await instance.post<IStandardResponse>(
            ADD_NEW_DIET_PRODUCT,
            newDietProduct,
        )

        return data
    } catch (error: unknown) {
        if (isAxiosError<IStandardResponse>(error) && error.response?.data) {
            return error.response?.data
        }

        throw error
    }
}
